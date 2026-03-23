import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { getAllArticles } from "@/lib/articles";

export default function Writing() {
  const articles = getAllArticles();
  return (
    <div className="max-w-3xl mx-auto px-8">
      <Navigation />
      <main className="py-12">
        <h2 className="font-[var(--font-serif)] text-3xl font-normal mb-2"
          style={{ animation: "fadeIn 0.5s ease" }}>
          Writing
        </h2>
        <p className="text-[var(--color-dim)] text-sm mb-4"
          style={{ animation: "fadeIn 0.6s ease" }}>
          Ideas about AI data architecture — from building, not reading.
        </p>
        {articles.map((a, i) => <ArticleCard key={a.slug} article={a} index={i} />)}
      </main>
      <Footer />
    </div>
  );
}
