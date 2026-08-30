import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { stores } from "../data/siteData";
import { WhatsAppButton } from "./WhatsAppButton.jsx";

export function ArticleStoreCta() {
  const [selectedId, setSelectedId] = useState(stores[0].id);
  const store = stores.find((s) => s.id === selectedId) || stores[0];

  return (
    <div className="article-cta" data-testid="article-store-cta">
      <h2>Butuh bantuan memilih smartphone?</h2>
      <p>
        Hubungi Almira Gadget, DRSTORE Sidoarjo, atau DRSTORE Tropodo untuk menanyakan
        pilihan smartphone yang sesuai kebutuhan dan anggaran Anda.
      </p>
      <div className="store-chooser" role="group" aria-label="Pilih toko">
        {stores.map((s) => (
          <button
            key={s.id}
            type="button"
            aria-pressed={selectedId === s.id}
            onClick={() => setSelectedId(s.id)}
            data-testid={`article-cta-store-${s.id}`}
          >
            <img src={s.logo} alt="" width="46" height="46" />
            <span>
              {s.name}
              <small>{s.area}</small>
            </span>
          </button>
        ))}
      </div>
      <div className="btn-row" style={{ marginTop: 18 }}>
        <WhatsAppButton
          store={store}
          message={`Halo ${store.name}, saya membaca artikel di website dan ingin bertanya.`}
          dataTestId="article-cta-whatsapp"
        >
          WhatsApp {store.name}
        </WhatsAppButton>
        {store.mapsUrl && (
          <a
            href={store.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            data-testid="article-cta-maps"
          >
            <ExternalLink size={16} aria-hidden="true" />
            Buka Google Maps
          </a>
        )}
      </div>
    </div>
  );
}
