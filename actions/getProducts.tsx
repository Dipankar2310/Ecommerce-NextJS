
import { Product } from "@/types";


interface Query{
    categoryId?:string
    colorId?:string
    sizeId?:string
    isFeatured?: boolean
    productId?:string
}
let URL='http://localhost:3000/api/getProducts'


const getProducts = async (query:Query):Promise<Product[]> => {
 
    let res = await fetch(URL);
    // console.log(res.json())
    const resp = await res.json();
    let products:Product[]=resp
    if(products===undefined)products=[]
    if(query.productId!==undefined)products =products.filter((element:Product)=>element.id===query.productId)
    if(query.categoryId!==undefined)products = products.filter((element:Product)=>element.category.id===query.categoryId)
    if(query.colorId!==undefined)products = products.filter((element:Product)=>element.color===query.colorId)
    if(query.sizeId!==undefined)products = products.filter((element:Product)=>element.size===query.sizeId)
    if(query.isFeatured!==undefined)products = products.filter((element:Product)=>element.isFeatured===query.isFeatured)




    return products;
}




export default getProducts;