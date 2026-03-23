import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import ProjectCard from "@/components/ProjectCard";
import { getAllArticles } from "@/lib/articles";
import { projects } from "@/lib/projects";

export default function Home() {
  const articles = getAllArticles().slice(0, 3);
  return (
    <div className="max-w-3xl mx-auto px-8">
      <Navigation />
      <main className="py-16">
        {/* Hero */}
        <div style={{ animation: "fadeSlideUp 0.6s ease" }}>
          <p className="font-[var(--font-serif)] text-3xl font-normal leading-relaxed
            italic max-w-xl">
            Building AI systems that actually work — from self-hosted
            gateways to enterprise data platforms.
          </p>
          <div className="mt-8 pl-5 border-l-2 border-[var(--color-accent)]
            bg-[var(--color-surface)] py-5 pr-6">
            <p className="text-sm text-[var(--color-dim)] leading-relaxed">
              Building agent infrastructure, MCP servers, and data coordination systems.
              Contributing to{" "}
              <span className="text-[var(--color-accent)]">OpenClaw</span> (247K★ AI gateway),
              building <span className="text-[var(--color-accent)]">Datacore</span> (cross-agent memory via MCP),
              and shipping data pipelines on Azure and Microsoft Fabric.
              Previously: Research Associate at UWA. 12 years in investment management.
            </p>
          </div>
        </div>

        {/* Recent Writing */}
        <section className="mt-16">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-dim)]">
              Recent Writing
            </h2>
            <a href="/writing" className="font-[var(--font-mono)] text-xs text-[var(--color-accent)] tracking-wide">
              View all →
            </a>
          </div>
          {articles.map((a, i) => <ArticleCard key={a.slug} article={a} index={i} />)}
        </section>

        {/* Projects */}
        <section className="mt-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-dim)]">
              Projects
            </h2>
            <a href="/projects" className="font-[var(--font-mono)] text-xs text-[var(--color-accent)] tracking-wide">
              View all →
            </a>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {projects.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
