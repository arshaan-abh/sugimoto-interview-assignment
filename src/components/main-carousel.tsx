import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import images from "@/consts/images";

const MainCarousel = () => {
  return (
    <Carousel
      className="rounded-xl overflow-hidden bg-contain bg-center before:content-[''] before:backdrop-blur-3xl before:absolute before:inset-0 before:bg-white/50"
      style={{ backgroundImage: `url(${images[0].src})` }}
    >
      <CarouselContent className="-ml-0">
        {images.map((image) => {
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
