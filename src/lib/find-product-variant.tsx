import productVariants from "@/consts/product-variants";
import { Variant } from "@/interfaces/product-variant";

export default function findProductVariant(variant: Variant) {
  return productVariants.find(
    (foundVariant) =>
      foundVariant.size === variant.size && foundVariant.color === variant.color
  );
}
