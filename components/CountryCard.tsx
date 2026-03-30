import Link from "next/link";
import type { CityRow } from "@/lib/supabase";

export default function CountryCard({ city }: { city: CityRow }) {
  return (
    <Link href={`/countries/${encodeURIComponent(city.name_ja)}`}>
      <div className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{city.emoji}</span>
          <div>
            <h3 className="font-bold text-gray-800 text-lg">{city.name_ja}</h3>
            <p className="text-xs text-gray-400">{city.capital}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-xs bg-indigo-50 text-indigo-600 font-medium px-2 py-1 rounded-full">
            🗣️ {city.lang_official}
          </span>
          <span className="text-xs bg-orange-50 text-orange-600 font-medium px-2 py-1 rounded-full">
            🌤️ {city.climate_temp}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500">💰 月額目安：{city.cost_total}</p>
          <span className="text-indigo-400 text-sm">詳細 →</span>
        </div>
      </div>
    </Link>
  );
}
