import { Suspense } from "react";
import ResultClient from "./ResultClient";

export default function ResultPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4 animate-bounce">🌍</div>
          <p className="text-gray-600 font-medium">読み込み中...</p>
        </div>
      </div>
    }>
      <ResultClient />
    </Suspense>
  );
}
