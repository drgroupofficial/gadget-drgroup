import { site, stores } from "../data/siteData";

// Menyusun structured data (JSON-LD) untuk Organization dan Store.
// Kolom yang belum diisi tidak disertakan agar tidak ada data palsu.
export const buildOrganizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  description: site.description,
  url: site.url,
  logo: `${site.url}${site.logo}`,
  subOrganization: stores.map((store) => {
    const entry = { "@type": "Store", name: store.name };
    if (store.address) {
      entry.address = {
        "@type": "PostalAddress",
        streetAddress: store.address,
        ...(store.area ? { addressLocality: store.area } : {}),
        addressCountry: "ID",
      };
    }
    if (store.whatsapp) entry.telephone = `+${store.whatsapp}`;
    if (store.mapsUrl) entry.hasMap = store.mapsUrl;
    if (store.operatingDays && store.operatingHours) {
      entry.openingHours = `${store.operatingDays} ${store.operatingHours}`;
    }
    return entry;
  }),
});

export const buildArticleJsonLd = (article) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: article.title,
  description: article.metaDescription,
  image: `${site.url}${article.featuredImage}`,
  datePublished: article.publishedDate,
  dateModified: article.updatedDate,
  inLanguage: "id-ID",
  keywords: article.keywords.join(", "),
  author: { "@type": "Organization", name: article.author, url: site.url },
  publisher: {
    "@type": "Organization",
    name: site.name,
    logo: { "@type": "ImageObject", url: `${site.url}${site.logo}` },
  },
  mainEntityOfPage: `${site.url}/artikel/${article.slug}`,
});

export const buildBreadcrumbJsonLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: `${site.url}${item.path}`,
  })),
});
