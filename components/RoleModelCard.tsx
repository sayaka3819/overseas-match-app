import type { RoleModelRow, CityRow } from "@/lib/supabase";
import { PURPOSE_LABEL } from "@/lib/rolemodels";

type Props = {
  model: RoleModelRow;
  city?: CityRow;
};

export default function RoleModelCard({ model, city }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-orange-300 flex items-center justify-center text-white font-bold text-sm">
          {model.name[0]}
        </div>
        <div>
          <p className="font-bold text-gray-800">{model.name}（{model.age}歳）</p>
          <p className="text-xs text-gray-500">{model.occupation}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="text-xs bg-indigo-50 text-indigo-600 font-medium px-3 py-1 rounded-full">
          {city?.emoji} {city?.name_ja ?? model.country_slug}
        </span>
        <span className="text-xs bg-orange-50 text-orange-600 font-medium px-3 py-1 rounded-full">
          {PURPOSE_LABEL[model.purpose]}
        </span>
        <span className="text-xs bg-gray-100 text-gray-500 font-medium px-3 py-1 rounded-full">
          📅 在住{model.duration}
        </span>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed border-l-2 border-indigo-200 pl-3 italic">
        "{model.comment}"
      </p>
    </div>
  );
}
