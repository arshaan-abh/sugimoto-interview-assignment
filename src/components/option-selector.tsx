"use client";

import { useContext, useMemo } from "react";
import { ProductVariantContext } from "@/providers/product-variant-provider";
import Rating from "./ui/rating";
import useFoundProductVariant from "@/hooks/use-find-product-variant";
import useAveraging from "@/hooks/use-averaging";

const OptionSelector = () => {
  const { variant } = useContext(ProductVariantContext);

  const foundProductVariant = useFoundProductVariant(variant);

  const foundRatings = useMemo(
    () => foundProductVariant?.reviews.map((review) => review.rating) ?? [],
    [foundProductVariant?.reviews]
  );

  const averageRating = useAveraging(foundRatings);

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl mb-2">{foundProductVariant?.title}</h2>

      <Rating
        rating={averageRating}
        ratingsLength={foundRatings.length}
        onRate={() => null}
      />
    </div>
  );
};

export default OptionSelector;
