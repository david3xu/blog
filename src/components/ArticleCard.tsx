import Link from "next/link";
import type { Article } from "@/lib/articles";

function Tag({ children }: { children: string }) {
  return (
    <span className="font-[var(--font-mono)] text-[0.65rem] uppercase tracking-wide px-2 py-0.5 border border-[var(--color-border)] text-[var(--color-dim)]">
      {children}
    </span>
  );
}

export default function ArticleCard({ article, index = 0 }: { article: Article; index?: number }) {
  const href = article.externalUrl || `/writing/${article.slug}`;
  const isExternal = !!article.externalUrl;
  return (
    <div className="border-b border-[var(--color-border)] py-8 group"
      style={{ animation: `fadeSlideUp 0.6s ease forwards`, animationDelay: `${index * 0.12}s`, opacity: 0 }}>
      <div className="flex justify-between items-start mb-3">
        <div className="flex gap-2 flex-wrap">
          {article.tags.map(t => <Tag key={t}>{t}</Tag>)}
        </div>
        <span className="font-[var(--font-mono)] text-xs text-[var(--color-dim)] whitespace-nowrap ml-4">
          {article.date} · {article.readTime}
        </span>
      </div>
      {isExternal ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <h3 className="font-[var(--font-serif)] text-2xl font-normal leading-snug group-hover:text-[var(--color-accent)] transition-colors">
            {article.title}
            {article.draft && <span className="font-[var(--font-mono)] text-[0.65rem] text-[var(--color-accent)] ml-3 align-middle">DRAFT</span>}
          </h3>
        </a>
      ) : (
        <Link href={href}>
          <h3 className="font-[var(--font-serif)] text-2xl font-normal leading-snug group-hover:text-[var(--color-accent)] transition-colors">
            {article.title}
            {article.draft && <span className="font-[var(--font-mono)] text-[0.65rem] text-[var(--color-accent)] ml-3 align-middle">DRAFT</span>}
          </h3>
        </Link>
      )}
      <p className="text-[0.95rem] leading-relaxed text-[var(--color-dim)] mt-2 max-w-2xl">
        {article.excerpt}
      </p>
    </div>
  );
}
