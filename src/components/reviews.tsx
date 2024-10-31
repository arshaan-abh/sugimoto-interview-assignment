import Rating from "./ui/rating";
import formatDate from "@/lib/format-date";
import { supabase } from "@/lib/supabase/client";
import { Skeleton } from "./ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const Reviews = async () => {
  const { data } = await supabase.from("Reviews").select("*");

  return (
    <div className="flex flex-col gap-5">
      {data?.map((review) => (
        <Card key={review.id}>
          <CardHeader>
            <CardTitle>Review #{review.id}</CardTitle>
            <CardDescription>
              Reviewed on {formatDate(review.created_at)}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>{review.comment}</p>
          </CardContent>
          <CardFooter>
            <Rating rating={review.rating} disabled />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Reviews;

export const ReviewsSkeleton = () => {
  return (
    <div className="flex flex-col gap-5">
      {[...Array(2)].map((_, index) => (
        <Skeleton
          key={index}
          className="h-44 rounded-xl bg-white/75 shadow border"
        />
      ))}
    </div>
  );
};
