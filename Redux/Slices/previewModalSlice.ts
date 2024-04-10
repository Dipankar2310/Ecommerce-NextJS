import { Product } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface previewModalState{
  isOpen:boolean
  data:Product|undefined
}
const initialState:previewModalState={
  isOpen:false,
  data:undefined
}
export const previewModalSlice = createSlice({
    name: 'previewModal',
    initialState,
    reducers: {
      onClose: (state) => {
       return {...state, isOpen:false};
      },
      onOpen: (state,action)=>{
        return {...state,isOpen:true, data:action.payload }
      }
  }});

  export const {onClose, onOpen}=previewModalSlice.actions;
  export default previewModalSlice.reducer;