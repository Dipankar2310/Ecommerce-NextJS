import { Category } from "@/types";
import getCategories from "./getCategories";

const getCategory = async (id:string):Promise<Category> => {
    const categories = await getCategories();

    const billboardCat= categories.filter((item)=>(item.id===id));
 
    return billboardCat[0]
}
export default getCategory;