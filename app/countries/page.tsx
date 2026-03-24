import Link from "next/link";
import CountriesClient from "./CountriesClient";

export default function CountriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-orange-50">
      <header className="flex justify-between items-center px-6 py-4 max-w-3xl mx-auto">
        <Link href="/" className="font-black text-lg text-indigo-600">🌍 MatchMove</Link>
        <Link
          href="/quiz"
          className="text-sm bg-gradient-to-r from-indigo-500 to-orange-400 text-white font-bold px-4 py-2 rounded-xl hover:opacity-90 transition-all"
        >
          診断する 🚀
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-gray-900 mb-2">🗺️ 国を調べる</h1>
          <p className="text-gray-500 text-sm">条件で絞り込んで、気になる国の詳細を確認しよう。</p>
        </div>
        <CountriesClient />
      </main>
    </div>
  );
}
