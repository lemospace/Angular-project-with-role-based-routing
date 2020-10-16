export class Data {
  id: number;
  imgUrl: string;
  price: number;
  discount: number;
  main: boolean;
  shop: string;
  name: string;
  description: string;
  shipping: string;
  discountUntil: string;
  new: boolean;
  color: string[];
  size: string[];
  review: { author: string; text: string; rating: number }[];
  static description: any;
}
