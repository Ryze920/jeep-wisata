import { FaWhatsapp, FaMountain } from "react-icons/fa";
import heroImage from "../assets/images/Hero.jpeg";
import { getWhatsAppLink, WA_MESSAGES } from "../utils/whatsapp";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16 md:pt-0"
    >
      {/* Background */}
      <img
        src={heroImage}
        alt="Jeep Adventure Wonolelo"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 sm:bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center text-white px-4 sm:px-6 py-16">
        <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm tracking-widest uppercase">
          Jeep Adventure Wonolelo
        </span>

        <h1 className="mt-6 sm:mt-8 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Explore Merbabu
          <br />
          with Jeep Adventure
        </h1>

        <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
          Nikmati pengalaman menjelajahi Negeri Kahyangan, Hutan Pinus, Offroad
          Kali Bontar, hingga Lembah Merbabu bersama Jeep Adventure Wonolelo.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
          <a
            href="#paket"
            className="flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 active:scale-95 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold transition duration-300"
          >
            <FaMountain aria-hidden="true" />
            Lihat Paket
          </a>

          <a
            href={getWhatsAppLink(WA_MESSAGES.umum)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-white hover:bg-white hover:text-slate-900 active:scale-95 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold transition duration-300"
          >
            <FaWhatsapp className="text-lg" aria-hidden="true" />
            Hubungi Kami
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-7 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
