import {
  FaClock,
  FaCheckCircle,
  FaWhatsapp,
  FaExclamationTriangle,
} from "react-icons/fa";
import { getWhatsAppLink, WA_MESSAGES } from "../utils/whatsapp";

export default function JeepCard({ jeep }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 sm:hover:-translate-y-2">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white p-5 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-bold">{jeep.nama}</h3>

        <p className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-bold">
          Rp {jeep.harga.toLocaleString("id-ID")}
        </p>

        <div className="flex items-center gap-2 mt-2 sm:mt-3 text-sm sm:text-base">
          <FaClock aria-hidden="true" />
          <span>{jeep.durasi}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 sm:p-6">
        <h4 className="font-semibold text-slate-800 mb-3 sm:mb-4">
          Rute Perjalanan
        </h4>

        <ul className="space-y-2.5 sm:space-y-3">
          {jeep.rute.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <FaCheckCircle
                className="text-emerald-700 mt-0.5 shrink-0"
                aria-hidden="true"
              />
              <span className="text-sm sm:text-base text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        {jeep.catatan && (
          <div className="mt-5 sm:mt-6 rounded-xl bg-amber-50 border border-amber-200 p-4 flex gap-3">
            <FaExclamationTriangle
              className="text-amber-600 mt-0.5 shrink-0"
              aria-hidden="true"
            />
            <div>
              <h5 className="font-semibold text-amber-800">Catatan</h5>
              <p className="text-sm text-amber-700 mt-1">{jeep.catatan}</p>
            </div>
          </div>
        )}

        <a
          href={getWhatsAppLink(WA_MESSAGES.paket(jeep.nama))}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full mt-6 sm:mt-8 flex items-center justify-center gap-2 bg-slate-900 hover:bg-black active:scale-95 text-white py-3.5 rounded-xl transition font-semibold"
        >
          <FaWhatsapp className="text-lg" aria-hidden="true" />
          Booking via WhatsApp
        </a>
      </div>
    </div>
  );
}
