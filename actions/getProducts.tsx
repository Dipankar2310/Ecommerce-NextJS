import { Product } from "@/types";
interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
  productId?: string;
}

let URL = `${process.env.NEXT_PUBLIC_API_URL}/api/getCategories`;

// getProducts fetches all types of Product from db using an API it is paramaterized to query spicifically
// for different query type so we can get products based on colors/sizes/categories...
const getProducts = async (query: Query): Promise<Product[]> => {
  const res = await fetch(URL);
  const products: Product[] = (await res.json()) || [];

  return products.filter(
    (product) =>
      (!query.productId || product.id === query.productId) &&
      (!query.categoryId || product.category.id === query.categoryId) &&
      (!query.colorId || product.color === query.colorId) &&
      (!query.sizeId || product.size === query.sizeId) &&
      (query.isFeatured === undefined ||
        product.isFeatured === query.isFeatured)
  );
};

export default getProducts;
