import { useState } from "react";
import { Send, AlertTriangle } from "lucide-react";
import { stores, kebutuhanOptions } from "../data/siteData";
import { buildWhatsAppLink, buildEnquiryMessage } from "../utils/whatsapp";

export function ContactForm() {
  const [form, setForm] = useState({
    nama: "",
    whatsapp: "",
    toko: stores[0].id,
    kebutuhan: kebutuhanOptions[0],
    pesan: "",
  });
  const [missingNumberStore, setMissingNumberStore] = useState("");

  const update = (field) => (event) =>
    setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedStore = stores.find((s) => s.id === form.toko);
    const message = buildEnquiryMessage({
      nama: form.nama,
      kebutuhan: form.kebutuhan,
      toko: selectedStore.name,
      pesan: form.pesan,
    });
    const link = buildWhatsAppLink(selectedStore.whatsapp, message);

    if (!link) {
      // Nomor belum diisi: tampilkan peringatan konfigurasi untuk pengembang,
      // bukan pesan error teknis untuk pengunjung.
      setMissingNumberStore(selectedStore.name);
      return;
    }
    setMissingNumberStore("");
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <form className="form-card" onSubmit={handleSubmit} data-testid="contact-form">
      <div className="form-grid">
        <div className="field">
          <label htmlFor="form-nama">Nama</label>
          <input
            id="form-nama"
            type="text"
            required
            autoComplete="name"
            value={form.nama}
            onChange={update("nama")}
            placeholder="Nama Anda"
            data-testid="form-nama-input"
          />
        </div>
        <div className="field">
          <label htmlFor="form-whatsapp">Nomor WhatsApp</label>
          <input
            id="form-whatsapp"
            type="tel"
            required
            autoComplete="tel"
            value={form.whatsapp}
            onChange={update("whatsapp")}
            placeholder="Contoh: 0812xxxxxxx"
            data-testid="form-whatsapp-input"
          />
        </div>
        <div className="field">
          <label htmlFor="form-toko">Pilih toko</label>
          <select
            id="form-toko"
            value={form.toko}
            onChange={update("toko")}
            data-testid="form-toko-select"
          >
            {stores.map((store) => (
              <option key={store.id} value={store.id}>
                {store.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="form-kebutuhan">Pilih kebutuhan</label>
          <select
            id="form-kebutuhan"
            value={form.kebutuhan}
            onChange={update("kebutuhan")}
            data-testid="form-kebutuhan-select"
          >
            {kebutuhanOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="field full">
          <label htmlFor="form-pesan">Pesan</label>
          <textarea
            id="form-pesan"
            required
            value={form.pesan}
            onChange={update("pesan")}
            placeholder="Tuliskan pertanyaan atau detail kebutuhan Anda"
            data-testid="form-pesan-textarea"
          />
        </div>
      </div>

      {missingNumberStore && import.meta.env.DEV && (
        <div className="dev-warning" style={{ marginTop: 18 }} role="alert" data-testid="form-dev-warning">
          <strong>Peringatan konfigurasi (hanya tampil saat development)</strong>
          Nomor WhatsApp untuk <b>{missingNumberStore}</b> belum diisi. Tambahkan nomor
          pada kolom <code>whatsapp</code> di file <code>src/data/siteData.js</code>.
        </div>
      )}
      {missingNumberStore && !import.meta.env.DEV && (
        <div className="notice notice-info" style={{ marginTop: 18 }} role="status">
          <AlertTriangle size={20} aria-hidden="true" />
          <p>
            Informasi kontak {missingNumberStore} belum tersedia saat ini. Silakan pilih
            toko lain atau coba lagi nanti.
          </p>
        </div>
      )}

      <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 10 }}>
        <button type="submit" className="btn btn-whatsapp" data-testid="form-submit-button">
          <Send size={18} aria-hidden="true" />
          Kirim via WhatsApp
        </button>
        <p className="form-note">
          Pesan Anda akan dibuka di aplikasi WhatsApp dan diteruskan ke toko yang dipilih.
          Formulir ini tidak menyimpan data apa pun.
        </p>
      </div>
    </form>
  );
}
