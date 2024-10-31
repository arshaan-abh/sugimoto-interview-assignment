import { supabase } from "@/lib/supabase/client";

const Reviews = async () => {
  const { data } = await supabase.from("Reviews").select("*");

  return <div>{JSON.stringify(data)}</div>;
};

export default Reviews;

export const ReviewsSkeleton = () => {
  return <div>ReviewsSkeleton</div>;
};
