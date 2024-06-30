import { Category } from "@/types";



// getCategories fetches all types of categories from db using an API.
const getCategories = async (): Promise<Category[]> => {
  if(!process.env.NEXT_PUBLIC_API_URL)return [];
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/getCategories`;
  let res = await fetch(URL);
  const categories = res.json();
  return categories;
};

export default getCategories;
