import productVariants from "@/consts/product-variants";

export const getUniqueSizes = () => [
  ...new Set(productVariants.map((variant) => variant.size)),
];

export const getUniqueColors = () => [
  ...new Set(productVariants.map((variant) => variant.color)),
];
