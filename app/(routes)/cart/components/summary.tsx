"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import { toast } from "react-hot-toast";
import { RootState } from "@/redux/store";
import { Product } from "@/types";
import { removeAll } from "@/redux/slices/cartSlice";
import { useRouter } from "next/navigation";
import  express from 'express';
import cors from 'cors'
const Summary = () => {
  const searchParams = useSearchParams();
  const items = useSelector<RootState, Product[]>(
    (state) => state.cartCounterSlice.items
  );
  const router = useRouter();
//   const app = express();
//   app.use(
//     cors({
//         origin: process.env.NEXT_PUBLIC_API_URL,
//         optionsSuccessStatus: 200, 
//         // Some legacy browsers choke on 204
//     })
// );
  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed.");
      removeAll();
    }
    if (searchParams.get("cancelled")) {
      toast.error("Something went wrong.");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price) * Number(item.cartCount);
  }, 0);

  const body = items.map((item) => {
    return { price: item.price, quantity: item.cartCount };
  });

  //OnCheckout redirects to the stripe payment page

  const onCheckout = async () => {
    if(!process.env.NEXT_PUBLIC_API_URL) return;
    let URL = `${process.env.NEXT_PUBLIC_API_URL}/api/checkout`;
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const result = await res.json();
    router.push(result.session_url);
    console.log(result);
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-semibold text-gray-900">Order Summary</h2>

      <div className="flex flex-col  justify-between border-t border-gray-200 pt-4">
        {items.map((item) => {
          return (
            <div key={item.id} className="grid grid-cols-5 my-1 ">
              <div className="font-medium col-span-3">{item.name}</div>
              <div className="text-gray-500"> x{item.cartCount}</div>

              <div className="flex justify-end">
                <Currency value={item.price} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        onClick={onCheckout}
        disabled={items.length === 0}
        className="w-full mt-6"
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;


