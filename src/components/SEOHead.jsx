import { useEffect } from "react";
import { site } from "../data/siteData";

const upsertMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertCanonical = (href) => {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export function SEOHead({ seo, jsonLd }) {
  useEffect(() => {
    const pageUrl = `${site.url}${seo.path}`;
    document.title = seo.title;
    upsertMeta("name", "description", seo.description);
    upsertCanonical(pageUrl);
    upsertMeta("property", "og:title", seo.ogTitle || seo.title);
    upsertMeta("property", "og:description", seo.ogDescription || seo.description);
    upsertMeta("property", "og:type", seo.ogType || "website");
    upsertMeta("property", "og:url", pageUrl);
    upsertMeta("property", "og:image", `${site.url}${seo.ogImage || site.ogImage}`);
    upsertMeta("property", "og:locale", "id_ID");

    const scripts = [];
    const jsonLdList = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
    jsonLdList.forEach((data) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoHead = "true";
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
      scripts.push(script);
    });
    return () => scripts.forEach((script) => script.remove());
  }, [seo, jsonLd]);

  return null;
}
