import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { calculateScores, type Answers } from "@/lib/scoring";
import { COUNTRY_INFO } from "@/lib/data";

const client = new Anthropic();

export async function POST(req: NextRequest) {
  const { answers } = await req.json() as { answers: Answers };

  const scores = calculateScores(answers);
  const top5 = scores.slice(0, 5);
  const top1 = top5[0];
  const countryInfo = COUNTRY_INFO[top1.country];

  const prompt = `
あなたは海外移住のプロフェッショナルアドバイザーです。
ユーザーの診断結果をもとに、パーソナライズされた診断レポートを日本語で作成してください。

【ユーザーの回答】
- 目的: ${answers.purpose}
- 月額予算: ${answers.budget}
- 滞在期間: ${answers.duration}
- 気候の好み: ${answers.climate}
- 言語環境: ${answers.language}
- 環境の好み: ${answers.environment}
- 治安の重視度: ${answers.safety}
- アクティビティ: ${answers.activities.join(", ")}
- 食の文化: ${answers.food}
- 最重視すること: ${answers.priority}

【診断結果1位】
国: ${top1.country}
マッチ度: ${top1.matchPercent}%

以下の2つをJSON形式で返してください：

1. "type": ユーザーの価値観・ライフスタイルを表す診断タイプ名（例：「自由を求めるクリエイター」「アジア文化に魅せられた冒険家」など、15文字以内で個性的に）

2. "reason": ${top1.country}がこのユーザーにぴったりな理由（3〜4文、具体的でワクワクする内容で。ユーザーの回答を反映させて）

JSONのみ返してください。余計なテキストは不要です。
例: {"type": "自由を求めるクリエイター", "reason": "..."}
`;

  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 512,
    messages: [{ role: "user", content: prompt }],
  });

  const text = message.content[0].type === "text" ? message.content[0].text : "";
  const parsed = JSON.parse(text);

  return NextResponse.json({
    scores: top5,
    type: parsed.type,
    reason: parsed.reason,
    topCountry: top1.country,
    countryInfo,
  });
}
