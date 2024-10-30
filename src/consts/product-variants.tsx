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
  },
  {
    title: "Classic T-Shirt",
    description: "Soft cotton t-shirt with a relaxed fit for everyday wear.",
    price: 19.99,
    size: "M",
    color: "Red",
    images: [
      { ...image3, alt: "Red Classic T-Shirt - Medium" },
      { ...image4, alt: "Red Classic T-Shirt - Medium" },
      { ...image5, alt: "Red Classic T-Shirt - Medium" },
      { ...image6, alt: "Red Classic T-Shirt - Medium" },
      { ...image7, alt: "Red Classic T-Shirt - Medium" },
    ],
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
  },
  {
    title: "Classic T-Shirt",
    description: "Soft cotton t-shirt with a relaxed fit for everyday wear.",
    price: 21.99,
    size: "M",
    color: "Blue",
    images: [
      { ...image14, alt: "Blue Classic T-Shirt - Medium" },
      { ...image15, alt: "Blue Classic T-Shirt - Medium" },
      { ...image1, alt: "Blue Classic T-Shirt - Medium" },
      { ...image2, alt: "Blue Classic T-Shirt - Medium" },
      { ...image3, alt: "Blue Classic T-Shirt - Medium" },
    ],
  },
  {
    title: "Classic T-Shirt",
    description: "Soft cotton t-shirt with a relaxed fit for everyday wear.",
    price: 22.99,
    size: "L",
    color: "Blue",
    images: [
      { ...image4, alt: "Blue Classic T-Shirt - Large" },
      { ...image5, alt: "Blue Classic T-Shirt - Large" },
      { ...image10, alt: "Blue Classic T-Shirt - Large" },
      { ...image11, alt: "Blue Classic T-Shirt - Large" },
      { ...image12, alt: "Blue Classic T-Shirt - Large" },
    ],
  },
  {
    title: "Premium Hoodie",
    description: "Warm and cozy hoodie, perfect for chilly weather.",
    price: 38.99,
    size: "S",
    color: "Black",
    images: [
      { ...image13, alt: "Black Premium Hoodie - Small" },
      { ...image14, alt: "Black Premium Hoodie - Small" },
      { ...image15, alt: "Black Premium Hoodie - Small" },
      { ...image1, alt: "Black Premium Hoodie - Small" },
      { ...image2, alt: "Black Premium Hoodie - Small" },
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
  },
  {
    title: "Premium Hoodie",
    description: "Warm and cozy hoodie, perfect for chilly weather.",
    price: 40.99,
    size: "L",
    color: "Black",
    images: [
      { ...image5, alt: "Black Premium Hoodie - Large" },
      { ...image6, alt: "Black Premium Hoodie - Large" },
      { ...image7, alt: "Black Premium Hoodie - Large" },
      { ...image8, alt: "Black Premium Hoodie - Large" },
      { ...image1, alt: "Black Premium Hoodie - Large" },
    ],
  },
  {
    title: "Premium Hoodie",
    description: "Warm and cozy hoodie, perfect for chilly weather.",
    price: 40.99,
    size: "S",
    color: "Gray",
    images: [
      { ...image2, alt: "Gray Premium Hoodie - Small" },
      { ...image3, alt: "Gray Premium Hoodie - Small" },
      { ...image13, alt: "Gray Premium Hoodie - Small" },
      { ...image14, alt: "Gray Premium Hoodie - Small" },
      { ...image15, alt: "Gray Premium Hoodie - Small" },
    ],
  },
  {
    title: "Premium Hoodie",
    description: "Warm and cozy hoodie, perfect for chilly weather.",
    price: 41.99,
    size: "M",
    color: "Gray",
    images: [
      { ...image5, alt: "Gray Premium Hoodie - Medium" },
      { ...image10, alt: "Gray Premium Hoodie - Medium" },
      { ...image15, alt: "Gray Premium Hoodie - Medium" },
      { ...image6, alt: "Gray Premium Hoodie - Medium" },
      { ...image11, alt: "Gray Premium Hoodie - Medium" },
    ],
  },
  {
    title: "Premium Hoodie",
    description: "Warm and cozy hoodie, perfect for chilly weather.",
    price: 42.99,
    size: "L",
    color: "Gray",
    images: [
      { ...image2, alt: "Gray Premium Hoodie - Large" },
      { ...image4, alt: "Gray Premium Hoodie - Large" },
      { ...image6, alt: "Gray Premium Hoodie - Large" },
      { ...image8, alt: "Gray Premium Hoodie - Large" },
      { ...image10, alt: "Gray Premium Hoodie - Large" },
    ],
  },
  {
    title: "Basic Tank Top",
    description: "Lightweight tank top for warm days or workouts.",
    price: 12.99,
    size: "S",
    color: "Green",
    images: [
      { ...image3, alt: "Green Basic Tank Top - Small" },
      { ...image6, alt: "Green Basic Tank Top - Small" },
      { ...image9, alt: "Green Basic Tank Top - Small" },
      { ...image12, alt: "Green Basic Tank Top - Small" },
      { ...image15, alt: "Green Basic Tank Top - Small" },
    ],
  },
  {
    title: "Basic Tank Top",
    description: "Lightweight tank top for warm days or workouts.",
    price: 15.99,
    size: "M",
    color: "Green",
    images: [
      { ...image4, alt: "Green Basic Tank Top - Medium" },
      { ...image8, alt: "Green Basic Tank Top - Medium" },
      { ...image12, alt: "Green Basic Tank Top - Medium" },
      { ...image1, alt: "Green Basic Tank Top - Medium" },
      { ...image5, alt: "Green Basic Tank Top - Medium" },
    ],
  },
  {
    title: "Basic Tank Top",
    description: "Lightweight tank top for warm days or workouts.",
    price: 16.99,
    size: "L",
    color: "Green",
    images: [
      { ...image13, alt: "Green Basic Tank Top - Large" },
      { ...image14, alt: "Green Basic Tank Top - Large" },
      { ...image15, alt: "Green Basic Tank Top - Large" },
      { ...image3, alt: "Green Basic Tank Top - Large" },
      { ...image4, alt: "Green Basic Tank Top - Large" },
    ],
  },
];

export default productVariants;
