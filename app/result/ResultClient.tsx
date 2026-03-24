"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import Result from "@/components/Result";
import type { Answers } from "@/lib/scoring";

export default function ResultClient() {
  const searchParams = useSearchParams();

  const answers = useMemo<Answers | null>(() => {
    const raw = searchParams.get("answers");
    if (!raw) return null;
    try {
      return JSON.parse(raw) as Answers;
    } catch {
      return null;
    }
  }, [searchParams]);

  if (!answers) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">診断データが見つかりませんでした。</p>
      </div>
    );
  }

  return <Result answers={answers} />;
}
