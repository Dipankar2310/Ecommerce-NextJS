import { NextResponse, NextRequest } from "next/server";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "@/lib/firebase";
import { Product } from "@/types";

//GET route to fetch products from db.
export async function GET(req: NextRequest) {
  const db = getFirestore(app);
  const docRef = doc(db, "Products", "Products");
  const docSnap = await getDoc(docRef);
  const res: object | undefined = docSnap.data();
  const p = JSON.stringify(res);
  const myObj = JSON.parse(p);

  let products: Product[] = [];
  myObj.products.forEach((e: any) => {
    let prod: Product = {
      ...e,
      id: e.id,
      category: {
        id: e.category,
        name: e.category,
        billboard: { id: e.category, label: e.category, imageUrl: e.category },
      },
    };
    products.push(prod);
  });

  return NextResponse.json(products);
}
