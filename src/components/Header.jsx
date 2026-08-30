import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { site, navigation, stores } from "../data/siteData";
import { WhatsAppButton } from "./WhatsAppButton.jsx";
import { MobileNavigation } from "./MobileNavigation.jsx";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const defaultStore = stores.find((s) => s.id === site.defaultStoreId) || stores[0];

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" data-testid="header-brand-link">
          <img src={site.logo} alt={`Logo ${site.name}`} width="42" height="42" />
          <span className="brand-name">
            {site.name}
            <span className="brand-tagline">{site.tagline}</span>
          </span>
        </Link>

        <nav className="nav-desktop" aria-label="Navigasi utama">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              data-testid={`nav-link-${item.path === "/" ? "beranda" : item.path.slice(1)}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <WhatsAppButton
            store={defaultStore}
            fallbackTo="/kontak"
            className="btn btn-whatsapp btn-sm"
            dataTestId="header-whatsapp-button"
          />
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          data-testid="mobile-menu-toggle"
        >
          <Menu size={24} aria-hidden="true" />
        </button>
      </div>

      <MobileNavigation
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        defaultStore={defaultStore}
      />
    </header>
  );
}
