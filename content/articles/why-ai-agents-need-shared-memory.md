---
title: "Why AI Agents Need Shared Memory"
date: "2026-03-26"
tags: ["Datacore", "MCP", "Data Engineering", "Azure"]
excerpt: "4 AI agents from 4 companies work on the same codebase. None of them can see what the others did. Here's how I built a shared memory layer that fixes this."
readTime: "10 min"
---

## The problem nobody talks about

I have four AI agents. Claude Desktop from Anthropic. Codex from OpenAI. Gemini from Google. OpenClaw managing them all through GitHub Copilot's API.

They all work on the same codebase. None of them know what the others did.

Claude reviews code and logs decisions. Gemini builds features and commits. Codex runs tests. OpenClaw dispatches tasks. But when Claude starts a new session, it has zero memory of what Gemini shipped an hour ago. When Gemini picks up a task, it doesn't know Claude flagged a security concern.

I became the human relay. Copy-pasting context between AI windows. Repeating myself. Losing track of which agent knew what.

The problem isn't that AI models are bad at memory. The problem is they have no shared memory at all.

## What I built

Datacore is a shared memory layer for AI agents. Every agent reads and writes to the same data store through MCP — Model Context Protocol. One protocol, one store, four companies.

The architecture is simple: every interaction becomes an event. Events are appended to local JSONL files (Bronze layer). A nightly pipeline syncs them to Azure Databricks where they're embedded and indexed for semantic search (Silver layer). Structured facts get promoted to a Gold layer for fast retrieval.

21,000+ events from 13 sources. Decisions, actions, insights, problems, conversations, tasks — all searchable by any agent.

When Claude starts a session now, it calls `get_tasks` and immediately sees what's assigned to it. When Gemini searches for "rate limit," it finds Claude's analysis from last week. When I ask "what did we decide about the Gold layer?" — any agent can answer because the decision is in shared memory.

## The architecture: 5 layers of memory

Every AI agent has a context window — a fixed amount of tokens it can think about at once. Load the wrong things and you waste expensive tokens. Load nothing and the agent starts from zero.

I built a 5-layer memory hierarchy — the same concept as a CPU cache, but for AI:

**L1 — Active Context** (always loaded, 3K-22K tokens). The system prompt, tool definitions, conversation history. Paid on every single turn. Only universal facts belong here.

**L2 — Hot Memory** (on-demand, <100ms). Recent decisions, active tasks, structured Gold entities. Retrieved via `search`, `get_tasks`, `get_facts`. Costs nothing until you need it.

**L3 — Warm Storage** (semantic search, 1-5s). 2,227 events embedded with Azure Databricks Vector Search using gte-large-en managed embeddings. Auto Loader syncs new events daily. Circuit breaker protects against API failures.

**L4 — Cold Storage** (keyword search, <100ms). The full Bronze archive — 21,000+ events, append-only, immutable. Everything ever logged lives here permanently.

**L5 — External** (network, 1-30s). GitHub repos, Azure resources, web, documentation. Results get cached in L4 on retrieval so nothing is lost.

The key principle: **data flows down automatically, promoted up deliberately.** New events land in L1 (the agent processes them), get logged to L4 (Bronze), sync to L3 (Silver) nightly, and only get promoted to L2 (Gold) when they're valuable enough to be structured facts.

## What makes this different

This isn't a RAG system bolted onto a chatbot. The agents don't just *read* from memory — they *write* to it. Every conversation, every decision, every task update becomes an event that every other agent can find.

The data layer IS the coordination protocol. No agent talks directly to another. They communicate through events:

1. Claude designs an architecture and logs a task spec to Bronze
2. OpenClaw picks up the task via `get_tasks`, dispatches to Gemini
3. Gemini builds the feature, commits, logs the result
4. Claude reviews by searching Bronze for the task update

This happened today. Three AI agents shipped a Gold layer implementation, a memory pipeline, and 8 new tests — coordinating entirely through shared data events.

## The numbers

The MCP server is small. 10 TypeScript source files, 6 MCP tools, 51 tests. Two runtime dependencies (`@modelcontextprotocol/sdk` and `zod`). CI runs CodeQL security scanning, dependency audits, format + lint + build + test on every push.

I scored the project against a full enterprise engineering standard — 5 branches covering coding foundations, distributed systems resilience, security, AI-driven development, and professional mindset. Composite score: 4.0/5.0. The patterns I implemented (Event-Driven Architecture, CQRS, Circuit Breaker, Saga) weren't chosen from a textbook. They emerged from solving real problems.

The weakest area? LLM security. When multiple AI agents share memory, a prompt-injected event in Bronze could poison any agent that retrieves it. I added trust-tagged events (verified, ai-generated, external) but the deeper problem — semantic prompt injection across agents — doesn't have a textbook answer yet.

## What I learned

**Memory architecture is token management.** Every token in the context window costs money on every turn. A fact stored in L2 (retrieved on demand) costs tokens only when needed. The same fact in L1 (pre-loaded) costs tokens every single turn forever. The 5-layer model exists to keep the right data in the fastest layer.

**Architecture patterns should emerge from problems, not from textbooks.** I didn't set out to implement CQRS. I built a write path (log_event → store.ts → Bronze) and a read path (search → search.ts) because the access patterns were different. That *is* CQRS. The circuit breaker came from Databricks API failures crashing the server. The saga pattern came from a sync pipeline that failed halfway and had no recovery.

**The data layer is the cheapest coordination mechanism.** Direct AI-to-AI communication requires real-time availability, compatible protocols, and complex routing. Shared append-only events require none of that. Write when ready. Read when needed. The simplest architecture that could possibly work.

## Try it

Datacore is open source: [github.com/david3xu/datacore](https://github.com/david3xu/datacore)

It's an MCP server — any AI app that supports MCP can use it as shared memory. Install it, point your AI agents at it, and every agent starts building on what the others learned.
