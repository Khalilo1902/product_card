import axios from "axios";

const SERVER_URL = "http://localhost:3008/api";

export const getAllProducts = () => {
  const url = `${SERVER_URL}/product/display`;
  return axios.get(url);
};
