import { List } from "lucide-react";

export function ArticleTOC({ headings }) {
  if (headings.length === 0) return null;
  const scrollTo = (id) => (event) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="toc" aria-label="Daftar isi" data-testid="article-toc">
      <strong>
        <List size={17} aria-hidden="true" />
        Daftar Isi
      </strong>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id} className={heading.type === "h3" ? "toc-sub" : ""}>
            <a href={`#${heading.id}`} onClick={scrollTo(heading.id)}>
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
