import { SectionHeading } from "./SectionHeading.jsx";
import { ArticleCard } from "./ArticleCard.jsx";

export function RelatedArticles({ articles }) {
  if (articles.length === 0) return null;
  return (
    <section className="section section-alt" aria-labelledby="artikel-terkait">
      <div className="container">
        <SectionHeading eyebrow="Baca Juga" title="Artikel Terkait" />
        <div className="grid grid-3" id="artikel-terkait">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
