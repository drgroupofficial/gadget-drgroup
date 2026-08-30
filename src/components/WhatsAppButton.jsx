import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { buildWhatsAppLink, DEFAULT_MESSAGE } from "../utils/whatsapp";

export function WhatsAppButton({
  store,
  message = DEFAULT_MESSAGE,
  children = "Hubungi via WhatsApp",
  className = "btn btn-whatsapp",
  fallbackTo = "",
  dataTestId,
}) {
  const link = store ? buildWhatsAppLink(store.whatsapp, message) : "";

  if (!link) {
    if (fallbackTo) {
      return (
        <Link to={fallbackTo} className={className} data-testid={dataTestId}>
          <MessageCircle size={18} aria-hidden="true" />
          {children}
        </Link>
      );
    }
    return (
      <span
        className="btn btn-disabled"
        data-testid={dataTestId}
        title="Nomor WhatsApp belum diisi di src/data/siteData.js"
      >
        <MessageCircle size={18} aria-hidden="true" />
        [Nomor WhatsApp belum ditambahkan]
      </span>
    );
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      data-testid={dataTestId}
    >
      <MessageCircle size={18} aria-hidden="true" />
      {children}
    </a>
  );
}
