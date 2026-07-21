import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
  FaClock,
  FaMountain,
} from "react-icons/fa";
import { getWhatsAppLink, WA_MESSAGES } from "../utils/whatsapp";

const menus = [
  { label: "Beranda", id: "beranda" },
  { label: "Paket Jeep", id: "paket" },
  { label: "Fasilitas", id: "fasilitas" },
  { label: "Kontak", id: "kontak" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="kontak" className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <FaMountain className="text-emerald-500" aria-hidden="true" />
              JEEP <span className="text-emerald-500">WONOLELO</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Jeep Adventure Wonolelo mengajak Anda menjelajahi keindahan lereng
              Gunung Merbabu, dari Negeri Kahyangan hingga Lembah Merbabu,
              dengan aman dan berkesan.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              <a
                href={getWhatsAppLink(WA_MESSAGES.umum)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat WhatsApp"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-emerald-700 flex items-center justify-center transition"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-emerald-700 flex items-center justify-center transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-emerald-700 flex items-center justify-center transition"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-white font-semibold mb-4">Menu</h3>
            <ul className="space-y-2.5 text-sm">
              {menus.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="hover:text-emerald-500 transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Jam Operasional */}
          <div>
            <h3 className="text-white font-semibold mb-4">Jam Operasional</h3>
            <div className="flex items-start gap-3 text-sm">
              <FaClock
                className="text-emerald-500 mt-0.5 shrink-0"
                aria-hidden="true"
              />
              <div>
                <p>Setiap hari</p>
                <p className="text-gray-400">07.00 - 18.00 WIB</p>
              </div>
            </div>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontak & Lokasi</h3>
            <div className="space-y-3 text-sm">
              <a
                href={getWhatsAppLink(WA_MESSAGES.umum)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-emerald-500 transition"
              >
                <FaWhatsapp
                  className="text-emerald-500 mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <span>0812-3456-7890 (WhatsApp)</span>
              </a>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt
                  className="text-emerald-500 mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <span>
                  Basecamp Wonolelo, Kec. Sawangan, Kab. Magelang, Jawa Tengah
                </span>
              </div>
            </div>

            <a
              href={getWhatsAppLink(WA_MESSAGES.booking)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 active:scale-95 text-white px-5 py-3 rounded-full text-sm font-semibold transition"
            >
              <FaWhatsapp aria-hidden="true" />
              Booking Sekarang
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-gray-500 text-center sm:text-left">
          <p>&copy; {year} Jeep Adventure Wonolelo. Semua hak dilindungi.</p>
          <p>Dibuat dengan semangat petualangan di lereng Merbabu.</p>
        </div>
      </div>
    </footer>
  );
}
