import { StaticImageData } from "next/image";

export default interface ImageWithAlt extends StaticImageData {
  alt: string;
}
