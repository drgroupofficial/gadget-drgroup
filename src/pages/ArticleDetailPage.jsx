import { useParams } from "react-router-dom";
import { CalendarDays, Clock, User } from "lucide-react";
import { getArticleBySlug, getRelatedArticles, formatDate, getReadMinutes } from "../data/articles";
import { buildArticleJsonLd, buildBreadcrumbJsonLd } from "../utils/seo";
import { SEOHead } from "../components/SEOHead.jsx";
import { Breadcrumb } from "../components/Breadcrumb.jsx";
import { ArticleTOC } from "../components/ArticleTOC.jsx";
import { ArticleBlock } from "../components/ArticleBlock.jsx";
import { ArticleStoreCta } from "../components/ArticleStoreCta.jsx";
import { RelatedArticles } from "../components/RelatedArticles.jsx";
import NotFoundPage from "./NotFoundPage.jsx";

export default function ArticleDetailPage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) return <NotFoundPage />;

  const headings = article.content
    .map((block, index) => ({ ...block, id: `bagian-${index}` }))
    .filter((block) => block.type === "h2" || block.type === "h3");

  const seoData = {
    path: `/artikel/${article.slug}`,
    title: article.seoTitle,
    description: article.metaDescription,
    ogTitle: article.seoTitle,
    ogDescription: article.metaDescription,
    ogImage: article.featuredImage,
  };

  const jsonLd = [
    buildArticleJsonLd(article),
    buildBreadcrumbJsonLd([
      { label: "Beranda", path: "/" },
      { label: "Artikel", path: "/artikel" },
      { label: article.title, path: `/artikel/${article.slug}` },
    ]),
  ];

  return (
    <>
      <SEOHead seo={seoData} jsonLd={jsonLd} />

      <article className="section" data-testid="article-detail">
        <div className="container">
          <Breadcrumb
            items={[
              { label: "Beranda", to: "/" },
              { label: "Artikel", to: "/artikel" },
              { label: article.title },
            ]}
          />
          <div className="article-body">
            <span className="chip chip-category">{article.category}</span>
            <h1 style={{ marginTop: 14 }}>{article.title}</h1>
            <div className="article-meta" style={{ marginBottom: 26 }}>
              <span>
                <User size={15} aria-hidden="true" />
                {article.author}
              </span>
              <span>
                <CalendarDays size={15} aria-hidden="true" />
                {formatDate(article.publishedDate)}
              </span>
              <span>
                <Clock size={15} aria-hidden="true" />
                {getReadMinutes(article)} menit baca
              </span>
            </div>
            <img
              src={article.featuredImage}
              alt={article.featuredImageAlt}
              className="article-hero-image"
              data-testid="article-featured-image"
            />
            <ArticleTOC headings={headings} />
            <div className="article-content">
              {article.content.map((block, index) => (
                <ArticleBlock key={index} block={block} anchorId={`bagian-${index}`} />
              ))}
            </div>
            <ArticleStoreCta />
          </div>
        </div>
      </article>

      <RelatedArticles articles={getRelatedArticles(article)} />
    </>
  );
}
