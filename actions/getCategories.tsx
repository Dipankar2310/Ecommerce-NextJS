import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/getCategories`;

// getCategories fetches all types of categories from db using an API.
const getCategories = async (): Promise<Category[]> => {
  let res = await fetch(URL);
  const categories = res.json();
  return categories;
};

export default getCategories;
