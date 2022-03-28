import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Mavic Pro 2",
    resolution: "4k60fps",
    price: "1000",
    categoryName: "non-fiction",
    professional:false,
  },
  {
    _id: uuid(),
    title: "Phantom 4",
    resolution: "4k",
    price: "2000",
    categoryName: "horror",
    professional:false,
  },
  {
    _id: uuid(),
    title: "Inspire 2",
    resolution: "8k",
    price: "1000",
    categoryName: "fiction",
    professional:true,
  },
];
