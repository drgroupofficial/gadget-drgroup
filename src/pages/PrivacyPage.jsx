import { seo } from "../data/siteData";
import { privacyPage } from "../data/legalData";
import { SEOHead } from "../components/SEOHead.jsx";
import { LegalArticle } from "../components/LegalArticle.jsx";

export default function PrivacyPage() {
  return (
    <>
      <SEOHead seo={seo.kebijakanPrivasi} />
      <div className="page-head">
        <div className="container">
          <span className="eyebrow">Legal</span>
          <h1>Kebijakan Privasi</h1>
          <p className="lead">
            Cara website informasi Almira Gadget &amp; DRSTORE menangani informasi pengguna.
          </p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <LegalArticle page={privacyPage} testId="privacy-article" />
        </div>
      </section>
    </>
  );
}
