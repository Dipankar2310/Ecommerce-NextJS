import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartCounterSlice from "./slices/cartSlice";
import previewModalSlice from "./slices/previewModalSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// redux-persist code used for persisting data on reloads is commented out as of now since it was
// causing significant slowness on reloads

// const persistConfig = {
//     key: 'root',
//     storage,
//   }
// const persistedReducer = persistReducer(persistConfig,combineReducers({
//  cartCounterSlice,
//  previewModalSlice
// }))

const persistedReducer = combineReducers({
  cartCounterSlice,
  previewModalSlice,
});

export const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
  });

export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
