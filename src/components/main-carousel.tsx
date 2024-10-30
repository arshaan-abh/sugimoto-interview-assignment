"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { ProductVariantContext } from "@/providers/product-variant-provider";
import { useContext } from "react";
import useFoundProductVariant from "@/hooks/use-find-product-variant";

const MainCarousel = () => {
  const { variant } = useContext(ProductVariantContext);

  const foundProductVariant = useFoundProductVariant(variant);

  return (
    <Carousel
      className="rounded-xl overflow-hidden bg-contain bg-center before:content-[''] before:backdrop-blur-3xl before:absolute before:inset-0 before:bg-white/50"
      style={{
        backgroundImage: `url(${foundProductVariant?.images[0].src})`,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent className="-ml-0">
        {foundProductVariant?.images.map((image) => {
          return (
            <CarouselItem key={image.src} className="pl-0">
              <Image
                src={image}
                alt={image.alt}
                width={1024}
                height={1024}
                className="object-cover object-center"
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default MainCarousel;
