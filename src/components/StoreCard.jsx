import { MapPin, Clock, Instagram, ExternalLink, Music2 } from "lucide-react";
import { services } from "../data/siteData";
import { WhatsAppButton } from "./WhatsAppButton.jsx";
import { withFallback, instagramUrl, tiktokUrl, PLACEHOLDERS } from "../utils/helpers";

export function StoreCard({ store, variant = "compact" }) {
  const address = withFallback(store.address, PLACEHOLDERS.address);
  const hours =
    store.operatingDays && store.operatingHours
      ? `${store.operatingDays}, ${store.operatingHours}`
      : PLACEHOLDERS.hours;
  const isPlaceholderAddress = !store.address;
  const isPlaceholderHours = !(store.operatingDays && store.operatingHours);
  const storeServices = services.filter((s) => store.services.includes(s.id));

  return (
    <article className="card" data-testid={`store-card-${store.id}`}>
      <img
        src={store.photo}
        alt={`Foto toko ${store.name}`}
        className="store-photo"
        loading="lazy"
      />
      <div className="card-body">
        <div className="store-head">
          <img src={store.logo} alt={`Logo ${store.name}`} className="store-logo" loading="lazy" />
          <div>
            <h3 style={{ margin: 0 }}>{store.name}</h3>
            {store.area && (
              <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                {store.area}
              </span>
            )}
          </div>
          {store.status && (
            <span className="chip status-chip" style={{ marginLeft: "auto" }}>
              {store.status}
            </span>
          )}
        </div>

        <p style={{ color: "var(--color-text-muted)", fontSize: "0.92rem", margin: 0 }}>
          {store.description}
        </p>

        <ul className="store-meta">
          <li className={isPlaceholderAddress ? "text-placeholder" : ""}>
            <MapPin size={17} aria-hidden="true" />
            {address}
          </li>
          <li className={isPlaceholderHours ? "text-placeholder" : ""}>
            <Clock size={17} aria-hidden="true" />
            {hours}
          </li>
        </ul>

        {variant === "detailed" && (
          <>
            <div className="chip-row" aria-label="Layanan tersedia">
              {storeServices.map((s) => (
                <span key={s.id} className="chip">
                  {s.title}
                </span>
              ))}
            </div>
            <div className="chip-row">
              {store.instagram ? (
                <a
                  className="link-quiet"
                  href={instagramUrl(store.instagram)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`store-instagram-${store.id}`}
                >
                  <Instagram size={16} aria-hidden="true" /> @{store.instagram}
                </a>
              ) : (
                <span className="chip text-placeholder">{PLACEHOLDERS.instagram}</span>
              )}
              {store.tiktok ? (
                <a
                  className="link-quiet"
                  href={tiktokUrl(store.tiktok)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`store-tiktok-${store.id}`}
                >
                  <Music2 size={16} aria-hidden="true" /> @{store.tiktok}
                </a>
              ) : (
                <span className="chip text-placeholder">{PLACEHOLDERS.tiktok}</span>
              )}
            </div>
          </>
        )}

        <div className="card-actions">
          <WhatsAppButton
            store={store}
            message={`Halo ${store.name}, saya mendapatkan informasi dari website.`}
            className="btn btn-whatsapp btn-sm"
            dataTestId={`store-whatsapp-${store.id}`}
          >
            Hubungi Toko
          </WhatsAppButton>
          {store.mapsUrl ? (
            <a
              href={store.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
              data-testid={`store-maps-${store.id}`}
            >
              <ExternalLink size={16} aria-hidden="true" />
              Lihat Lokasi
            </a>
          ) : (
            <span
              className="btn btn-disabled btn-sm"
              title="Tautan Google Maps belum diisi di src/data/siteData.js"
              data-testid={`store-maps-${store.id}`}
            >
              <ExternalLink size={16} aria-hidden="true" />
              [Google Maps belum ditambahkan]
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
