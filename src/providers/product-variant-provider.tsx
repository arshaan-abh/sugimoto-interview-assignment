"use client";

import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { Variant } from "@/interfaces/product-variant";
import productVariants from "@/consts/product-variants";

interface ProductVariantContextType {
  variant: Variant;
  setVariant: Dispatch<SetStateAction<Variant>>;
}

const defaultProductVariantContext: ProductVariantContextType = {
  variant: productVariants[0],
  setVariant: () => null,
};

export const ProductVariantContext = createContext<ProductVariantContextType>(
  defaultProductVariantContext
);

interface ProductVariantProviderProps {
  children: ReactNode;
}

const ProductVariantProvider: FC<ProductVariantProviderProps> = ({
  children,
}) => {
  const [variant, setVariant] = useState<Variant>(
    defaultProductVariantContext.variant
  );

  return (
    <ProductVariantContext.Provider value={{ variant, setVariant }}>
      {children}
    </ProductVariantContext.Provider>
  );
};

export default ProductVariantProvider;
