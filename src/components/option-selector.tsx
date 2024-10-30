"use client";

import { useContext } from "react";
import { ProductVariantContext } from "@/providers/product-variant-provider";
import { getUniqueColors, getUniqueSizes } from "@/lib/get-uniqe-variants";
import { cn } from "@/lib/utils";
import useFoundProductVariant from "@/hooks/use-find-product-variant";

const OptionSelector = () => {
  const { variant, setVariant } = useContext(ProductVariantContext);

  const foundProductVariant = useFoundProductVariant(variant);

  // const foundRatings = useMemo(
  //   () => foundProductVariant?.reviews.map((review) => review.rating) ?? [],
  //   [foundProductVariant?.reviews]
  // );

  // const averageRating = useAveraging(foundRatings);

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl mb-2">{foundProductVariant?.title}</h2>

      {/* <Rating
        rating={averageRating}
        ratingsLength={foundRatings.length}
        onRate={() => null}
        className="mb-2"
      /> */}

      <div className="text-2xl text-primary font-bold mb-2">
        ${foundProductVariant?.price}
      </div>

      <div className="text-xl font-semibold mb-1">Colors</div>
      <div className="flex gap-2 items-center mb-2">
        {getUniqueColors().map((color) => (
          <button
            key={color}
            className={cn(
              "w-8 h-8 rounded-full transition-shadow",
              color === variant.color && "ring-1 ring-offset-2 ring-stone-400"
            )}
            style={{ backgroundColor: color }}
            onClick={() => setVariant({ color, size: variant.size })}
          />
        ))}
      </div>

      <div className="text-xl font-semibold mb-1">Sizes</div>
      <div className="flex gap-2 items-center mb-2">
        {getUniqueSizes().map((size) => (
          <button
            key={size}
            className={cn(
              "w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center transition-shadow",
              variant.size === size && "ring-1 ring-offset-2 ring-stone-400"
            )}
            onClick={() => setVariant({ size, color: variant.color })}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OptionSelector;
