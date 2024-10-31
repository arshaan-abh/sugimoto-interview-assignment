"use client";

import { useContext } from "react";
import { ProductVariantContext } from "@/providers/product-variant-provider";
import Image from "next/image";
import useFoundProductVariant from "@/hooks/use-find-product-variant";

const CarouselThumbnails = () => {
  const { variant } = useContext(ProductVariantContext);

  const foundProductVariant = useFoundProductVariant(variant);

  return foundProductVariant?.images.map((image) => (
    <Image
      key={image.src}
      src={image}
      alt={image.alt}
      width={256}
      height={256}
      className="rounded-xl object-cover object-center h-full bg-secondary/50"
    />
  ));
};

export default CarouselThumbnails;
