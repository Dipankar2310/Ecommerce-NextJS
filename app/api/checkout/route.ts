import { stripe } from "@/lib/stripe";

import { NextResponse, NextRequest } from "next/server";


export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin": "*", // Update this to your frontend's URL in production
      "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
      "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
    },
  });
}




// POST API to fetch Stripe payment page URL
export async function POST(req: NextRequest) {
  // TODO: Body can be used to render products on stripe page if the products are stored in stripe catalog
  const body = await req.json();
  const headers = {
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "*", // Update this to your frontend's URL in production
    "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
    "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  };

  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: "price_1P3zqRSECqy9Rv1ZdB1aZF6C",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/?success=true`,
      cancel_url: `${req.headers.get("origin")}/?canceled=true`,
    });
    return NextResponse.json({ session_url: session.url },{headers});
  } catch (err) {
    console.log("Error while checkout:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
