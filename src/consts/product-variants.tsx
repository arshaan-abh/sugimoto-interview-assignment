import ProductVariant from "@/interfaces/product-variant";
import image1 from "#/1.jpg";
import image2 from "#/2.jpg";
import image3 from "#/3.jpg";
import image4 from "#/4.jpg";
import image5 from "#/5.jpg";
import image6 from "#/6.jpg";
import image7 from "#/7.jpg";
import image8 from "#/8.jpg";
import image9 from "#/9.jpg";
import image10 from "#/10.jpg";
import image11 from "#/11.jpg";
import image12 from "#/12.jpg";
import image13 from "#/13.jpg";
import image14 from "#/14.jpg";
import image15 from "#/15.jpg";

const productVariants: ProductVariant[] = [
  {
    title: "Classic T-Shirt",
    description: "Soft cotton t-shirt with a relaxed fit for everyday wear.",
    price: 19.99,
    size: "S",
    color: "Red",
    images: [
      { ...image1, alt: "Red Classic T-Shirt - Small" },
      { ...image2, alt: "Red Classic T-Shirt - Small" },
      { ...image3, alt: "Red Classic T-Shirt - Small" },
      { ...image4, alt: "Red Classic T-Shirt - Small" },
      { ...image5, alt: "Red Classic T-Shirt - Small" },
    ],
    reviews: [
      { rating: 4, text: "Comfortable and great quality!" },
      { rating: 5, text: "My favorite go-to shirt." },
    ],
  },
  {
    title: "Classic T-Shirt",
    description: "Soft cotton t-shirt with a relaxed fit for everyday wear.",
    price: 19.99,
    size: "M",
    color: "Red",
    images: [
      { ...image1, alt: "Red Classic T-Shirt - Medium" },
      { ...image2, alt: "Red Classic T-Shirt - Medium" },
      { ...image3, alt: "Red Classic T-Shirt - Medium" },
      { ...image4, alt: "Red Classic T-Shirt - Medium" },
      { ...image5, alt: "Red Classic T-Shirt - Medium" },
    ],
    reviews: [{ rating: 4, text: "Perfect fit and color." }],
  },
  {
    title: "Classic T-Shirt",
    description: "Soft cotton t-shirt with a relaxed fit for everyday wear.",
    price: 21.99,
    size: "L",
    color: "Red",
    images: [
      { ...image6, alt: "Red Classic T-Shirt - Large" },
      { ...image7, alt: "Red Classic T-Shirt - Large" },
      { ...image8, alt: "Red Classic T-Shirt - Large" },
      { ...image9, alt: "Red Classic T-Shirt - Large" },
      { ...image10, alt: "Red Classic T-Shirt - Large" },
    ],
    reviews: [{ rating: 5, text: "Great for casual wear." }],
  },
  {
    title: "Classic T-Shirt",
    description: "Soft cotton t-shirt with a relaxed fit for everyday wear.",
    price: 19.99,
    size: "S",
    color: "Blue",
    images: [
      { ...image11, alt: "Blue Classic T-Shirt - Small" },
      { ...image12, alt: "Blue Classic T-Shirt - Small" },
      { ...image13, alt: "Blue Classic T-Shirt - Small" },
      { ...image14, alt: "Blue Classic T-Shirt - Small" },
      { ...image15, alt: "Blue Classic T-Shirt - Small" },
    ],
    reviews: [
      { rating: 3, text: "Good quality, but the color was slightly off." },
    ],
  },
  {
    title: "Classic T-Shirt",
    description: "Soft cotton t-shirt with a relaxed fit for everyday wear.",
    price: 21.99,
    size: "M",
    color: "Blue",
    images: [
      { ...image11, alt: "Blue Classic T-Shirt - Medium" },
      { ...image12, alt: "Blue Classic T-Shirt - Medium" },
      { ...image13, alt: "Blue Classic T-Shirt - Medium" },
      { ...image14, alt: "Blue Classic T-Shirt - Medium" },
      { ...image15, alt: "Blue Classic T-Shirt - Medium" },
    ],
    reviews: [
      { rating: 4, text: "Love the fit and the fabric!" },
      { rating: 2, text: "A bit too large for a medium size." },
    ],
  },
  {
    title: "Premium Hoodie",
    description: "Warm and cozy hoodie, perfect for chilly weather.",
    price: 39.99,
    size: "M",
    color: "Black",
    images: [
      { ...image3, alt: "Black Premium Hoodie - Medium" },
      { ...image4, alt: "Black Premium Hoodie - Medium" },
      { ...image5, alt: "Black Premium Hoodie - Medium" },
      { ...image6, alt: "Black Premium Hoodie - Medium" },
      { ...image7, alt: "Black Premium Hoodie - Medium" },
    ],
    reviews: [
      { rating: 5, text: "Super comfortable, feels premium!" },
      { rating: 4, text: "Nice hoodie but a bit pricey." },
    ],
  },
  {
    title: "Premium Hoodie",
    description: "Warm and cozy hoodie, perfect for chilly weather.",
    price: 42.99,
    size: "L",
    color: "Gray",
    images: [
      { ...image8, alt: "Gray Premium Hoodie - Large" },
      { ...image9, alt: "Gray Premium Hoodie - Large" },
      { ...image10, alt: "Gray Premium Hoodie - Large" },
      { ...image11, alt: "Gray Premium Hoodie - Large" },
      { ...image12, alt: "Gray Premium Hoodie - Large" },
    ],
    reviews: [
      { rating: 4, text: "Great for layering." },
      { rating: 3, text: "Runs slightly large." },
    ],
  },
  {
    title: "Basic Tank Top",
    description: "Lightweight tank top for warm days or workouts.",
    price: 12.99,
    size: "S",
    color: "Green",
    images: [
      { ...image13, alt: "Green Basic Tank Top - Small" },
      { ...image14, alt: "Green Basic Tank Top - Small" },
      { ...image15, alt: "Green Basic Tank Top - Small" },
      { ...image1, alt: "Green Basic Tank Top - Small" },
      { ...image2, alt: "Green Basic Tank Top - Small" },
    ],
    reviews: [
      { rating: 5, text: "Perfect for summer!" },
      { rating: 4, text: "Light and breathable." },
    ],
  },
  {
    title: "Basic Tank Top",
    description: "Lightweight tank top for warm days or workouts.",
    price: 15.99,
    size: "M",
    color: "Green",
    images: [
      { ...image3, alt: "Green Basic Tank Top - Medium" },
      { ...image4, alt: "Green Basic Tank Top - Medium" },
      { ...image5, alt: "Green Basic Tank Top - Medium" },
      { ...image6, alt: "Green Basic Tank Top - Medium" },
      { ...image7, alt: "Green Basic Tank Top - Medium" },
    ],
    reviews: [{ rating: 3, text: "Good quality but slightly transparent." }],
  },
];

export default productVariants;
