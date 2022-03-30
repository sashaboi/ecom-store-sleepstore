import { v4 as uuid } from "uuid";
import inspire from '../images/products/inspire.png'
import mavic from '../images/products/mavic.png'
import phantom from '../images/products/phantom.png'
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
    categoryName: "amateur",
    professional:false,
    img:mavic,
    rating:2,
    weight:"907g" ,
  },
  {
    _id: uuid(),
    title: "Inspire 2",
    resolution: "8k",
    price: "10000",
    categoryName: "pro",
    professional:true,
    img:inspire,
    rating:5,
    weight:"3440g",
  },
  {
    _id: uuid(),
    title: "Phantom 4",
    resolution: "4k",
    price: "2000",
    categoryName: "semi-pro",
    professional:false,
    img:phantom,
    rating:3,
    weight:"1380g",
  },
  {
    _id: uuid(),
    title: "Phantom 3",
    resolution: "4k",
    price: "2000",
    categoryName: "semi-pro",
    professional:false,
    img:phantom,
    rating:3,
    weight:"1380g",
  },
  {
    _id: uuid(),
    title: "Phantom 2",
    resolution: "4k",
    price: "2000",
    categoryName: "semi-pro",
    professional:false,
    img:phantom,
    rating:3,
    weight:"1380g",
  },
  {
    _id: uuid(),
    title: "Phantom 4pro",
    resolution: "4k",
    price: "2000",
    categoryName: "semi-pro",
    professional:false,
    img:phantom,
    rating:3,
    weight:"1380g",
  },
  {
    _id: uuid(),
    title: "Inspire 2R",
    resolution: "8k",
    price: "10000",
    categoryName: "pro",
    professional:true,
    img:inspire,
    rating:5,
    weight:"3440g",
  },
  
  {
    _id: uuid(),
    title: "Inspire 1",
    resolution: "8k",
    price: "10000",
    categoryName: "pro",
    professional:true,
    img:inspire,
    rating:5,
    weight:"3440g",
  },
];
