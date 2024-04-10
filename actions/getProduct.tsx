import { Product } from "@/types";
import getProducts from "./getProducts";

//getProduct fetches a single Product by a given Product ID
const getProduct = async (id: string): Promise<Product> => {
  const res = await getProducts({ productId: id });
  return res[0];
};
export default getProduct;
