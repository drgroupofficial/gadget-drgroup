import { seo, stores } from "../data/siteData";
import { SEOHead } from "../components/SEOHead.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { StoreCard } from "../components/StoreCard.jsx";
import { ContactForm } from "../components/ContactForm.jsx";

export default function ContactPage() {
  return (
    <>
      <SEOHead seo={seo.kontak} />

      <div className="page-head">
        <div className="container">
          <span className="eyebrow">Kontak</span>
          <h1>Hubungi Toko Kami</h1>
          <p className="lead">
            Pilih cabang yang paling dekat dengan Anda, hubungi melalui WhatsApp, atau
            kirim pertanyaan melalui formulir di bawah ini.
          </p>
        </div>
      </div>

      <section className="section" aria-labelledby="kontak-toko">
        <div className="container">
          <SectionHeading
            eyebrow="Kontak Cabang"
            title="Tiga toko, satu standar layanan"
            id="kontak-toko"
          />
          <div className="grid grid-3">
            {stores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="formulir">
        <div className="container" style={{ maxWidth: 780 }}>
          <SectionHeading
            eyebrow="Formulir Pertanyaan"
            title="Kirim pertanyaan Anda"
            description="Isi formulir singkat ini dan pesan Anda akan diteruskan langsung ke WhatsApp toko yang dipilih."
            align="center"
          />
          <div id="formulir">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
