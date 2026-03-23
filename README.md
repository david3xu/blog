# David Xu — Personal Blog

> AI Infrastructure · Data Engineering · Azure
> Built with Next.js 15 + React 19 + Tailwind CSS 4

## Run locally

```bash
cd ~/Developer/blog
pnpm dev
# Open http://localhost:3000
```

## Add an article

Drop a `.md` file in `content/articles/` with frontmatter:

```yaml
---
title: "Your Title"
date: "2026-03-20"
tags: ["Tag1", "Tag2"]
excerpt: "One-line summary."
readTime: "8 min"
draft: true          # optional, shows DRAFT badge
externalUrl: "..."   # optional, links out instead of rendering locally
---

Article body in markdown...
```

## Deploy to Vercel

1. Push to GitHub
2. Connect repo to Vercel
3. Auto-deploys on every push

## Structure

```
blog/
├── content/articles/     ← drop .md files here
├── src/app/              ← pages (home, writing, projects, [slug])
├── src/components/       ← Navigation, ArticleCard, ProjectCard, Footer
├── src/lib/              ← articles.ts (markdown parser), projects.ts (data)
└── package.json          ← Next.js 15, React 19, Tailwind 4
```
