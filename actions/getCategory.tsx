import { Category } from "@/types";
import getCategories from "./getCategories";

//getCategory fetches a single category by a given category ID to use its name/billboard
const getCategory = async (id: string): Promise<Category> => {
  const categories = await getCategories();
  const category = categories.filter((item) => item.id === id);
  return category[0];
};
export default getCategory;
