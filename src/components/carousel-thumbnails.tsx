"use client";

import { useContext } from "react";
import { ProductVariantContext } from "@/providers/product-variant-provider";
import { CarouselContext } from "@/providers/carousel-provider";
import { cn } from "@/lib/utils";
import Image from "next/image";
import useFoundProductVariant from "@/hooks/use-find-product-variant";

const CarouselThumbnails = () => {
  const { variant } = useContext(ProductVariantContext);

  const { activeIndex, setActiveIndex } = useContext(CarouselContext);

  const foundProductVariant = useFoundProductVariant(variant);

  return foundProductVariant?.images.map((image, index) => (
    <button
      className="h-full"
      key={image.src}
      onClick={() => setActiveIndex(index)}
    >
      <Image
        src={image}
        alt={image.alt}
        width={256}
        height={256}
        className={cn(
          "rounded-xl object-cover object-center h-full bg-secondary/50 transition-shadow",
          index === activeIndex && "ring-1 ring-offset-2 ring-stone-400"
        )}
      />
    </button>
  ));
};

export default CarouselThumbnails;
