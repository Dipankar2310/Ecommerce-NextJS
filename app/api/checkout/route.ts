import { stripe } from "@/lib/stripe";

import { NextResponse, NextRequest } from "next/server";

// POST API to fetch Stripe payment page URL
export async function POST(req: NextRequest) {
  // TODO: Body can be used to render products on stripe page if the products are stored in stripe catalog
  const body = await req.json();

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
    return NextResponse.json({ session_url: session.url });
  } catch (err) {
    console.log("Error while checkout:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
