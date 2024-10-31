"use server";

import { supabase } from "@/lib/supabase/client";
import { Database } from "../../database.types";

export async function addReview(
  reviewData: Database["public"]["Tables"]["Reviews"]["Insert"]
) {
  const { error } = await supabase.from("Reviews").insert([reviewData]);

  return error;
}
