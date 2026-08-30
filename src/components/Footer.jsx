import { Link } from "react-router-dom";
import { MessageCircle, Instagram } from "lucide-react";
import { site, navigation, stores, services } from "../data/siteData";
import { instagramUrl, tiktokUrl, PLACEHOLDERS, withFallback } from "../utils/helpers";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={site.logo} alt={`Logo ${site.name}`} width="46" height="46" />
            <strong>{site.name}</strong>
            <p>{site.description}</p>
          </div>

          <div className="footer-col">
            <h3>Navigasi</h3>
            <ul>
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} data-testid={`footer-nav-${item.path === "/" ? "beranda" : item.path.slice(1)}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Toko Kami</h3>
            <ul>
              {stores.map((store) => (
                <li key={store.id}>
                  <Link to="/lokasi-toko" data-testid={`footer-store-${store.id}`}>
                    {store.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Layanan</h3>
            <ul>
              {services.map((service) => (
                <li key={service.id}>
                  <Link to={`/layanan#${service.id}`} data-testid={`footer-service-${service.id}`}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-grid" style={{ paddingBottom: 32 }}>
          <div className="footer-col">
            <h3>
              <MessageCircle size={15} aria-hidden="true" style={{ marginRight: 6, verticalAlign: -2 }} />
              WhatsApp Toko
            </h3>
            <ul>
              {stores.map((store) => (
                <li key={store.id}>
                  {store.whatsapp ? (
                    <a
                      href={`https://wa.me/${store.whatsapp.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`footer-wa-${store.id}`}
                    >
                      {store.name}
                    </a>
                  ) : (
                    <span className="footer-placeholder">
                      {store.name} — {PLACEHOLDERS.whatsapp}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h3>
              <Instagram size={15} aria-hidden="true" style={{ marginRight: 6, verticalAlign: -2 }} />
              Media Sosial
            </h3>
            <ul>
              {stores.map((store) => (
                <li key={store.id}>
                  {store.instagram ? (
                    <a href={instagramUrl(store.instagram)} target="_blank" rel="noopener noreferrer">
                      Instagram {store.name}
                    </a>
                  ) : (
                    <span className="footer-placeholder">
                      {store.name} — {PLACEHOLDERS.instagram}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h3>Legal</h3>
            <ul>
              <li>
                <Link to="/kebijakan-privasi" data-testid="footer-link-privasi">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link to="/syarat-ketentuan" data-testid="footer-link-syarat">
                  Syarat &amp; Ketentuan
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Jam Operasional</h3>
            <ul>
              {stores.map((store) => (
                <li key={store.id} style={{ fontSize: "0.88rem" }}>
                  {store.name}:{" "}
                  {store.operatingDays && store.operatingHours
                    ? `${store.operatingDays}, ${store.operatingHours}`
                    : withFallback("", PLACEHOLDERS.hours)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {site.name}. Seluruh hak cipta dilindungi.
          </span>
          <span>{site.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
