import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppLink, WA_MESSAGES } from "../utils/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppLink(WA_MESSAGES.umum)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white flex items-center justify-center shadow-xl shadow-emerald-900/30 transition"
    >
      <FaWhatsapp className="text-2xl" />
      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 animate-ping"></span>
      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500"></span>
    </a>
  );
}
