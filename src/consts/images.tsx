import { StaticImageData } from "next/image";
import image1 from "#/1.jpg";
import image2 from "#/2.jpg";
import image3 from "#/3.jpg";
import image4 from "#/4.jpg";
import image5 from "#/5.jpg";

interface ImageWithAlt extends StaticImageData {
  alt: string;
}

const images: ImageWithAlt[] = [
  { ...image1, alt: "image1" },
  { ...image2, alt: "image2" },
  { ...image3, alt: "image3" },
  { ...image4, alt: "image4" },
  { ...image5, alt: "image5" },
];

export default images;
