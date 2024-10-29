import Image from "next/image";
import MainCarousel from "@/components/main-carousel";
import images from "@/consts/images";

export default function ProductDetail() {
  return (
    <main className="flex flex-col">
      <section className="flex *:basis-1/2">
        <div className="grid grid-cols-6 grid-rows-5 gap-5">
          {images.map((image) => (
            <Image
              key={image.src}
              src={image}
              alt={image.alt}
              width={256}
              height={256}
              className="rounded-xl object-cover object-center"
            />
          ))}

          <div className="col-span-5 row-span-5 col-start-2 row-start-1">
            <MainCarousel />
          </div>
        </div>

        <div></div>
      </section>
    </main>
  );
}
