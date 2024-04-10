
import { NextResponse,NextRequest } from "next/server";
import { doc,getDoc,getFirestore} from "firebase/firestore";
import {app} from "@/lib/firebase"
import { Category } from "@/types";

export async function GET(req:NextRequest){
     const db = getFirestore(app);
     const docRef = doc(db, "Products", "Categories");
     const docSnap = await getDoc(docRef);
     const res:object|undefined = docSnap.data();
     const p = JSON.stringify(res)
     const myObj = JSON.parse(p);
     let categories:Category[]=[]
     
    for(let key in myObj){
        categories.push(myObj[key]);
    }
 
    return NextResponse.json(categories)

 
   
}