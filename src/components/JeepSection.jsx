import dataJeep from "../data/dataJeep";
import JeepCard from "./JeepCard";

export default function JeepSection() {
  return (
    <section id="paket" className="bg-gray-50 py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-emerald-700 uppercase tracking-widest font-semibold text-sm sm:text-base">
            Paket Wisata
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold mt-3 sm:mt-4 text-slate-900">
            Pilih Paket Jeep Terbaik
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
            Nikmati pengalaman offroad terbaik bersama Jeep Adventure Wonolelo
            dengan berbagai pilihan rute dan durasi perjalanan.
          </p>
        </div>

        {dataJeep?.length ? (
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {dataJeep.map(
              (jeep) => jeep && <JeepCard key={jeep.id} jeep={jeep} />,
            )}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            Paket belum tersedia saat ini.
          </p>
        )}
      </div>
    </section>
  );
}
