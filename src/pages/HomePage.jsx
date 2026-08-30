import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { seo, services, stores, trustPoints, homeSteps, faqItems } from "../data/siteData";
import { buildOrganizationJsonLd } from "../utils/seo";
import { SEOHead } from "../components/SEOHead.jsx";
import { Hero } from "../components/Hero.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { ServiceCard } from "../components/ServiceCard.jsx";
import { StoreCard } from "../components/StoreCard.jsx";
import { ProcessSteps } from "../components/ProcessSteps.jsx";
import { FAQAccordion } from "../components/FAQAccordion.jsx";
import { WhatsAppButton } from "../components/WhatsAppButton.jsx";

export default function HomePage() {
  const defaultStore = stores.find((s) => s.id === "almira-gadget") || stores[0];

  return (
    <>
      <SEOHead seo={seo.home} jsonLd={buildOrganizationJsonLd()} />
      <Hero />

      <section className="section section-alt" aria-labelledby="kepercayaan">
        <div className="container">
          <SectionHeading
            eyebrow="Kenapa Kami"
            title="Alasan memilih Almira Gadget & DRSTORE"
            description="Kami berfokus pada proses yang jelas dan komunikasi yang transparan di setiap transaksi."
          />
          <ul className="trust-list" id="kepercayaan">
            {trustPoints.map((point) => (
              <li key={point}>
                <span className="trust-icon">
                  <CheckCircle2 size={17} aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="tentang">
        <div className="container" style={{ maxWidth: 820 }}>
          <SectionHeading
            eyebrow="Tentang Kami"
            title="Jaringan toko smartphone untuk Sidoarjo, Tropodo, dan sekitarnya"
            align="center"
          />
          <p className="lead text-center" id="tentang">
            Almira Gadget dan DRSTORE melayani kebutuhan jual beli smartphone baru dan
            second, penjualan perangkat milik pelanggan, serta tukar tambah smartphone
            melalui beberapa lokasi toko. Anda bebas memilih dan menghubungi cabang yang
            paling dekat dan nyaman untuk Anda.
          </p>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="layanan-unggulan">
        <div className="container">
          <SectionHeading
            eyebrow="Layanan"
            title="Apa yang bisa Anda lakukan"
            description="Empat layanan utama yang tersedia di seluruh cabang kami."
          />
          <div className="grid grid-4" id="layanan-unggulan">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="cabang">
        <div className="container">
          <SectionHeading
            eyebrow="Cabang Kami"
            title="Pilih toko yang paling dekat dengan Anda"
            description="Setiap cabang memiliki kontak WhatsApp dan lokasi sendiri — pilih yang paling nyaman untuk Anda."
          />
          <div className="grid grid-3" id="cabang">
            {stores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="alur">
        <div className="container">
          <SectionHeading
            eyebrow="Alur Transaksi"
            title="Prosesnya sederhana"
            description="Lima langkah mudah untuk membeli, menjual, atau tukar tambah smartphone."
            align="center"
          />
          <div id="alur">
            <ProcessSteps steps={homeSteps} columns />
          </div>
          <div className="btn-row" style={{ justifyContent: "center", marginTop: 36 }}>
            <Link to="/cara-kerja" className="btn btn-outline" data-testid="home-lihat-panduan-button">
              Lihat Panduan Lengkap
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-preview">
        <div className="container" style={{ maxWidth: 860 }}>
          <SectionHeading
            eyebrow="FAQ"
            title="Pertanyaan yang sering diajukan"
            align="center"
          />
          <div id="faq-preview">
            <FAQAccordion items={faqItems.slice(0, 4)} />
          </div>
          <div className="btn-row" style={{ justifyContent: "center", marginTop: 28 }}>
            <Link to="/faq" className="btn btn-outline" data-testid="home-semua-faq-button">
              Lihat Semua FAQ
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Ajakan akhir">
        <div className="container">
          <div className="cta-final">
            <h2>Pilih toko terdekat dan konsultasikan kebutuhan smartphone Anda.</h2>
            <p>
              Tim kami siap membantu Anda membeli, menjual, atau tukar tambah smartphone
              dengan proses yang jelas.
            </p>
            <div className="btn-row">
              <Link to="/lokasi-toko" className="btn btn-cta" data-testid="cta-final-pilih-toko">
                Pilih Toko
              </Link>
              <WhatsAppButton
                store={defaultStore}
                fallbackTo="/kontak"
                className="btn btn-whatsapp"
                dataTestId="cta-final-whatsapp"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
