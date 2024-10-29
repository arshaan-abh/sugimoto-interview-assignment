"use client";

import { useContext } from "react";
import { ProductVariantContext } from "@/providers/product-variant-provider";
import Image from "next/image";
import findProductVariant from "@/lib/find-product-variant";

const CarouselThumbnails = () => {
  const { variant } = useContext(ProductVariantContext);

  return findProductVariant(variant)?.images.map((image) => (
    <Image
      key={image.src}
      src={image}
      alt={image.alt}
      width={256}
      height={256}
      className="rounded-xl object-cover object-center"
    />
  ));
};

export default CarouselThumbnails;
