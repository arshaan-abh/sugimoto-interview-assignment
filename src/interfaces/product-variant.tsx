import ImageWithAlt from "./image-with-alt";
import Review from "./review";

export default interface ProductVariant extends Variant {
  title: string;
  description: string;
  price: number;
  images: ImageWithAlt[];
  reviews: Review[];
}

export interface Variant {
  size: string;
  color: string;
}
