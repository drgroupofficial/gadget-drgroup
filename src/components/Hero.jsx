import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { site, stores, trustPoints } from "../data/siteData";
import { WhatsAppButton } from "./WhatsAppButton.jsx";

export function Hero() {
  const defaultStore = stores.find((s) => s.id === site.defaultStoreId) || stores[0];

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="hero-badge" data-testid="hero-badge">
            Jaringan 3 toko smartphone
          </span>
          <h1>Jual, Beli, dan Tukar Tambah Smartphone dengan Lebih Mudah</h1>
          <p className="lead">
            Temukan smartphone baru dan second, jual perangkat Anda, atau lakukan
            tukar tambah melalui Almira Gadget, DRSTORE Sidoarjo, dan DRSTORE Tropodo.
          </p>
          <div className="btn-row" style={{ marginTop: 26 }}>
            <Link to="/lokasi-toko" className="btn btn-cta" data-testid="hero-pilih-toko-button">
              Pilih Toko
            </Link>
            <WhatsAppButton
              store={defaultStore}
              fallbackTo="/kontak"
              className="btn btn-whatsapp"
              dataTestId="hero-whatsapp-button"
            />
          </div>
          <ul className="hero-mini-trust">
            {trustPoints.slice(0, 3).map((point) => (
              <li key={point}>
                <CheckCircle2 size={18} aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-media">
          <img
            src="/assets/hero-toko.jpg"
            alt="Etalase berisi jajaran smartphone di toko Almira Gadget & DRSTORE"
            width="2000"
            height="1500"
            data-testid="hero-image"
          />
        </div>
      </div>
    </section>
  );
}
