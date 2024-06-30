import Image from "next/image";
import { toast } from "react-hot-toast";
import { X, Plus, Minus } from "lucide-react";
import IconButton from "@/components/ui/iconButton";
import Currency from "@/components/ui/currency";
import { Product } from "@/types";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, addItem, removeItemOnce } from "@/redux/slices/cartSlice";

import Button from "@/components/ui/button";
import { RootState } from "@/redux/store";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const dispatch = useDispatch();
  const onRemove = () => {
    dispatch(removeItem(data.id));
  };
  const cartItems = useSelector<RootState, Product[]>(
    (state) => state.cartCounterSlice.items
  );
  const prod = cartItems.filter((item) => item.id === data.id);

  const addToCart = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    toast.success("Item added to cart", {
      position: "top-center",
      duration: 2000,
    });

    dispatch(
      addItem({
        ...data,
        cartCount: (
          parseInt(prod.length > 0 ? prod[0].cartCount : "0") + 1
        ).toString(),
      })
    );
  };

  const removeOnce = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    toast.success("Item Removed", { position: "top-center", duration: 2000 });

    dispatch(
      removeItemOnce({
        ...data,
        cartCount: (
          parseInt(prod.length > 0 ? prod[0].cartCount : "0") - 1
        ).toString(),
      })
    );
  };

  return (
    <li key={data.id} className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data?.images?.length > 0 ? data?.images[0] : ""}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className=" text-lg font-semibold text-black">{data.name}</p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data?.color}</p>
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
              {data?.size}
            </p>
          </div>

          <Currency value={data?.price} />
        </div>
        <Button className="w-1/3 flex justify-between">
          <Plus size={20} color="white" onClick={(e) => addToCart(e)} />
          <p>{prod[0].cartCount}</p>
          <Minus size={20} color="white" onClick={(e) => removeOnce(e)} />
        </Button>
      </div>
    </li>
  );
};

export default CartItem;
