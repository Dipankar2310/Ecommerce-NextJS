import { stripe } from "@/lib/stripe";
import { stat } from "fs";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req:NextRequest){
    const body = await req.json();

        try {
              // Create Checkout Sessions from body params.
              const session = await stripe.checkout.sessions.create({
                line_items:[
                    {
                        price:"price_1P3zqRSECqy9Rv1ZdB1aZF6C",
                        quantity:1
                    }
                ],
                mode: 'payment',
                success_url: `${req.headers.get('origin')}/?success=true`,
                cancel_url: `${req.headers.get('origin')}/?canceled=true`,
              });
             return NextResponse.json({session_url:session.url})
            } catch (err) {
                console.log("Error while checkout:",err)
             return NextResponse.json({error:"Server Error"}, {status:500}) 
            }
}