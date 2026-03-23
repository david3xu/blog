# Blog Workflow

> Design → Preview → Deploy. Never skip steps.
> Created: March 23, 2026

## The Rule

```
1. DESIGN    → docs/DESIGN.md (what story, what pages, what content)
2. PREVIEW   → Visualizer prototype in Claude.ai (review before touching code)
3. IMPLEMENT → Edit blog source files (src/app/, src/lib/, content/)
4. BUILD     → npx next build (verify locally)
5. DEPLOY    → git push (Vercel auto-deploys in ~30 seconds)
```

Never jump from design to deploy. Always preview first.

## Files

| File | Purpose |
|---|---|
| docs/DESIGN.md | Vision, page structure, content decisions |
| docs/DEPLOYMENT.md | How the site was deployed (Vercel + GitHub) |
| docs/WORKFLOW.md | This file — the process |

## Blog Source

```
~/Developer/blog/
  src/app/page.tsx           ← Home page
  src/app/projects/page.tsx  ← Projects page
  src/app/writing/page.tsx   ← Writing listing
  src/app/writing/[slug]/    ← Article pages
  src/lib/projects.ts        ← Project data
  src/lib/articles.ts        ← Article loader
  src/components/            ← Navigation, Footer, cards
  content/articles/          ← Markdown articles
```

## Deployment

- Repo: github.com/david3xu/blog
- Live: blog-puce-one.vercel.app
- Auto-deploy: every git push to main triggers Vercel rebuild (~30s)
- Vercel CLI installed globally (`npm install -g vercel`)

## Current State (March 23, 2026)

- [x] Design v2 complete (ideas-not-biography, thesis-driven)
- [x] Prototype previewed in Claude.ai (Home, Projects, Writing)
- [x] Home page: thesis + 3 focus areas + recent thinking
- [x] Projects: grouped by problem (Agent memory, Data pipelines)
- [x] Writing: reframed as "thinking"
- [ ] Datacore repo on GitHub (project card links to #)
- [ ] Priority articles written (MCP memory, 4-layer architecture)
- [ ] Custom domain (optional)
