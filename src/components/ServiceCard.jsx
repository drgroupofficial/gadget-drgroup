import { Link } from "react-router-dom";
import {
  Smartphone,
  Banknote,
  Repeat,
  MessagesSquare,
  ArrowRight,
} from "lucide-react";

const iconMap = {
  smartphone: Smartphone,
  banknote: Banknote,
  repeat: Repeat,
  "messages-square": MessagesSquare,
};

export function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || Smartphone;

  return (
    <article className="card" data-testid={`service-card-${service.id}`}>
      <div className="card-body">
        <span className="service-icon">
          <Icon size={26} aria-hidden="true" />
        </span>
        <h3>{service.title}</h3>
        <p style={{ color: "var(--color-text-muted)", fontSize: "0.94rem", margin: 0 }}>
          {service.summary}
        </p>
        <Link
          to={`/layanan#${service.id}`}
          className="card-link"
          data-testid={`service-card-link-${service.id}`}
        >
          Pelajari lebih lanjut
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
