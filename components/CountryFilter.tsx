"use client";

type Props = {
  purpose: string;
  budget: string;
  language: string;
  climate: string;
  onChange: (key: string, value: string) => void;
};

export default function CountryFilter({ purpose, budget, language, climate, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <select
        value={purpose}
        onChange={(e) => onChange("purpose", e.target.value)}
        className="text-sm border border-gray-200 rounded-xl px-4 py-2 bg-white text-gray-700 focus:outline-none focus:border-indigo-400"
      >
        <option value="">🎯 すべての目的</option>
        <option value="study">🎓 留学・進学</option>
        <option value="working_holiday">✈️ ワーキングホリデー</option>
        <option value="work">💼 転職・就職</option>
        <option value="startup">🚀 起業・フリーランス</option>
      </select>

      <select
        value={budget}
        onChange={(e) => onChange("budget", e.target.value)}
        className="text-sm border border-gray-200 rounded-xl px-4 py-2 bg-white text-gray-700 focus:outline-none focus:border-indigo-400"
      >
        <option value="">💰 すべての予算</option>
        <option value="low">〜15万円</option>
        <option value="mid">15〜25万円</option>
        <option value="high">25〜40万円</option>
        <option value="very_high">40万円以上</option>
      </select>

      <select
        value={language}
        onChange={(e) => onChange("language", e.target.value)}
        className="text-sm border border-gray-200 rounded-xl px-4 py-2 bg-white text-gray-700 focus:outline-none focus:border-indigo-400"
      >
        <option value="">🗣️ すべての言語環境</option>
        <option value="english_only">英語のみ</option>
        <option value="english_plus">英語＋現地語</option>
        <option value="local_language">現地語を学びたい</option>
        <option value="japanese_community">日本人コミュニティ</option>
      </select>

      <select
        value={climate}
        onChange={(e) => onChange("climate", e.target.value)}
        className="text-sm border border-gray-200 rounded-xl px-4 py-2 bg-white text-gray-700 focus:outline-none focus:border-indigo-400"
      >
        <option value="">🌤️ すべての気候</option>
        <option value="hot">暑いのが好き</option>
        <option value="four_seasons">四季がある</option>
        <option value="cool">涼しい・寒い</option>
      </select>
    </div>
  );
}
