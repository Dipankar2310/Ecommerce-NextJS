"use client";

import { useEffect, useState } from "react";
import Button from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { useSelector } from "react-redux";
import { type RootState } from "../redux/store";
import { Product } from "@/types";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const router = useRouter();
  const cartItems = useSelector<RootState, Product[]>(
    (state) => state.cartCounterSlice.items
  );

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cartItems.reduce(
            (accumulator, currentValue) =>
              accumulator + parseInt(currentValue.cartCount),
            0
          )}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
