
import {Color,Product} from "@/types"
import getProducts from "./getProducts";


const getColors = async():Promise<string[]> =>{
    let products = await getProducts({});
    const colors:string[] = [];
    for(let prod in products){
        if(!colors.includes(products[prod].color))colors.push(products[prod].color)
    }
    return colors;
}

export default getColors