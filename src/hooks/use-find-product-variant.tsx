import { useMemo } from "react";
import { Variant } from "@/interfaces/product-variant";
import productVariants from "@/consts/product-variants";

const useFoundProductVariant = (variant: Variant) => {
  return useMemo(
    () =>
      productVariants.find(
        (foundVariant) =>
          foundVariant.size === variant.size &&
          foundVariant.color === variant.color
      ),
    [variant]
  );
};

export default useFoundProductVariant;
