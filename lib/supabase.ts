import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type CityRow = {
  id: string;
  slug: string;
  name_ja: string;
  emoji: string;
  currency: string;
  capital: string;
  lang_official: string;
  climate_temp: string;
  cost_rent: string;
  cost_food: string;
  cost_transport: string;
  cost_total: string;
  visa_working_holiday: boolean;
  visa_work_ok: boolean;
  visa_nomad: boolean;
  visa_wh_desc: string;
  visa_work_desc: string;
  visa_study_desc: string;
  recommended_cities: { name: string; description: string }[];
  tags: string[];
  action_steps: string[];
  accent: string;
  bg: string;
  tagline: string;
  description: string;
  is_active: boolean;
};

export type RoleModelRow = {
  id: string;
  name: string;
  age: number;
  occupation: string;
  country_slug: string;
  purpose: "study" | "working_holiday" | "work" | "startup";
  duration: string;
  comment: string;
};
