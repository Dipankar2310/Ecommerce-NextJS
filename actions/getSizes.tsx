import getProducts from "./getProducts";
const getSizes = async():Promise<string[]> =>{
    let products = await getProducts({});
    const sizes:string[] = [];
    for(let prod in products){
        if(!sizes.includes(products[prod].size))sizes.push(products[prod].size)
    }
    return sizes;
}

export default getSizes