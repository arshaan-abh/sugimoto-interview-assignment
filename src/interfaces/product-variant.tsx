import ImageWithAlt from "./image-with-alt";

export default interface ProductVariant extends Variant {
  title: string;
  description: string;
  price: number;
  images: ImageWithAlt[];
}

export interface Variant {
  size: string;
  color: string;
}
