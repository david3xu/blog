# Blog Deployment Record

> Deployed: March 23, 2026
> URL: https://blog-puce-one.vercel.app
> Repo: github.com/david3xu/blog
> Framework: Next.js 15, Tailwind CSS
> Full workflow: see docs/WORKFLOW.md

## Steps Performed

### 1. Push blog to GitHub
```bash
cd ~/Developer/blog
echo "node_modules\n.next\n.DS_Store\n.env*.local" > .gitignore
git init
git add -A
git commit -m "initial: Next.js 15 portfolio site"
gh repo create david3xu/blog --public --source=. --push \
  --description "Personal portfolio — AI engineer building agent infrastructure and MCP servers"
```

### 2. Install Vercel CLI
```bash
npm install -g vercel
```

### 3. Login to Vercel
```bash
vercel login
# Opens browser for OAuth device login
```

### 4. Deploy to production
```bash
cd ~/Developer/blog
vercel --yes --prod
# Auto-detects Next.js, connects GitHub repo, deploys
```

## Result
- Public URL: https://blog-puce-one.vercel.app
- GitHub auto-deploy: connected (every git push triggers rebuild)
- Build: 47 seconds, 9 static pages generated
- Vercel project: david-xus-projects/blog

## Current Content (March 23, 2026)
- Hero: thesis-driven ("AI is only as good as the data behind it")
- Projects: grouped by problem (Agent memory, Data pipelines)
- Articles: 3 (1 published on DEV.to, 2 stubs)
- See docs/DESIGN.md for full content plan

## Auto-Deploy Workflow
After initial setup, all future updates are:
```bash
cd ~/Developer/blog
# edit files
git add -A && git commit -m "description" && git push
# Vercel auto-builds and deploys in ~30 seconds
```
