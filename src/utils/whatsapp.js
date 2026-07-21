export const WHATSAPP_NUMBER = "6281578358507";

export function getWhatsAppLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const WA_MESSAGES = {
  umum: "Halo Jeep Adventure Wonolelo, saya ingin bertanya tentang paket wisata Jeep.",
  booking:
    "Halo Jeep Adventure Wonolelo, saya ingin booking Jeep. Mohon info ketersediaan tanggalnya ya.",
  paket: (namaPaket) =>
    `Halo Jeep Adventure Wonolelo, saya tertarik dengan paket "${namaPaket}". Bisa dibantu info lebih lanjut dan cara bookingnya?`,
};
