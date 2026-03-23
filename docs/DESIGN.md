# Blog Design v3 — After jnsgruk Research

> Key insight: the blog IS the portfolio. Articles replace project cards.
> Each article tells the story of something built.
> Updated: March 24, 2026 (after studying jnsgruk's 34 posts over 6 years)

## What we learned (docs/RESEARCH-JNSGRUK.md)

His blog has NO "Projects" page. Every post follows:
1. "I had this problem"
2. "Here's how I solved it"  
3. "Here's what I learned"
4. Link to the repo

Posts build on each other as series. ~1 post/month matching build pace.
Titles are specific problems, not vague topics.

## New page structure

### Home — Thesis + recent articles (no project cards)

```
David Xu
AI Data Architecture

"AI is only as good as the data behind it."

Every AI app today is context-starved. Claude forgets what GPT did.
Gemini can't see what Codex built. You become the human relay
between AIs that should be sharing knowledge automatically.

The fix isn't better models. It's better data architecture.

WHAT I'M BUILDING AROUND

  ◆ Shared memory for AI agents
  ◇ Memory has layers
  ◇ Data quality is progressive

RECENT THINKING
  → [articles, not project cards]
```

### Writing — THE portfolio (replaces Projects)

Each article is a project showcase:
- "Why AI agents need shared memory" → IS the Datacore showcase
- "4 memory layers every system needs" → IS the architecture showcase
- "Debugging OpenClaw's rate limit" → IS the code contribution showcase

No separate Projects page needed. If someone wants repos,
links are in the articles.

### Projects page — REMOVE or make minimal

Option A: Remove entirely. Articles ARE the projects.
Option B: Keep as a minimal list of repos with one-line descriptions.
         No cards, no tech tags, no elaborate descriptions.

## Articles to write (in priority order)

### 1. "Why AI agents need shared memory"
- Problem: 4 AIs, 4 companies, zero shared context
- Solution: Datacore MCP server (link to repo)
- Numbers: 20,000+ events, 15 sources, 4 companies
- Architecture diagram included
- This replaces the Datacore project card

### 2. "4 memory layers every multi-agent system needs"
- Problem: AIs waste tokens loading unneeded context
- Solution: Identity / Working / Project / Shared
- The 6000→500 token insight
- Memory architecture diagram included
- This is original thinking — nobody else has written this

### 3. "How I debug unfamiliar codebases (OpenClaw rate limit story)"
- Problem: 50s fallback time
- Solution: stream wrapper intercepting rate limits
- What I learned: pi-sdk retry loop, model selection pipeline
- Shows: I can read and fix complex TypeScript
- This replaces the OpenClaw project card

### 4. "Medallion architecture isn't just for enterprise BI"
- Problem: enterprise pattern (Bronze/Silver/Gold) applied to AI agent data
- How it's different from Databricks documentation
- Our twist: each layer serves a different AI capability
- Shows: data engineering thinking

## What's NOT on the site

- No "About" page with career history
- No "Student at Curtin"  
- No tool advertisements (OpenClaw, Copilot, etc.)
- No "12 years in investment management"
- No elaborate project cards with tech tags

## Title rules (from jnsgruk analysis)

Good: specific problem → "Why AI agents need shared memory"
Bad: vague topic → "My thoughts on AI data"
Good: story → "How I debug unfamiliar codebases"
Bad: tutorial → "Getting started with MCP"

## Pace rule

Write at the pace you build. ~1 post when you ship something real.
Never write faster than you ship. The writing follows the work.
