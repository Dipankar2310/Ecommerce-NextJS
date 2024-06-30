"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../redux/store";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";

// redux-persist code used for persisting data on reloads is commented out as of now since it was
// causing significant slowness on reloads
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  // let persistor = persistStore(storeRef.current)

  return (
    <Provider store={storeRef.current}>
      {/* <PersistGate  persistor={persistor}> */}
      {children}
      {/* </PersistGate> */}
    </Provider>
  );
}
