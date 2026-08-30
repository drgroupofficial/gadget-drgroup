import { Link } from "react-router-dom";

// Mengubah [teks](/path) menjadi Link router; sisanya teks biasa.
const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

export function renderInline(text) {
  const nodes = [];
  let last = 0;
  let match;
  let key = 0;
  while ((match = LINK_RE.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    nodes.push(
      <Link key={key++} to={match[2]}>
        {match[1]}
      </Link>
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export function ArticleBlock({ block, anchorId }) {
  if (block.type === "h2") return <h2 id={anchorId}>{block.text}</h2>;
  if (block.type === "h3") return <h3 id={anchorId}>{block.text}</h3>;
  if (block.type === "ul") {
    return (
      <ul className="article-list">
        {block.items.map((item, index) => (
          <li key={index}>{renderInline(item)}</li>
        ))}
      </ul>
    );
  }
  if (block.type === "warning") {
    return (
      <div className="notice" role="alert">
        <p>
          <strong>Perhatian: </strong>
          {block.text}
        </p>
      </div>
    );
  }
  return <p>{renderInline(block.text || "")}</p>;
}
