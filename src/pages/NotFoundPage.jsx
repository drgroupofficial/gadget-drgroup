import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="section">
      <div className="container not-found">
        <span className="eyebrow">404</span>
        <h1>Halaman tidak ditemukan</h1>
        <p className="lead" style={{ margin: "0 auto 28px" }}>
          Halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
        </p>
        <Link to="/" className="btn btn-primary" data-testid="not-found-home-button">
          Kembali ke Beranda
        </Link>
      </div>
    </section>
  );
}
