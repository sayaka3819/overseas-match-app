import { supabase, type CityRow, type RoleModelRow } from "@/lib/supabase";
import RoleModelsClient from "./RoleModelsClient";

export default async function RoleModelsPage() {
  const [{ data: roleModels }, { data: cities }] = await Promise.all([
    supabase.from("role_models").select("*").eq("is_active", true).order("id"),
    supabase.from("cities").select("slug, name_ja, emoji").eq("is_active", true),
  ]);

  const citiesBySlug = Object.fromEntries(
    (cities ?? []).map((c) => [c.slug, c])
  );

  return (
    <RoleModelsClient
      roleModels={(roleModels ?? []) as RoleModelRow[]}
      citiesBySlug={citiesBySlug as Record<string, CityRow>}
    />
  );
}
