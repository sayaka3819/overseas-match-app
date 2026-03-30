"use client";

import type { CityRow } from "@/lib/supabase";
import { PURPOSE_LABEL, type RoleModel } from "@/lib/rolemodels";

type Props = {
  cities: Pick<CityRow, "slug" | "name_ja" | "emoji">[];
  selectedSlug: string;
  selectedPurpose: string;
  onSlugChange: (v: string) => void;
  onPurposeChange: (v: string) => void;
};

const PURPOSES = Object.keys(PURPOSE_LABEL) as RoleModel["purpose"][];

export default function RoleModelFilter({
  cities,
  selectedSlug,
  selectedPurpose,
  onSlugChange,
  onPurposeChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <select
        value={selectedSlug}
        onChange={(e) => onSlugChange(e.target.value)}
        className="text-sm border border-gray-200 rounded-xl px-4 py-2 bg-white text-gray-700 focus:outline-none focus:border-indigo-400"
      >
        <option value="">🌍 すべての国</option>
        {cities.map((c) => (
          <option key={c.slug} value={c.slug}>
            {c.emoji} {c.name_ja}
          </option>
        ))}
      </select>

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
