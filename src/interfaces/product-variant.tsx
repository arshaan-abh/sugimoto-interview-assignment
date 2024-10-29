import ImageWithAlt from "./image-with-alt";
import Review from "./review";

export default interface ProductVariant {
  title: string;
  description: string;
  price: number;
  size: string;
  color: string;
  images: ImageWithAlt[];
  reviews: Review[];
}
