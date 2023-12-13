import { IProducts } from "@/interface";
import axios from "axios";

const SERVER_URL = "https://product-db.onrender.com/api";

export const getAllProducts = () => {
  const url = `${SERVER_URL}/product/display`;
  return axios.get(url);
};


export const CreateProduct = (product:IProducts)=>{
  const url = `${SERVER_URL}/product/create`
  return axios.post(url,product)
}