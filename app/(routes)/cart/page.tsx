"use client";
import { useState, useEffect } from "react";
import Container from "@/components/ui/container";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Product } from "@/types";
import CartItem from "./components/cartItem";
import Summary from "./components/summary";

export const revalidate = 0;

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cartItems = useSelector<RootState, Product[]>(
    (state) => state.cartCounterSlice.items
  );
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  let cartList = cartItems.map((item) => (
    <CartItem key={item.id} data={item} />
  ));

  //Sorting to maintain order on the cart page whilst items are being added and removed.
  cartList.sort((a, b) => {
    if (a.key == null || b.key == null) {
      return 0; // No change in order
    } else if (a?.key < b?.key) {
      return -1;
    } else if (a.key > b.key) {
      return 1;
    } else {
      return 0;
    }
  });
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cartItems.length === 0 && (
                <p className="text-neutral-500">No items added to cart.</p>
              )}
              <ul>{cartList}</ul>
            </div>
            {cartItems.length > 0 && <Summary />}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
