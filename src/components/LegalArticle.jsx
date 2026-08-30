import { Link } from "react-router-dom";
import { CalendarDays } from "lucide-react";

function Block({ block }) {
  if (block.type === "ul") {
    return (
      <ul className="legal-list">
        {block.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  return (
    <p>
      {block.text}{" "}
      {block.link && <Link to={block.link.to}>{block.link.label}</Link>}
      {block.suffix || ""}
    </p>
  );
}

export function LegalArticle({ page, testId }) {
  return (
    <article className="legal-article" data-testid={testId}>
      <span className="legal-updated">
        <CalendarDays size={15} aria-hidden="true" />
        Terakhir diperbarui: {page.lastUpdated}
      </span>
      <p className="lead">{page.intro}</p>
      {page.sections.map((section, sIndex) => (
        <section key={sIndex} className="legal-section">
          <h2>{section.title}</h2>
          {section.blocks.map((block, bIndex) => (
            <Block key={bIndex} block={block} />
          ))}
        </section>
      ))}
    </article>
  );
}
