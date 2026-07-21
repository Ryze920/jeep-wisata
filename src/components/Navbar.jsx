import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { getWhatsAppLink, WA_MESSAGES } from "../utils/whatsapp";

const menus = [
  { label: "Beranda", id: "beranda" },
  { label: "Paket Jeep", id: "paket" },
  { label: "Fasilitas", id: "fasilitas" },
  { label: "Kontak", id: "kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Kunci scroll body saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Beri background lebih solid setelah user scroll (kontras lebih jelas di mobile)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        scrolled
          ? "bg-white/95 border-gray-200"
          : "bg-white/80 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#beranda" className="flex flex-col leading-none shrink-0">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-slate-900">
            JEEP<span className="text-emerald-700"> WONOLELO</span>
          </h1>
          <p className="hidden sm:block text-[10px] md:text-xs text-gray-500 tracking-widest uppercase mt-0.5">
            Adventure Merbabu
          </p>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 lg:gap-10 text-gray-700 font-medium">
          {menus.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="cursor-pointer transition hover:text-emerald-700"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Tombol Booking (Desktop) -> WhatsApp */}
        <a
          href={getWhatsAppLink(WA_MESSAGES.booking)}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-emerald-700 text-white px-5 lg:px-6 py-3 rounded-full hover:bg-emerald-800 active:scale-95 transition"
        >
          <FaWhatsapp className="text-lg" aria-hidden="true" />
          Booking Sekarang
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          className="md:hidden p-2 -mr-2 text-slate-900"
        >
          {open ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden bg-white border-t transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        {menus.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setOpen(false)}
            className="block px-6 py-4 border-b text-gray-700 font-medium active:bg-gray-50"
          >
            {item.label}
          </a>
        ))}

        <div className="p-4">
          <a
            href={getWhatsAppLink(WA_MESSAGES.booking)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="w-full flex items-center justify-center gap-2 bg-emerald-700 text-white py-3.5 rounded-xl font-semibold active:bg-emerald-800"
          >
            <FaWhatsapp className="text-xl" aria-hidden="true" />
            Booking via WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
