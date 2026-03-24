"use client";

import { useState } from "react";
import Link from "next/link";
import { ROLE_MODELS } from "@/lib/rolemodels";
import RoleModelCard from "@/components/RoleModelCard";
import RoleModelFilter from "@/components/RoleModelFilter";

export default function RoleModelsClient() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedPurpose, setSelectedPurpose] = useState("");

  const filtered = ROLE_MODELS.filter((m) => {
    if (selectedCountry && m.country !== selectedCountry) return false;
    if (selectedPurpose && m.purpose !== selectedPurpose) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-orange-50">
      {/* ナビ */}
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
        {/* タイトル */}
        <div className="mb-8">
          <h1 className="text-3xl font-black text-gray-900 mb-2">
            🌏 ロールモデルを探す
          </h1>
          <p className="text-gray-500 text-sm">
            海外で活躍している人たちのリアルな声を参考にしよう。
          </p>
        </div>

        {/* フィルター */}
        <RoleModelFilter
          selectedCountry={selectedCountry}
          selectedPurpose={selectedPurpose}
          onCountryChange={setSelectedCountry}
          onPurposeChange={setSelectedPurpose}
        />

        {/* 件数 */}
        <p className="text-xs text-gray-400 mb-4">{filtered.length}件表示中</p>

        {/* カード一覧 */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-4xl mb-3">🔍</p>
            <p>該当するロールモデルが見つかりませんでした。</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filtered.map((model) => (
              <RoleModelCard key={model.id} model={model} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
