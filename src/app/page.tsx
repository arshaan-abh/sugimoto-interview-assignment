import ProductVariantProvider from "@/providers/product-variant-provider";
import CarouselThumbnails from "@/components/carousel-thumbnails";
import MainCarousel from "@/components/main-carousel";
import OptionSelector from "@/components/option-selector";

export default function ProductDetail() {
  return (
    <main className="flex flex-col">
      <section className="flex *:basis-1/2 gap-8 xl:gap-16 flex-col md:flex-row">
        <ProductVariantProvider>
          <div className="grid grid-cols-6 grid-rows-5 gap-5">
            <CarouselThumbnails />

            <div className="col-span-5 row-span-5 col-start-2 row-start-1">
              <MainCarousel />
            </div>
          </div>

          <OptionSelector />
        </ProductVariantProvider>
      </section>
    </main>
  );
}
