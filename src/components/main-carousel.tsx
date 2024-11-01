"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import { ProductVariantContext } from "@/providers/product-variant-provider";
import { CarouselContext } from "@/providers/carousel-provider";
import { useContext, useEffect, useState } from "react";
import useFoundProductVariant from "@/hooks/use-find-product-variant";

const MainCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();

  const { variant } = useContext(ProductVariantContext);

  const { activeIndex, setActiveIndex } = useContext(CarouselContext);

  const foundProductVariant = useFoundProductVariant(variant);

  useEffect(() => {
    if (api) api.on("select", () => setActiveIndex(api.selectedScrollSnap()));
  }, [api, setActiveIndex]);

  useEffect(() => {
    if (api) api.scrollTo(activeIndex);
  }, [activeIndex, api]);

  return (
    <Carousel
      className="rounded-xl overflow-hidden bg-contain bg-center before:content-[''] before:backdrop-blur-3xl before:rounded-xl before:absolute before:inset-0 before:bg-secondary/50 h-full [&>*]:h-full"
      setApi={setApi}
      style={{
        backgroundImage: `url(${foundProductVariant?.images[0].src})`,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent className="-ml-0 h-full">
        {foundProductVariant?.images.map((image, index) => {
          return (
            <CarouselItem key={index} className="pl-0">
              {/* I used the index as a key, even though I shouldn't have.
              However, I had a reason for doing so:
              I didn’t want changing the variant to reset the carousel. */}
              <Image
                src={image}
                alt={image.alt}
                width={1024}
                height={1024}
                className="object-cover object-center h-full"
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default MainCarousel;
