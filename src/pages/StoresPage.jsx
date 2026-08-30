import { useState } from "react";
import { MapPin, ExternalLink, Instagram } from "lucide-react";
import { seo, stores } from "../data/siteData";
import { SEOHead } from "../components/SEOHead.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { StoreCard } from "../components/StoreCard.jsx";
import { WhatsAppButton } from "../components/WhatsAppButton.jsx";
import { instagramUrl, PLACEHOLDERS } from "../utils/helpers";

function StoreMap({ store }) {
  if (store.mapsEmbedUrl) {
    return (
      <iframe
        src={store.mapsEmbedUrl}
        className="map-embed"
        title={`Peta lokasi ${store.name}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    );
  }
  return (
    <div className="map-placeholder" data-testid={`map-placeholder-${store.id}`}>
      <MapPin size={40} aria-hidden="true" />
      <p style={{ margin: 0 }}>
        <strong>Peta Google Maps {store.name}</strong>
        <br />
        <span className="text-placeholder">{PLACEHOLDERS.maps}</span>
      </p>
    </div>
  );
}

export default function StoresPage() {
  const [selectedId, setSelectedId] = useState(stores[0].id);
  const selectedStore = stores.find((s) => s.id === selectedId) || stores[0];

  return (
    <>
      <SEOHead seo={seo.lokasi} />

      <div className="page-head">
        <div className="container">
          <span className="eyebrow">Lokasi Toko</span>
          <h1>Pilih Cabang yang Paling Nyaman untuk Anda</h1>
          <p className="lead">
            Almira Gadget, DRSTORE Sidoarjo, dan DRSTORE Tropodo siap melayani kebutuhan
            smartphone Anda. Setiap cabang memiliki kontak dan lokasi masing-masing.
          </p>
        </div>
      </div>

      <section className="section" aria-labelledby="pilih-toko">
        <div className="container">
          <SectionHeading
            eyebrow="Pilih Toko"
            title="Ke mana Anda ingin menghubungi?"
          />
          <div className="store-chooser" id="pilih-toko" role="group" aria-label="Pilih toko">
            {stores.map((store) => (
              <button
                key={store.id}
                type="button"
                aria-pressed={selectedId === store.id}
                onClick={() => setSelectedId(store.id)}
                data-testid={`store-chooser-${store.id}`}
              >
                <img src={store.logo} alt="" width="46" height="46" />
                <span>
                  {store.name}
                  <small>{store.area || PLACEHOLDERS.area}</small>
                </span>
              </button>
            ))}
          </div>

          <div
            className="selected-store-bar"
            style={{ marginTop: 20 }}
            role="status"
            data-testid="selected-store-bar"
          >
            <strong>Toko terpilih: {selectedStore.name}</strong>
            <WhatsAppButton
              store={selectedStore}
              message={`Halo ${selectedStore.name}, saya mendapatkan informasi dari website.`}
              className="btn btn-whatsapp btn-sm"
              dataTestId="selected-store-whatsapp"
            >
              WhatsApp Toko
            </WhatsAppButton>
            {selectedStore.mapsUrl ? (
              <a
                href={selectedStore.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-sm"
                data-testid="selected-store-maps"
              >
                <ExternalLink size={16} aria-hidden="true" />
                Buka Google Maps
              </a>
            ) : (
              <span className="btn btn-disabled btn-sm" data-testid="selected-store-maps">
                [Google Maps belum ditambahkan]
              </span>
            )}
            {selectedStore.instagram ? (
              <a
                href={instagramUrl(selectedStore.instagram)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-sm"
                data-testid="selected-store-instagram"
              >
                <Instagram size={16} aria-hidden="true" />
                Lihat Instagram
              </a>
            ) : (
              <span className="btn btn-disabled btn-sm" data-testid="selected-store-instagram">
                [Instagram belum ditambahkan]
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="direktori">
        <div className="container">
          <SectionHeading
            eyebrow="Direktori Cabang"
            title="Informasi lengkap setiap toko"
          />
          <div className="grid" id="direktori" style={{ gap: 32 }}>
            {stores.map((store) => (
              <div key={store.id} className="grid grid-2" style={{ alignItems: "start" }}>
                <StoreCard store={store} variant="detailed" />
                <StoreMap store={store} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
