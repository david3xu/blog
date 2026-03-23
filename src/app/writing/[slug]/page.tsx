import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getArticle, getAllArticles } from "@/lib/articles";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllArticles().map(a => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  return (
    <div className="max-w-3xl mx-auto px-8">
      <Navigation />
      <main className="py-12">
        <div style={{ animation: "fadeIn 0.5s ease" }}>
          <div className="flex gap-2 flex-wrap mb-4">
            {article.tags.map(t => (
              <span key={t} className="font-[var(--font-mono)] text-[0.65rem]
                uppercase tracking-wide px-2 py-0.5 border
                border-[var(--color-border)] text-[var(--color-dim)]">
                {t}
              </span>
            ))}
          </div>
          <h1 className="font-[var(--font-serif)] text-4xl font-normal leading-tight mb-3">
            {article.title}
          </h1>
          <p className="font-[var(--font-mono)] text-xs text-[var(--color-dim)] tracking-wide mb-12">
            {article.date} · {article.readTime}
          </p>
          <article className="prose prose-invert max-w-none
            [&_h2]:font-[var(--font-serif)] [&_h2]:text-2xl [&_h2]:font-normal [&_h2]:mt-10 [&_h2]:mb-4
            [&_h3]:font-[var(--font-serif)] [&_h3]:text-xl [&_h3]:font-normal [&_h3]:mt-8 [&_h3]:mb-3
            [&_p]:text-[var(--color-dim)] [&_p]:leading-relaxed [&_p]:mb-4
            [&_code]:font-[var(--font-mono)] [&_code]:text-sm [&_code]:bg-[var(--color-surface)] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded-sm
            [&_pre]:bg-[var(--color-surface)] [&_pre]:p-4 [&_pre]:rounded-sm [&_pre]:overflow-x-auto [&_pre]:mb-6
            [&_a]:text-[var(--color-accent)] [&_a]:underline [&_a]:underline-offset-2
            [&_ul]:text-[var(--color-dim)] [&_ol]:text-[var(--color-dim)]
            [&_li]:mb-1 [&_li]:leading-relaxed
            [&_blockquote]:border-l-2 [&_blockquote]:border-[var(--color-accent)] [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-[var(--color-dim)]"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
