import { configureStore , combineReducers } from "@reduxjs/toolkit";
import  cartCounterSlice  from "./Slices/cartSlice";
import previewModalSlice from "./Slices/previewModalSlice";
import {persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

// const persistConfig = {
//     key: 'root',
//     storage,
//   }
  // const persistedReducer = persistReducer(persistConfig,combineReducers({
  //  cartCounterSlice,
  //  previewModalSlice
  // }))
  const persistedReducer =combineReducers({
    cartCounterSlice,
    previewModalSlice
   })
 
export const makeStore =()=>( 
    
    configureStore({
   reducer:persistedReducer
}));


export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']