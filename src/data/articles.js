// ============================================================================
// PUSAT DATA ARTIKEL
// Untuk menambah artikel baru: tambahkan objek pada articles-1.js atau
// articles-2.js mengikuti format yang ada, buat gambar sampul di
// public/assets/artikel/<slug>.svg, lalu tambahkan URL ke public/sitemap.xml.
// ============================================================================
import { articlesA } from "./articles-1.js";
import { articlesB } from "./articles-2.js";

export const articleCategories = [
  "Tips Membeli",
  "Smartphone Second",
  "iPhone",
  "Android",
  "Jual HP",
  "Tukar Tambah",
  "Perawatan",
  "Panduan",
];

export const articles = [...articlesA, ...articlesB];

export const getArticleBySlug = (slug) => articles.find((a) => a.slug === slug);

export const getRelatedArticles = (article, max = 3) => {
  const explicit = (article.relatedArticles || [])
    .map((slug) => getArticleBySlug(slug))
    .filter(Boolean);
  const seen = new Set([article.slug, ...explicit.map((a) => a.slug)]);
  const byCategory = articles.filter(
    (a) => a.category === article.category && !seen.has(a.slug)
  );
  return [...explicit, ...byCategory].slice(0, max);
};

const collectText = (article) =>
  article.content
    .map((block) => (block.type === "ul" ? block.items.join(" ") : block.text || ""))
    .join(" ");

export const getReadMinutes = (article) =>
  Math.max(1, Math.ceil(collectText(article).split(/\s+/).length / 200));

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
