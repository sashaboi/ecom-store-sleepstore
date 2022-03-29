import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "amateur",
    description:
      "These drones are used by hobbyists, and beginners to get on and have fun with drones",
  },
  {
    _id: uuid(),
    categoryName: "semi-pro",
    description:
      "Taking the leap from a being a hobbyist to getting into being a professional drone user",
  },
  {
    _id: uuid(),
    categoryName: "pro",
    description:
      "For the veterans of the industry, shooting commercials, movies, looking for the best machines",
  },
];
