import { useState } from "react";
import { ChevronDown } from "lucide-react";

function FaqBlock({ block }) {
  if (block.type === "ul") {
    return (
      <ul className="faq-list">
        {block.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  if (block.type === "h4") {
    return <h4 className="faq-subhead">{block.text}</h4>;
  }
  return <p>{block.text}</p>;
}

export function FAQAccordion({ items, idPrefix = "faq" }) {
  const [openIndexes, setOpenIndexes] = useState(() => new Set([0]));

  const toggle = (index) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="accordion" data-testid={`${idPrefix}-accordion`}>
      {items.map((item, index) => {
        const isOpen = openIndexes.has(index);
        return (
          <div className="accordion-item" key={index}>
            <h3 style={{ margin: 0 }}>
              <button
                type="button"
                className="accordion-trigger"
                aria-expanded={isOpen}
                aria-controls={`${idPrefix}-panel-${index}`}
                id={`${idPrefix}-trigger-${index}`}
                onClick={() => toggle(index)}
                data-testid={`${idPrefix}-trigger-${index}`}
              >
                {item.question}
                <ChevronDown size={20} aria-hidden="true" />
              </button>
            </h3>
            {isOpen && (
              <div
                className="accordion-panel"
                id={`${idPrefix}-panel-${index}`}
                role="region"
                aria-labelledby={`${idPrefix}-trigger-${index}`}
              >
                {item.blocks
                  ? item.blocks.map((block, bIndex) => <FaqBlock key={bIndex} block={block} />)
                  : <p>{item.answer}</p>}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
