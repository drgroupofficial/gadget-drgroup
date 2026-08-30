import { AlertTriangle } from "lucide-react";
import { seo, processGuides, transactionNotice, stores, site } from "../data/siteData";
import { SEOHead } from "../components/SEOHead.jsx";
import { ProcessSteps } from "../components/ProcessSteps.jsx";
import { WhatsAppButton } from "../components/WhatsAppButton.jsx";

export default function HowItWorksPage() {
  const defaultStore = stores.find((s) => s.id === site.defaultStoreId) || stores[0];

  return (
    <>
      <SEOHead seo={seo.caraKerja} />

      <div className="page-head">
        <div className="container">
          <span className="eyebrow">Cara Kerja</span>
          <h1>Panduan Transaksi Langkah demi Langkah</h1>
          <p className="lead">
            Ikuti panduan berikut untuk membeli, menjual, atau tukar tambah smartphone di
            cabang kami.
          </p>
        </div>
      </div>

      {processGuides.map((guide, index) => (
        <section
          key={guide.id}
          className={`section${index % 2 === 1 ? " section-alt" : ""}`}
          aria-labelledby={`panduan-${guide.id}`}
        >
          <div className="container" style={{ maxWidth: 860 }}>
            <span className="eyebrow">Panduan {index + 1} dari {processGuides.length}</span>
            <h2 id={`panduan-${guide.id}`}>{guide.title}</h2>
            <ProcessSteps steps={guide.steps} />
          </div>
        </section>
      ))}

      <section className="section" aria-label="Catatan penting">
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="notice" data-testid="transaction-notice">
            <AlertTriangle size={22} aria-hidden="true" />
            <p>
              <strong>Penting: </strong>
              {transactionNotice}
            </p>
          </div>
          <div className="btn-row" style={{ marginTop: 26 }}>
            <WhatsAppButton
              store={defaultStore}
              fallbackTo="/kontak"
              dataTestId="cara-kerja-whatsapp"
            >
              Mulai dari WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
