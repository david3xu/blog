---
title: "I Patched OpenClaw's Rate Limit Handling — 50s → 2s Fallback"
date: "2026-03-20"
tags: ["OpenClaw", "Open Source", "TypeScript"]
excerpt: "How a student contributed a rate-limit fix to a 247K-star project, cutting model fallback time from 50 seconds to 2."
readTime: "12 min"
draft: true
---

When OpenClaw hits a rate limit on one AI model, it should fall back to the next model in the chain. In theory, this takes a few seconds. In practice, it took 50 seconds — because the pi-sdk internally retries 3-4 times with exponential backoff before OpenClaw even sees the error.

The fix: a stream wrapper that intercepts rate limit errors and throws a FailoverError immediately, bypassing the internal retry loop entirely. Two files changed, 83 lines added.

## The Problem

OpenClaw uses a fallback chain: GPT-5-mini → GPT-4.1 → Claude Haiku → Claude Sonnet → Gemini Flash. When the primary model hits a rate limit, it should immediately try the next one.

But the pi-sdk (the agent loop library) has its own retry logic. It sees the rate limit, waits 10 seconds, retries, waits 20 seconds, retries again. Only after 3-4 failed retries does it surface the error to OpenClaw's run loop — which then rotates auth profiles before finally falling back to the next model.

Total time: ~50 seconds of waiting for something that should be instant.

## The Fix

*Coming soon — full article with code walkthrough.*
