"use client";

import { useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { calculateScores, type Answers } from "@/lib/scoring";
import { COUNTRY_INFO, COUNTRY_SLUG } from "@/lib/data";
import { generateDiagnosis } from "@/lib/diagnosis";
import { supabase } from "@/lib/supabase";

export default function Result({ answers }: { answers: Answers }) {
  const router = useRouter();

  const { scores, type, reason } = useMemo(() => {
    const scores = calculateScores(answers);
    const top1 = scores[0];
    const { type, reason } = generateDiagnosis(answers, top1.country);
    return { scores, type, reason };
  }, [answers]);

  useEffect(() => {
    const sessionId = crypto.randomUUID();
    const scoresObj = Object.fromEntries(scores.map((s) => [s.country, s.score]));
    supabase.from("responses").insert({
      session_id: sessionId,
      answers,
      scores: scoresObj,
      top_country_slug: COUNTRY_SLUG[scores[0].country],
      completed: true,
      ua: navigator.userAgent,
    }).then(({ error }) => {
      if (error) console.error("Supabase insert error:", error);
    });
  }, []);

  const top1 = scores[0];
  const rest = scores.slice(1, 5);
  const countryInfo = COUNTRY_INFO[top1.country];
  const medalEmoji = ["🥇", "🥈", "🥉", "4️⃣", "5️⃣"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-orange-50 py-10 px-4">
      <div className="max-w-xl mx-auto">
        {/* ヘッダー */}
        <div className="text-center mb-8">
          <p className="text-indigo-500 font-semibold text-sm mb-1">診断結果</p>
          <h1 className="text-2xl font-bold text-gray-800">あなたのタイプ</h1>
          <div className="mt-3 inline-block bg-gradient-to-r from-indigo-500 to-orange-400 text-white px-6 py-2 rounded-full font-bold text-lg shadow-md">
            {type}
          </div>
        </div>

        {/* 1位カード */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🏆</span>
            <div>
              <p className="text-xs text-gray-400 font-medium">第1位</p>
              <h2 className="text-2xl font-bold text-gray-800">
                {countryInfo.emoji} {top1.country}
              </h2>
            </div>
            <div className="ml-auto text-right">
              <p className="text-3xl font-black text-indigo-600">{top1.matchPercent}%</p>
              <p className="text-xs text-gray-400">マッチ度</p>
            </div>
          </div>

          {/* マッチ度バー */}
          <div className="w-full bg-gray-100 rounded-full h-2 mb-5">
            <div
              className="bg-gradient-to-r from-indigo-500 to-orange-400 h-2 rounded-full"
              style={{ width: `${top1.matchPercent}%` }}
            />
          </div>

          {/* なぜ合うのか */}
          <div className="bg-indigo-50 rounded-2xl p-4 mb-4">
            <p className="text-xs text-indigo-500 font-semibold mb-1">なぜあなたに合うの？</p>
            <p className="text-sm text-gray-700 leading-relaxed">{reason}</p>
          </div>

          {/* 基本情報 */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-2xl p-3">
              <p className="text-xs text-gray-400 mb-1">🗣️ 言語</p>
              <p className="text-sm font-medium text-gray-700">{countryInfo.language}</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-3">
              <p className="text-xs text-gray-400 mb-1">🌤️ 気候</p>
              <p className="text-sm font-medium text-gray-700">{countryInfo.climate}</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-3">
              <p className="text-xs text-gray-400 mb-1">💰 通貨</p>
              <p className="text-sm font-medium text-gray-700">{countryInfo.currency}</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-3">
              <p className="text-xs text-gray-400 mb-1">🏛️ 首都</p>
              <p className="text-sm font-medium text-gray-700">{countryInfo.capital}</p>
            </div>
          </div>
        </div>

        {/* 2〜5位 */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-4">
          <h3 className="text-sm font-bold text-gray-500 mb-4">その他の候補</h3>
          <div className="flex flex-col gap-3">
            {rest.map((item, i) => {
              const info = COUNTRY_INFO[item.country];
              return (
                <div key={item.country} className="flex items-center gap-3">
                  <span className="text-lg">{medalEmoji[i + 1]}</span>
                  <span className="text-lg">{info.emoji}</span>
                  <span className="font-medium text-gray-700 flex-1">{item.country}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-100 rounded-full h-1.5">
                      <div
                        className="bg-gradient-to-r from-indigo-400 to-orange-300 h-1.5 rounded-full"
                        style={{ width: `${item.matchPercent}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-indigo-600 w-10 text-right">
                      {item.matchPercent}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* シェア・やり直しボタン */}
        <div className="flex gap-3">
          <button
            onClick={() => alert("シェア機能はフェーズ2で対応予定です！")}
            className="flex-1 py-3 rounded-2xl border-2 border-indigo-400 text-indigo-600 font-bold text-sm hover:bg-indigo-50 transition-all"
          >
            🔗 シェアする
          </button>
          <button
            onClick={() => router.push("/quiz")}
            className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-orange-400 text-white font-bold text-sm hover:opacity-90 transition-all shadow-md"
          >
            🔄 もう一度診断
          </button>
        </div>
      </div>
    </div>
  );
}
