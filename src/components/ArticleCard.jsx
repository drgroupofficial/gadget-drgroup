import { Link } from "react-router-dom";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { formatDate, getReadMinutes } from "../data/articles";

export function ArticleCard({ article }) {
  return (
    <article className="card" data-testid={`article-card-${article.slug}`}>
      <Link to={`/artikel/${article.slug}`} aria-label={article.title}>
        <img
          src={article.featuredImage}
          alt={article.featuredImageAlt}
          className="article-cover"
          loading="lazy"
        />
      </Link>
      <div className="card-body">
        <span className="chip chip-category">{article.category}</span>
        <h3>
          <Link to={`/artikel/${article.slug}`} className="article-title-link">
            {article.title}
          </Link>
        </h3>
        <p style={{ color: "var(--color-text-muted)", fontSize: "0.92rem", margin: 0 }}>
          {article.excerpt}
        </p>
        <div className="article-meta">
          <span>
            <CalendarDays size={15} aria-hidden="true" />
            {formatDate(article.publishedDate)}
          </span>
          <span>
            <Clock size={15} aria-hidden="true" />
            {getReadMinutes(article)} menit baca
          </span>
        </div>
        <div className="card-actions">
          <Link
            to={`/artikel/${article.slug}`}
            className="btn btn-outline btn-sm"
            data-testid={`article-read-${article.slug}`}
          >
            Baca Selengkapnya
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
