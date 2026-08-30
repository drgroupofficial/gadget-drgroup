import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { ScrollToTop } from "./components/ScrollToTop.jsx";
import HomePage from "./pages/HomePage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import StoresPage from "./pages/StoresPage.jsx";
import HowItWorksPage from "./pages/HowItWorksPage.jsx";
import FaqPage from "./pages/FaqPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ArticlesPage from "./pages/ArticlesPage.jsx";
import ArticleDetailPage from "./pages/ArticleDetailPage.jsx";
import TermsPage from "./pages/TermsPage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <BrowserRouter
  basename={import.meta.env.BASE_URL.replace(/\/$/, "") || "/"}
>
      <ScrollToTop />
      <a className="skip-link" href="#konten-utama">
        Langsung ke konten utama
      </a>
      <Header />
      <main id="konten-utama">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/layanan" element={<ServicesPage />} />
          <Route path="/lokasi-toko" element={<StoresPage />} />
          <Route path="/cara-kerja" element={<HowItWorksPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/kontak" element={<ContactPage />} />
          <Route path="/artikel" element={<ArticlesPage />} />
          <Route path="/artikel/:slug" element={<ArticleDetailPage />} />
          <Route path="/syarat-ketentuan" element={<TermsPage />} />
          <Route path="/kebijakan-privasi" element={<PrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
