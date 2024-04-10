import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/types";

export const revalidate = 0;
interface cartSliceState {
  items: Product[];
}
const initialState: cartSliceState = {
  items: [],
};
export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItem: (state, action) => {
      return {
        ...state,
        items: [
          ...state.items.filter((obj) => obj.id !== action.payload.id),
          action.payload,
        ],
      };
    },
    removeItemOnce: (state, action) => {
      if (action.payload.cartCount > "0")
        return {
          ...state,
          items: [
            ...state.items.filter(
              (obj) => obj.id !== action.payload.id && obj.cartCount > "0"
            ),
            action.payload,
          ],
        };

      return {
        ...state,
        items: [
          ...state.items.filter(
            (obj) => obj.id !== action.payload.id && obj.cartCount > "0"
          ),
        ],
      };
    },
    removeItem: (state, action) => {
      return {
        items: state.items.filter(
          (product) => !action.payload.includes(product.id)
        ),
      };
    },

    removeAll: () => {
      return { items: [] };
    },
  },
});

export const { addItem, removeItem, removeAll, removeItemOnce } =
  cartSlice.actions;
export default cartSlice.reducer;
