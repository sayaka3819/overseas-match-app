"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { QUESTIONS } from "@/lib/data";
import type { Answers } from "@/lib/scoring";

const INITIAL_ANSWERS: Answers = {
  purpose: "",
  budget: "",
  duration: "",
  climate: "",
  language: "",
  environment: "",
  safety: "",
  activities: [],
  food: "",
  priority: "",
};

export default function Quiz() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>(INITIAL_ANSWERS);

  const question = QUESTIONS[currentIndex];
  const isMultiple = question.multiple;
  const currentAnswer = answers[question.key as keyof Answers];
  const progress = ((currentIndex + 1) / QUESTIONS.length) * 100;

  const isAnswered = isMultiple
    ? (currentAnswer as string[]).length > 0
    : currentAnswer !== "";

  function handleSingleSelect(value: string) {
    setAnswers((prev) => ({ ...prev, [question.key]: value }));
  }

  function handleMultipleSelect(value: string) {
    const current = answers.activities;
    const maxSelect = (question as { maxSelect?: number }).maxSelect ?? 2;

    if (current.includes(value)) {
      setAnswers((prev) => ({
        ...prev,
        activities: current.filter((v) => v !== value),
      }));
    } else if (current.length < maxSelect) {
      setAnswers((prev) => ({
        ...prev,
        activities: [...current, value],
      }));
    }
  }

  function handleNext() {
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      // 全問回答完了 → 結果ページへ
      const params = new URLSearchParams({
        answers: JSON.stringify(answers),
      });
      router.push(`/result?${params.toString()}`);
    }
  }

  function handleBack() {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-orange-50 flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        {/* 進捗バー */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Q{currentIndex + 1} / {QUESTIONS.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-indigo-500 to-orange-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* 質問カード */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-2 leading-snug">
            {question.question}
          </h2>
          {isMultiple && (
            <p className="text-sm text-indigo-500 mb-6">
              最大{(question as { maxSelect?: number }).maxSelect ?? 2}つまで選択できます
            </p>
          )}
          {!isMultiple && <div className="mb-6" />}

          {/* 選択肢 */}
          <div className="flex flex-col gap-3">
            {question.options.map((option) => {
              const isSelected = isMultiple
                ? answers.activities.includes(option.value)
                : currentAnswer === option.value;

              return (
                <button
                  key={option.value}
                  onClick={() =>
                    isMultiple
                      ? handleMultipleSelect(option.value)
                      : handleSingleSelect(option.value)
                  }
                  className={`w-full text-left px-5 py-4 rounded-2xl border-2 text-sm font-medium transition-all duration-200 ${
                    isSelected
                      ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                      : "border-gray-200 bg-white text-gray-700 hover:border-indigo-300 hover:bg-indigo-50"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>

          {/* ナビゲーション */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handleBack}
              disabled={currentIndex === 0}
              className="px-6 py-3 rounded-2xl text-sm font-medium text-gray-500 hover:bg-gray-100 disabled:opacity-30 transition-all"
            >
              ← 戻る
            </button>
            <button
              onClick={handleNext}
              disabled={!isAnswered}
              className="px-8 py-3 rounded-2xl text-sm font-bold bg-gradient-to-r from-indigo-500 to-orange-400 text-white disabled:opacity-40 hover:opacity-90 transition-all shadow-md"
            >
              {currentIndex === QUESTIONS.length - 1 ? "結果を見る 🎉" : "次へ →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
