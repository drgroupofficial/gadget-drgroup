import { useState } from "react";
import { seo } from "../data/siteData";
import { articles, articleCategories } from "../data/articles";
import { SEOHead } from "../components/SEOHead.jsx";
import { ArticleCard } from "../components/ArticleCard.jsx";

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const filtered =
    activeCategory === "Semua"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      <SEOHead seo={seo.artikel} />

      <div className="page-head">
        <div className="container">
          <span className="eyebrow">Artikel</span>
          <h1>Panduan &amp; Tips Smartphone</h1>
          <p className="lead">
            Informasi seputar membeli, menjual, mengecek, dan merawat smartphone baru
            maupun second dari Almira Gadget dan DRSTORE.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="category-filter" role="group" aria-label="Filter kategori artikel">
            {["Semua", ...articleCategories].map((category) => (
              <button
                key={category}
                type="button"
                className={`chip chip-filter${activeCategory === category ? " active" : ""}`}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                data-testid={`filter-${category.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-3" style={{ marginTop: 32 }}>
            {filtered.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
