import Link from "next/link";

const FEATURES = [
  {
    emoji: "🎯",
    title: "あなただけの診断",
    description: "価値観・ライフスタイル・予算をもとに、15カ国からぴったりの移住先を提案します。",
  },
  {
    emoji: "🌏",
    title: "意外な発見がある",
    description: "知らなかった国が1位になることも。新しい選択肢との出会いをお届けします。",
  },
  {
    emoji: "⚡️",
    title: "10問で完了",
    description: "選択肢を選ぶだけ。たった10問の診断で、あなたの理想の移住先がわかります。",
  },
];

const SAMPLE_RESULTS = [
  { emoji: "🇵🇹", country: "ポルトガル", percent: 94, type: "自由を求めるクリエイター" },
  { emoji: "🇩🇪", country: "ドイツ", percent: 88 },
  { emoji: "🇹🇭", country: "タイ", percent: 83 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-orange-50">
      {/* ナビ */}
      <header className="flex justify-between items-center px-6 py-4 max-w-2xl mx-auto">
        <span className="font-black text-lg text-indigo-600">🌍 MatchMove</span>
        <button className="text-sm text-gray-500 px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-50">
          ログイン（準備中）
        </button>
      </header>

      {/* ヒーロー */}
      <section className="text-center px-6 pt-12 pb-16 max-w-2xl mx-auto">
        <div className="inline-block bg-indigo-100 text-indigo-600 text-xs font-bold px-4 py-1.5 rounded-full mb-6">
          ✈️ 無料で診断できます
        </div>
        <h1 className="text-4xl font-black text-gray-900 leading-tight mb-4">
          あなたにぴったりの<br />
          <span className="bg-gradient-to-r from-indigo-500 to-orange-400 bg-clip-text text-transparent">
            海外移住先
          </span>
          を見つけよう。
        </h1>
        <p className="text-gray-500 text-base mb-8 leading-relaxed">
          いくつかの質問に答えて、あなたの価値観や<br className="hidden sm:block" />
          ライフスタイルに合った移住先をご提案します。
        </p>
        <Link
          href="/quiz"
          className="inline-block bg-gradient-to-r from-indigo-500 to-orange-400 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-lg hover:opacity-90 transition-all hover:scale-105"
        >
          診断スタート 🚀
        </Link>
        <p className="text-xs text-gray-400 mt-3">登録不要・無料・10問で完了</p>
      </section>

      {/* サンプル結果 */}
      <section className="px-6 pb-16 max-w-xl mx-auto">
        <p className="text-center text-xs text-gray-400 font-semibold mb-4 uppercase tracking-wider">
          診断結果イメージ
        </p>
        <div className="bg-white rounded-3xl shadow-lg p-6 opacity-90">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🏆</span>
            <div className="flex-1">
              <p className="text-xs text-gray-400">第1位</p>
              <p className="text-xl font-black text-gray-800">
                {SAMPLE_RESULTS[0].emoji} {SAMPLE_RESULTS[0].country}
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-black text-indigo-600">{SAMPLE_RESULTS[0].percent}%</p>
              <p className="text-xs text-gray-400">マッチ度</p>
            </div>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2 mb-3">
            <div className="bg-gradient-to-r from-indigo-500 to-orange-400 h-2 rounded-full w-[94%]" />
          </div>
          <div className="bg-indigo-50 rounded-2xl px-4 py-2 mb-4">
            <span className="text-xs text-indigo-500 font-bold">あなたのタイプ：</span>
            <span className="text-xs text-gray-700 ml-1">{SAMPLE_RESULTS[0].type}</span>
          </div>
          <div className="flex flex-col gap-2">
            {SAMPLE_RESULTS.slice(1).map((r, i) => (
              <div key={r.country} className="flex items-center gap-2">
                <span className="text-base">{i === 0 ? "🥈" : "🥉"}</span>
                <span>{r.emoji}</span>
                <span className="text-sm text-gray-600 flex-1">{r.country}</span>
                <span className="text-sm font-bold text-indigo-500">{r.percent}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 特徴 */}
      <section className="px-6 pb-16 max-w-xl mx-auto">
        <div className="grid gap-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-5 shadow-sm flex gap-4 items-start">
              <span className="text-3xl">{f.emoji}</span>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* サブページバナー */}
      <section className="px-6 pb-12 max-w-xl mx-auto flex flex-col gap-3">
        <Link
          href="/countries"
          className="flex items-center justify-between bg-white rounded-2xl shadow-sm px-6 py-5 hover:shadow-md transition-all group"
        >
          <div>
            <p className="font-bold text-gray-800 mb-1">🗺️ 国を調べる</p>
            <p className="text-sm text-gray-500">生活コスト・ビザ・おすすめエリアを条件で絞り込もう</p>
          </div>
          <span className="text-indigo-400 group-hover:translate-x-1 transition-transform text-xl">→</span>
        </Link>
        <Link
          href="/rolemodels"
          className="flex items-center justify-between bg-white rounded-2xl shadow-sm px-6 py-5 hover:shadow-md transition-all group"
        >
          <div>
            <p className="font-bold text-gray-800 mb-1">🌏 ロールモデルを探す</p>
            <p className="text-sm text-gray-500">海外で活躍している人たちのリアルな声を見てみよう</p>
          </div>
          <span className="text-indigo-400 group-hover:translate-x-1 transition-transform text-xl">→</span>
        </Link>
      </section>

      {/* CTA */}
      <section className="text-center px-6 pb-16">
        <Link
          href="/quiz"
          className="inline-block bg-gradient-to-r from-indigo-500 to-orange-400 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-lg hover:opacity-90 transition-all hover:scale-105"
        >
          今すぐ診断する 🌍
        </Link>
      </section>

      {/* フッター */}
      <footer className="text-center text-xs text-gray-400 pb-8">
        © 2025 MatchMove
      </footer>
    </div>
  );
}
