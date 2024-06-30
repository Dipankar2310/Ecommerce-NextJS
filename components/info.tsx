"use client";
import { Product } from "@/types";
import Currency from "./ui/currency";
import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
import toast from "react-hot-toast";
import { RootState } from "../redux/store";
interface InfoProps {
  data: Product;
}
const Info: React.FC<InfoProps> = ({ data }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector<RootState, Product[]>(
    (state) => state.cartCounterSlice.items
  );
  const addToCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    toast.success("Item added to cart", {
      position: "top-center",
      duration: 2000,
    });
    const prod = cartItems.filter((item) => item.id === data.id);
    dispatch(
      addItem({
        ...data,
        cartCount: (
          parseInt(prod.length > 0 ? prod[0].cartCount : "0") + 1
        ).toString(),
      })
    );
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data?.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color }}
          ></div>
        </div>
      </div>

      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={(e) => addToCart(e)}
          className="flex items-center gap-x-2"
        >
          Add to Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
