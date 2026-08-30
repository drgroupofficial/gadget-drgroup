import { useEffect } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { navigation } from "../data/siteData";
import { WhatsAppButton } from "./WhatsAppButton.jsx";

export function MobileNavigation({ open, onClose, defaultStore }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return createPortal(
    <div
      id="mobile-navigation"
      className={`mobile-nav${open ? " open" : ""}`}
      aria-hidden={!open}
    >
      <div className="mobile-nav-backdrop" onClick={onClose} />
      <nav className="mobile-nav-panel" aria-label="Navigasi seluler">
        <div className="mobile-nav-head">
          <span>Menu</span>
          <button
            type="button"
            className="mobile-nav-close"
            aria-label="Tutup menu navigasi"
            onClick={onClose}
            data-testid="mobile-menu-close"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        {navigation.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className="nav-link"
            onClick={onClose}
            tabIndex={open ? 0 : -1}
            data-testid={`mobile-nav-link-${item.path === "/" ? "beranda" : item.path.slice(1)}`}
          >
            {item.label}
          </NavLink>
        ))}
        <WhatsAppButton
          store={defaultStore}
          fallbackTo="/kontak"
          dataTestId="mobile-whatsapp-button"
        />
      </nav>
    </div>,
    document.body
  );
}
