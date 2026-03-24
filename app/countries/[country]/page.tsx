import Link from "next/link";
import { notFound } from "next/navigation";
import { COUNTRIES, COUNTRY_INFO, type Country } from "@/lib/data";
import { COUNTRY_DETAILS } from "@/lib/countries";
import { ROLE_MODELS, PURPOSE_LABEL } from "@/lib/rolemodels";

export function generateStaticParams() {
  return COUNTRIES.map((c) => ({ country: encodeURIComponent(c) }));
}

export default async function CountryDetailPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country: rawCountry } = await params;
  const country = decodeURIComponent(rawCountry) as Country;

  if (!COUNTRIES.includes(country)) notFound();

  const info = COUNTRY_INFO[country];
  const detail = COUNTRY_DETAILS[country];
  const roleModels = ROLE_MODELS.filter((m) => m.country === country).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-orange-50">
      <header className="flex justify-between items-center px-6 py-4 max-w-2xl mx-auto">
        <Link href="/" className="font-black text-lg text-indigo-600">🌍 MatchMove</Link>
        <Link href="/countries" className="text-sm text-gray-500 hover:text-indigo-500">
          ← 国一覧に戻る
        </Link>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-8">
        {/* ヘッダー */}
        <div className="text-center mb-8">
          <p className="text-6xl mb-3">{info.emoji}</p>
          <h1 className="text-3xl font-black text-gray-900 mb-2">{country}</h1>
          <p className="text-gray-400 text-sm">{info.capital}</p>
        </div>

        {/* 基本情報 */}
        <div className="bg-white rounded-3xl shadow-sm p-6 mb-4">
          <h2 className="font-bold text-gray-700 mb-4">📋 基本情報</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-2xl p-3">
              <p className="text-xs text-gray-400 mb-1">🗣️ 言語</p>
              <p className="text-sm font-medium text-gray-700">{info.language}</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-3">
              <p className="text-xs text-gray-400 mb-1">🌤️ 気候</p>
              <p className="text-sm font-medium text-gray-700">{info.climate}</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-3">
              <p className="text-xs text-gray-400 mb-1">💰 通貨</p>
              <p className="text-sm font-medium text-gray-700">{info.currency}</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-3">
              <p className="text-xs text-gray-400 mb-1">🏛️ 首都</p>
              <p className="text-sm font-medium text-gray-700">{info.capital}</p>
            </div>
          </div>
        </div>

        {/* 生活コスト */}
        <div className="bg-white rounded-3xl shadow-sm p-6 mb-4">
          <h2 className="font-bold text-gray-700 mb-4">💸 生活コスト目安（月額）</h2>
          <div className="flex flex-col gap-3">
            {[
              { label: "🏠 家賃", value: detail.livingCost.rent },
              { label: "🍽️ 食費", value: detail.livingCost.food },
              { label: "🚌 交通費", value: detail.livingCost.transport },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                <span className="text-sm text-gray-600">{item.label}</span>
                <span className="text-sm font-bold text-gray-800">{item.value}</span>
              </div>
            ))}
            <div className="flex justify-between items-center pt-2">
              <span className="text-sm font-bold text-indigo-600">合計目安</span>
              <span className="text-base font-black text-indigo-600">{detail.livingCost.total}</span>
            </div>
          </div>
        </div>

        {/* ビザ情報 */}
        <div className="bg-white rounded-3xl shadow-sm p-6 mb-4">
          <h2 className="font-bold text-gray-700 mb-4">📄 ビザ情報</h2>
          <div className="flex flex-col gap-4">
            {[
              { label: "✈️ ワーキングホリデー", value: detail.visa.workingHoliday },
              { label: "💼 就労ビザ", value: detail.visa.work },
              { label: "🎓 留学ビザ", value: detail.visa.study },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs font-bold text-indigo-500 mb-1">{item.label}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* おすすめエリア */}
        <div className="bg-white rounded-3xl shadow-sm p-6 mb-4">
          <h2 className="font-bold text-gray-700 mb-4">📍 おすすめエリア・都市</h2>
          <div className="flex flex-col gap-3">
            {detail.cities.map((city) => (
              <div key={city.name} className="bg-indigo-50 rounded-2xl p-4">
                <p className="font-bold text-indigo-700 mb-1">{city.name}</p>
                <p className="text-sm text-gray-600">{city.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* この国のロールモデル */}
        {roleModels.length > 0 && (
          <div className="bg-white rounded-3xl shadow-sm p-6 mb-6">
            <h2 className="font-bold text-gray-700 mb-4">👥 この国で活躍している人</h2>
            <div className="flex flex-col gap-4">
              {roleModels.map((model) => (
                <div key={model.id} className="border-l-2 border-indigo-200 pl-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-800 text-sm">{model.name}（{model.age}歳）</span>
                    <span className="text-xs bg-orange-50 text-orange-500 px-2 py-0.5 rounded-full">
                      {PURPOSE_LABEL[model.purpose]}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mb-1">{model.occupation} / 在住{model.duration}</p>
                  <p className="text-sm text-gray-600 italic">"{model.comment}"</p>
                </div>
              ))}
            </div>
            <Link href="/rolemodels" className="block text-center text-xs text-indigo-500 mt-4 hover:underline">
              もっと見る →
            </Link>
          </div>
        )}

        {/* CTA */}
        <Link
          href="/quiz"
          className="block text-center bg-gradient-to-r from-indigo-500 to-orange-400 text-white font-bold py-4 rounded-2xl shadow-md hover:opacity-90 transition-all"
        >
          {country}が向いているか診断する 🚀
        </Link>
      </main>
    </div>
  );
}
