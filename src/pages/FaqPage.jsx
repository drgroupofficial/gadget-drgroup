import { Link } from "react-router-dom";
import { seo, faqItems, policyFaqItems } from "../data/siteData";
import { SEOHead } from "../components/SEOHead.jsx";
import { FAQAccordion } from "../components/FAQAccordion.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";

export default function FaqPage() {
  return (
    <>
      <SEOHead seo={seo.faq} />

      <div className="page-head">
        <div className="container">
          <span className="eyebrow">FAQ</span>
          <h1>Pertanyaan yang Sering Diajukan</h1>
          <p className="lead">
            Jawaban seputar layanan jual beli, tukar tambah, garansi, dan pembayaran di
            toko kami.
          </p>
        </div>
      </div>

      <section className="section" aria-label="Pertanyaan umum">
        <div className="container" style={{ maxWidth: 860 }}>
          <SectionHeading eyebrow="Umum" title="Seputar layanan kami" />
          <FAQAccordion items={faqItems} idPrefix="faq" />
        </div>
      </section>

      <section className="section section-alt" aria-label="Kebijakan toko">
        <div className="container" style={{ maxWidth: 860 }}>
          <SectionHeading
            eyebrow="Kebijakan Toko"
            title="Garansi, pengembalian, dan pembayaran"
          />
          <FAQAccordion items={policyFaqItems} idPrefix="kebijakan" />
          <div className="btn-row" style={{ marginTop: 30 }}>
            <Link to="/kontak" className="btn btn-primary" data-testid="faq-hubungi-kami-button">
              Masih ada pertanyaan? Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
