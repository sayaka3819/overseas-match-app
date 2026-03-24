import type { Answers } from "./scoring";

// 回答からシンプルな診断タイプと理由を生成（フェーズ1用・AI不使用）
export function generateDiagnosis(answers: Answers, topCountry: string): { type: string; reason: string } {
  const typeMap: Record<string, string> = {
    study: "知識を求める探求者",
    working_holiday: "自由を駆けるノマド",
    work: "グローバルキャリア志向",
    startup: "世界で挑む起業家",
  };

  const type = typeMap[answers.purpose] ?? "世界を旅する冒険家";

  const purposeText: Record<string, string> = {
    study: "留学・進学",
    working_holiday: "ワーキングホリデー",
    work: "転職・就職",
    startup: "起業・フリーランス",
  };

  const climateText: Record<string, string> = {
    hot: "暖かい気候",
    four_seasons: "四季のある環境",
    cool: "涼しい気候",
    any: "気候を問わない柔軟さ",
  };

  const priorityText: Record<string, string> = {
    budget: "コストパフォーマンス",
    climate: "気候・自然環境",
    language: "言語環境",
    environment: "都市と自然のバランス",
    safety: "安全・治安",
    activities: "アクティビティ・ライフスタイル",
    food: "食文化",
  };

  const reason = `${topCountry}は、${purposeText[answers.purpose] ?? "海外移住"}を目指すあなたに最適な環境が整っています。${climateText[answers.climate] ?? ""}を好むあなたにとって、${topCountry}の気候は理想的です。特に${priorityText[answers.priority] ?? "総合的なバランス"}を重視するあなたの価値観と高くマッチしており、新しいステージへの第一歩を踏み出すのに絶好の場所です。`;

  return { type, reason };
}
