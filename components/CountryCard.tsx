import Link from "next/link";
import type { Country } from "@/lib/data";
import { COUNTRY_INFO } from "@/lib/data";
import { COUNTRY_DETAILS } from "@/lib/countries";

export default function CountryCard({ country }: { country: Country }) {
  const info = COUNTRY_INFO[country];
  const detail = COUNTRY_DETAILS[country];

  return (
    <Link href={`/countries/${encodeURIComponent(country)}`}>
      <div className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{info.emoji}</span>
          <div>
            <h3 className="font-bold text-gray-800 text-lg">{country}</h3>
            <p className="text-xs text-gray-400">{info.capital}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-xs bg-indigo-50 text-indigo-600 font-medium px-2 py-1 rounded-full">
            🗣️ {info.language}
          </span>
          <span className="text-xs bg-orange-50 text-orange-600 font-medium px-2 py-1 rounded-full">
            🌤️ {info.climate}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500">💰 月額目安：{detail.livingCost.total}</p>
          <span className="text-indigo-400 text-sm">詳細 →</span>
        </div>
      </div>
    </Link>
  );
}
