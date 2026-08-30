export const withFallback = (value, fallback) =>
  value && String(value).trim() ? value : fallback;

export const instagramUrl = (username) =>
  username ? `https://www.instagram.com/${username.replace(/^@/, "")}` : "";

export const tiktokUrl = (username) =>
  username ? `https://www.tiktok.com/@${username.replace(/^@/, "")}` : "";

export const PLACEHOLDERS = {
  address: "[Alamat toko belum ditambahkan]",
  whatsapp: "[Nomor WhatsApp belum ditambahkan]",
  hours: "[Jam operasional belum ditambahkan]",
  instagram: "[Instagram belum ditambahkan]",
  tiktok: "[TikTok belum ditambahkan]",
  maps: "[Tautan Google Maps belum ditambahkan]",
  area: "[Area belum ditambahkan]",
  status: "[Status toko belum ditambahkan]",
};
