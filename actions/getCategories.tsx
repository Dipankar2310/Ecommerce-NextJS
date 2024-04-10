import { Category } from "@/types";

const URL='http://localhost:3000/api/getCategories'

const getCategories = async():Promise<Category[]> =>{
    let res = await fetch(URL);
  
    
    const categories = res.json();
    
    return categories;
}

export default getCategories