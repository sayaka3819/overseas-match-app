import { COUNTRIES, SCORES, PRIORITY_MAP, type Country } from "./data";

export type Answers = {
  purpose: string;
  budget: string;
  duration: string;
  climate: string;
  language: string;
  environment: string;
  safety: string;
  activities: string[]; // 最大2つ
  food: string;
  priority: string;
};

export type CountryScore = {
  country: Country;
  score: number;
  matchPercent: number;
};

export function calculateScores(answers: Answers): CountryScore[] {
  const priorityKey = PRIORITY_MAP[answers.priority];
  const WEIGHT_MULTIPLIER = 1.5;

  // 各質問の最大スコア（満点の計算用）
  const BASE_MAX = 3; // 各質問の最大点
  const ACTIVITY_MAX = BASE_MAX * 2 + BASE_MAX * 1; // 1位×2 + 2位×1 = 9

  const results = COUNTRIES.map((country) => {
    let total = 0;
    let maxTotal = 0;

    const scoreKeys = ["purpose", "budget", "duration", "climate", "language", "environment", "safety", "food"];

    for (const key of scoreKeys) {
      const answerValue = answers[key as keyof Answers] as string;
      const rawScore = SCORES[key]?.[country]?.[answerValue] ?? 0;
      const isWeighted = key === priorityKey;
      const multiplier = isWeighted ? WEIGHT_MULTIPLIER : 1;

      total += rawScore * multiplier;
      maxTotal += BASE_MAX * multiplier;
    }

    // アクティビティ（最大2つ選択、1位×2点、2位×1点）
    const [first, second] = answers.activities;
    const activityScore1 = first ? (SCORES["activities"]?.[country]?.[first] ?? 0) * 2 : 0;
    const activityScore2 = second ? (SCORES["activities"]?.[country]?.[second] ?? 0) * 1 : 0;
    const activityTotal = activityScore1 + activityScore2;

    const isActivityWeighted = priorityKey === "activities";
    const activityMultiplier = isActivityWeighted ? WEIGHT_MULTIPLIER : 1;
    total += activityTotal * activityMultiplier;
    maxTotal += ACTIVITY_MAX * activityMultiplier;

    const matchPercent = Math.round((total / maxTotal) * 100);

    return { country, score: total, matchPercent };
  });

  // スコア降順でソート
  return results.sort((a, b) => b.score - a.score);
}
