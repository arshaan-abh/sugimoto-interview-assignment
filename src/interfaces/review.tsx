export default interface Review {
  rating: Rating;
  text?: string;
}

export type Rating = number;
