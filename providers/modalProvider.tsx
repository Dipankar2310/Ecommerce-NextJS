"use client";

import { Children, useEffect, useState } from "react";

import PreviewModal from "@/components/previewModal";

const ModalProvider = ({children}:{children: React.ReactNode}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return ( 
    <>
      {children}
    </>
   );
}
 
export default ModalProvider;