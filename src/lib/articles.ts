import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const articlesDir = path.join(process.cwd(), "content", "articles");

export interface Article {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  readTime: string;
  draft: boolean;
  content: string;
  externalUrl?: string;
}

export function getAllArticles(): Article[] {
  if (!fs.existsSync(articlesDir)) return [];
  const files = fs.readdirSync(articlesDir).filter(f => f.endsWith(".md"));
  const articles = files.map(file => {
    const raw = fs.readFileSync(path.join(articlesDir, file), "utf-8");
    const { data } = matter(raw);
    return {
      slug: file.replace(/\.md$/, ""),
      title: data.title || file,
      date: data.date || "",
      tags: data.tags || [],
      excerpt: data.excerpt || "",
      readTime: data.readTime || "5 min",
      draft: data.draft || false,
      content: "",
      externalUrl: data.externalUrl,
    } as Article;
  });
  return articles.sort((a, b) => (b.date > a.date ? 1 : -1));
}

export async function getArticle(slug: string): Promise<Article | null> {
  const file = path.join(articlesDir, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);
  const result = await remark().use(html).process(content);
  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    tags: data.tags || [],
    excerpt: data.excerpt || "",
    readTime: data.readTime || "5 min",
    draft: data.draft || false,
    content: result.toString(),
    externalUrl: data.externalUrl,
  };
}
