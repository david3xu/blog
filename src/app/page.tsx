import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { getAllArticles } from "@/lib/articles";

const focuses = [
  {
    icon: "◆",
    title: "Shared memory for AI agents",
    desc: "Multiple AIs, one data layer. No copy-pasting context between apps.",
  },
  {
    icon: "◇",
    title: "Memory has layers",
    desc: "Identity, working, project, shared — each exists for a reason.",
  },
  {
    icon: "◇",
    title: "Data quality is progressive",
    desc: "Raw → clean → curated. Let usage reveal what matters.",
  },
];

export default function Home() {
  const articles = getAllArticles().slice(0, 3);
  return (
    <div className="max-w-3xl mx-auto px-8">
      <Navigation />
      <main className="py-16">
        <div style={{ animation: "fadeSlideUp 0.6s ease" }}>
          <p className="font-[var(--font-serif)] text-3xl font-normal leading-relaxed italic max-w-xl">
            AI is only as good as the data behind it.
          </p>
          <p className="mt-6 text-[var(--color-dim)] leading-relaxed max-w-2xl">
            Every AI app today is context-starved. Claude forgets what GPT did.
            Gemini can&apos;t see what Codex built. You become the human relay
            between AIs that should be sharing knowledge automatically.
          </p>
          <p className="mt-3 text-[var(--color-dim)] leading-relaxed max-w-2xl">
            The fix isn&apos;t better models. It&apos;s better data architecture.
          </p>
        </div>

        <section className="mt-14">
          <h2 className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-dim)] mb-6">
            What I&apos;m building around
          </h2>
          <div className="grid gap-4">
            {focuses.map((f, i) => (
              <div key={i} className="flex gap-4 items-start p-5 border border-[var(--color-border)] rounded-sm"
                style={{ animation: `fadeSlideUp 0.5s ease forwards`, animationDelay: `${0.3 + i * 0.12}s`, opacity: 0 }}>
                <span className="text-[var(--color-accent)] text-xl mt-0.5">{f.icon}</span>
                <div>
                  <h3 className="font-[var(--font-serif)] text-lg font-normal">{f.title}</h3>
                  <p className="text-sm text-[var(--color-dim)] mt-1 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-dim)]">
              Recent thinking
            </h2>
            <a href="/writing" className="font-[var(--font-mono)] text-xs text-[var(--color-accent)] tracking-wide">
              View all →
            </a>
          </div>
          {articles.map((a, i) => <ArticleCard key={a.slug} article={a} index={i} />)}
        </section>
      </main>
      <Footer />
    </div>
  );
}
