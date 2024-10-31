import { Suspense } from "react";
import ProductVariantProvider from "@/providers/product-variant-provider";
import Section from "@/components/ui/section";
import CarouselThumbnails from "@/components/carousel-thumbnails";
import MainCarousel from "@/components/main-carousel";
import OptionSelector from "@/components/option-selector";
import SubmitReview from "@/components/submit-review";
import Reviews, { ReviewsSkeleton } from "@/components/reviews";

export default function ProductDetail() {
  return (
    <main className="flex flex-col gap-16">
      <Section>
        <ProductVariantProvider>
          <div className="grid grid-cols-6 grid-rows-5 gap-2 sm:gap-5">
            <CarouselThumbnails />

            <div className="col-span-5 row-span-5 col-start-2 row-start-1">
              <MainCarousel />
            </div>
          </div>

          <OptionSelector />
        </ProductVariantProvider>
      </Section>

      <Section>
        <SubmitReview />

        <Suspense fallback={<ReviewsSkeleton />}>
          <Reviews />
        </Suspense>
      </Section>
    </main>
  );
}
