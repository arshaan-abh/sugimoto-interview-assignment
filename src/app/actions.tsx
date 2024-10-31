"use server";

import { supabase } from "@/lib/supabase/client";
import { Database } from "../../database.types";
import { revalidatePath } from "next/cache";

export async function addReview(
  reviewData: Database["public"]["Tables"]["Reviews"]["Insert"]
) {
  const { error } = await supabase.from("Reviews").insert([reviewData]);

  revalidatePath("/");

  return error;
}
