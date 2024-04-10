export interface BillBoard{
    id:string,
    label:string,
    imageUrl:string
}

export interface Category {
    id:string,
    name:string,
    billboard:BillBoard
}

export interface Product{
    id:string,
    category:Category,
    name:string,
    price:string,
    isFeatured:boolean,
    size:string,
    color:string,
    images:string[],
    count:string,
    cartCount:string
}
export interface Color{
    id:string,
    name:string,
    value:string
}

export interface Image {
    id:string,
    url:string
}

export interface Size{
    id:string,
    name:string,
    value:string
}
