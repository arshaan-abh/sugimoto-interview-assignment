import { Suspense } from "react";
import ProductVariantProvider from "@/providers/product-variant-provider";
import CarouselThumbnails from "@/components/carousel-thumbnails";
import MainCarousel from "@/components/main-carousel";
import OptionSelector from "@/components/option-selector";
import Reviews from "@/components/reviews";

export default function ProductDetail() {
  return (
    <main className="flex flex-col gap-16">
      <section className="flex *:basis-1/2 gap-8 xl:gap-16 flex-col md:flex-row">
        <ProductVariantProvider>
          <div className="grid grid-cols-6 grid-rows-5 gap-2 sm:gap-5">
            <CarouselThumbnails />

            <div className="col-span-5 row-span-5 col-start-2 row-start-1">
              <MainCarousel />
            </div>
          </div>

          <OptionSelector />
        </ProductVariantProvider>
      </section>

      <section>
        <Suspense fallback={<div>Loading...</div>}>
          <Reviews />
        </Suspense>
      </section>
    </main>
  );
}
