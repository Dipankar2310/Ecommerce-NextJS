"use client";
import Image from "next/image";
import { Product } from "@/types";
import { Expand, ShoppingCart } from "lucide-react";
import IconButton from "./iconButton";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import { addItem } from "@/redux_temp/slices_temp/cartSlice";
import { onOpen } from "@/redux_temp/slices_temp/previewModalSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { RootState } from "@/redux_temp/store";
interface ProductCard {
  data: Product;
}
const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleCLick = () => {
    router.push(`/product/${data?.id}`);
  };

  const cartItems = useSelector<RootState, Product[]>(
    (state) => state.cartCounterSlice.items
  );
  const addToCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
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

  const onPreview = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    product: Product
  ) => {
    event.stopPropagation();
    dispatch(onOpen(product));
  };
  return (
    <div
      onClick={handleCLick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.length > 0 ? data?.images[0] : ""}
          fill
          alt="image"
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={(e) => onPreview(e, data)}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={(e) => addToCart(e)}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">
          {data.category.id === "1" ? "Men" : <></>}
          {data.category.id === "2" ? "Women" : <></>}
          {data.category.id === "3" ? "Kids" : <></>}
          {data.category.id === "4" ? "Beauty" : <></>}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <Currency value={data?.price}></Currency>
      </div>
    </div>
  );
};

export default ProductCard;
