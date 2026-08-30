import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Smartphone,
  Banknote,
  Repeat,
  MessagesSquare,
  Info,
  Wallet,
  Camera,
  Gamepad2,
  BatteryFull,
  HardDrive,
  Briefcase,
  Coffee,
} from "lucide-react";
import { seo, serviceDetails, stores, site } from "../data/siteData";
import { SEOHead } from "../components/SEOHead.jsx";
import { WhatsAppButton } from "../components/WhatsAppButton.jsx";
import { ProcessSteps } from "../components/ProcessSteps.jsx";

const topicIcons = {
  wallet: Wallet,
  camera: Camera,
  gamepad: Gamepad2,
  battery: BatteryFull,
  storage: HardDrive,
  briefcase: Briefcase,
  coffee: Coffee,
};

function ServiceSection({ id, icon: Icon, title, children }) {
  return (
    <section id={id} className="section" style={{ scrollMarginTop: 90 }} aria-labelledby={`judul-${id}`}>
      <div className="container" style={{ maxWidth: 860 }}>
        <span className="service-icon" aria-hidden="true">
          <Icon size={26} />
        </span>
        <h2 id={`judul-${id}`}>{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default function ServicesPage() {
  const location = useLocation();
  const defaultStore = stores.find((s) => s.id === site.defaultStoreId) || stores[0];
  const { beli, jual, "tukar-tambah": tukarTambah, konsultasi } = serviceDetails;

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 60);
      }
    }
  }, [location.hash]);

  return (
    <>
      <SEOHead seo={seo.layanan} />

      <div className="page-head">
        <div className="container">
          <span className="eyebrow">Layanan Kami</span>
          <h1>Layanan Jual Beli dan Tukar Tambah Smartphone</h1>
          <p className="lead">
            Empat layanan utama yang tersedia di Almira Gadget, DRSTORE Sidoarjo, dan
            DRSTORE Tropodo.
          </p>
        </div>
      </div>

      <ServiceSection id="beli" icon={Smartphone} title={beli.title}>
        <p>{beli.intro}</p>
        <h3>Kategori yang tersedia</h3>
        <ul className="topic-grid">
          {beli.categories.map((category) => (
            <li key={category}>
              <Smartphone size={16} aria-hidden="true" />
              {category}
            </li>
          ))}
        </ul>
        <div className="notice notice-info" style={{ marginTop: 22 }}>
          <Info size={20} aria-hidden="true" />
          <p>{beli.note}</p>
        </div>
        <div className="btn-row" style={{ marginTop: 22 }}>
          <WhatsAppButton
            store={defaultStore}
            message="Halo, saya ingin bertanya tentang pembelian smartphone."
            fallbackTo="/kontak"
            dataTestId="layanan-beli-whatsapp"
          >
            Tanya Ketersediaan via WhatsApp
          </WhatsAppButton>
        </div>
      </ServiceSection>

      <div className="section-alt">
        <ServiceSection id="jual" icon={Banknote} title={jual.title}>
          <p>{jual.intro}</p>
          <ProcessSteps steps={jual.steps} />
          <div className="notice" style={{ marginTop: 22 }}>
            <Info size={20} aria-hidden="true" />
            <p>{jual.note}</p>
          </div>
          <div className="btn-row" style={{ marginTop: 22 }}>
            <WhatsAppButton
              store={defaultStore}
              message="Halo, saya ingin menjual smartphone saya."
              fallbackTo="/kontak"
              dataTestId="layanan-jual-whatsapp"
            >
              Jual Smartphone Saya
            </WhatsAppButton>
          </div>
        </ServiceSection>
      </div>

      <ServiceSection id="tukar-tambah" icon={Repeat} title={tukarTambah.title}>
        <p>{tukarTambah.intro}</p>
        <div className="notice notice-info" style={{ marginTop: 22 }}>
          <Info size={20} aria-hidden="true" />
          <p>{tukarTambah.note}</p>
        </div>
        <div className="btn-row" style={{ marginTop: 22 }}>
          <WhatsAppButton
            store={defaultStore}
            message="Halo, saya ingin bertanya tentang tukar tambah smartphone."
            fallbackTo="/kontak"
            dataTestId="layanan-tukar-tambah-whatsapp"
          >
            Konsultasi Tukar Tambah
          </WhatsAppButton>
        </div>
      </ServiceSection>

      <div className="section-alt">
        <ServiceSection id="konsultasi" icon={MessagesSquare} title={konsultasi.title}>
          <p>{konsultasi.intro}</p>
          <h3>Topik konsultasi</h3>
          <ul className="topic-grid">
            {konsultasi.topics.map((topic) => {
              const TopicIcon = topicIcons[topic.icon] || Smartphone;
              return (
                <li key={topic.label}>
                  <TopicIcon size={16} aria-hidden="true" />
                  {topic.label}
                </li>
              );
            })}
          </ul>
          <div className="btn-row" style={{ marginTop: 22 }}>
            <WhatsAppButton
              store={defaultStore}
              message="Halo, saya ingin berkonsultasi tentang pemilihan smartphone."
              fallbackTo="/kontak"
              dataTestId="layanan-konsultasi-whatsapp"
            >
              Mulai Konsultasi
            </WhatsAppButton>
          </div>
        </ServiceSection>
      </div>
    </>
  );
}
