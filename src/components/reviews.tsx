import { supabase } from "@/lib/supabase/client";

const Reviews = async () => {
  const { data } = await supabase.from("Reviews").select("*");

  return JSON.stringify(data);
};

export default Reviews;
