"use client";

import { useState } from "react";
import { COUNTRIES, type Country } from "@/lib/data";
import { SCORES } from "@/lib/data";
import CountryCard from "@/components/CountryCard";
import CountryFilter from "@/components/CountryFilter";

const SCORE_THRESHOLD = 2;

function filterCountries(filters: Record<string, string>): Country[] {
  return COUNTRIES.filter((country) => {
    for (const [key, value] of Object.entries(filters)) {
      if (!value) continue;
      const score = SCORES[key]?.[country]?.[value] ?? 0;
      if (score < SCORE_THRESHOLD) return false;
    }
    return true;
  });
}

export default function CountriesClient() {
  const [filters, setFilters] = useState({
    purpose: "",
    budget: "",
    language: "",
    climate: "",
  });

  function handleChange(key: string, value: string) {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }

  const filtered = filterCountries(filters);

  return (
    <div>
      <CountryFilter
        purpose={filters.purpose}
        budget={filters.budget}
        language={filters.language}
        climate={filters.climate}
        onChange={handleChange}
      />
      <p className="text-xs text-gray-400 mb-4">{filtered.length}カ国表示中</p>
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-4xl mb-3">🔍</p>
          <p>条件に合う国が見つかりませんでした。</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filtered.map((country) => (
            <CountryCard key={country} country={country} />
          ))}
        </div>
      )}
    </div>
  );
}
