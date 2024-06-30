import { Category } from "@/types";

const URL = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getCategories`;

// getCategories fetches all types of categories from db using an API.
const getCategories = async (): Promise<Category[]> => {
  let res = await fetch(URL);
  const categories = res.json();
  return categories;
};

export default getCategories;
