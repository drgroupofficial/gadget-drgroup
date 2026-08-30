export const DEFAULT_MESSAGE = "Halo, saya mendapatkan informasi dari website.";

export const normalizePhone = (raw) => (raw || "").replace(/[^0-9]/g, "");

export const buildWhatsAppLink = (number, message = DEFAULT_MESSAGE) => {
  const phone = normalizePhone(number);
  if (!phone) return "";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export const buildEnquiryMessage = ({ nama, kebutuhan, toko, pesan }) =>
  [
    "Halo, saya mendapatkan informasi dari website.",
    "",
    `Nama: ${nama}`,
    `Kebutuhan: ${kebutuhan}`,
    `Toko yang dipilih: ${toko}`,
    `Pesan: ${pesan}`,
  ].join("\n");
