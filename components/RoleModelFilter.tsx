"use client";

import { COUNTRIES, COUNTRY_INFO } from "@/lib/data";
import { PURPOSE_LABEL, type RoleModel } from "@/lib/rolemodels";

type Props = {
  selectedCountry: string;
  selectedPurpose: string;
  onCountryChange: (v: string) => void;
  onPurposeChange: (v: string) => void;
};

const PURPOSES = Object.keys(PURPOSE_LABEL) as RoleModel["purpose"][];

export default function RoleModelFilter({
  selectedCountry,
  selectedPurpose,
  onCountryChange,
  onPurposeChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {/* 国フィルター */}
      <select
        value={selectedCountry}
        onChange={(e) => onCountryChange(e.target.value)}
        className="text-sm border border-gray-200 rounded-xl px-4 py-2 bg-white text-gray-700 focus:outline-none focus:border-indigo-400"
      >
        <option value="">🌍 すべての国</option>
        {COUNTRIES.map((c) => (
          <option key={c} value={c}>
            {COUNTRY_INFO[c].emoji} {c}
          </option>
        ))}
      </select>

      {/* 目的フィルター */}
      <select
        value={selectedPurpose}
        onChange={(e) => onPurposeChange(e.target.value)}
        className="text-sm border border-gray-200 rounded-xl px-4 py-2 bg-white text-gray-700 focus:outline-none focus:border-indigo-400"
      >
        <option value="">✈️ すべての目的</option>
        {PURPOSES.map((p) => (
          <option key={p} value={p}>
            {PURPOSE_LABEL[p]}
          </option>
        ))}
      </select>
    </div>
  );
}
