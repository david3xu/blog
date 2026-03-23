# Blog Design v2 — Ideas, Not Biography

> The blog showcases THINKING, not a person.
> No career history. No "about me."
> Show: what I understand, what I see, what I built to prove it.
> Workflow: see docs/WORKFLOW.md (design → preview → deploy)

## The Thesis

"AI is only as good as the data behind it."

## Home Page — The idea, then the proof

```
David Xu
AI Infrastructure · Data Engineering

"AI is only as good as the data behind it."

Every AI app today is context-starved. Claude forgets what GPT did.
Gemini can't see what Codex built. You become the human relay between
AIs that should be sharing knowledge automatically.

The fix isn't better models. It's better data architecture.

THREE IDEAS I'M BUILDING AROUND:

◆ Shared memory for AI agents
  Multiple AIs, one data layer, zero copy-pasting.
  → Datacore MCP Server

◇ Memory has layers
  Not all memory is equal. Identity (instant), working (ephemeral),
  project (on-demand), shared (persistent). Each has a reason.
  → 4-layer memory architecture

◇ Data quality is progressive
  Raw → clean → curated. Don't transform everything upfront.
  Let usage reveal what matters.
  → Medallion pattern applied to AI agent data
```

No career. No "previously at UWA." Just: here's the problem,
here's my thinking, here's what I built.

## Projects Page — Problems and solutions

```
WHAT I'M BUILDING

Datacore MCP Server
  The problem: AI apps can't see each other's work.
  The solution: One MCP server, every AI reads and writes to it.
  20,000+ events from 15 sources, 4 companies' AI tools connected.
  → [repo]

Memory Architecture
  The problem: every AI wastes tokens loading context it doesn't need.
  The solution: 4 layers — each exists because it has a unique access
  pattern the others can't serve. As shared memory matures, private
  memory shrinks from 6000 to 500 tokens.
  → [diagram + design doc]

Data Architecture (local → Azure)
  The problem: raw events aren't answers.
  The solution: Bronze (capture everything) → Silver (make it searchable)
  → Gold (curate the answers). Local-first, Azure Databricks target.
  → [architecture diagram]

WA Health ED Pipeline
  Medallion pipeline on Microsoft Fabric. Hospital data through
  Bronze/Silver/Gold Delta Lake layers with quality tests.
  → [repo]
```

No "OpenClaw (fork)" as a standalone project. OpenClaw is infrastructure
I used — if relevant, mention it inside Datacore's description as
"runs on OpenClaw gateway" but it's not a project card.

## Writing Page — Ideas, not tutorials

```
THINKING

"Why AI agents need shared memory"
  — The core insight. 4 AIs, 4 companies, zero shared context.

"4 memory layers every multi-agent system needs"
  — The architecture pattern. Not Datacore-specific.

"Data quality is the real AI problem"
  — Why Medallion matters for AI, not just enterprise BI.
```

Each article starts with a problem, shows the thinking,
then shows what was built. Never starts with a tool name.

## What's NOT on the site

- No "About" page with career history
- No "Student at Curtin"
- No tool advertisements (OpenClaw, Copilot, etc.)
- No "12 years in investment management"
- No "Research Associate at UWA"

If someone wants background, LinkedIn exists. The blog is for ideas.

## Footer — Minimal

```
© 2026 David Xu    GitHub · LinkedIn · DEV.to
```

No subtitle, no tagline. The work speaks.
