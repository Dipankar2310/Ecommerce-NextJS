"use client";
import { RootState } from "@/redux_temp/store";
import Gallery from "@/components/gallery/gallery";
import Info from "@/components/info";
import Modal from "@/components/ui/modal";
import { Product } from "@/types";
import { useSelector, useDispatch } from "react-redux";
import { onClose } from "@/redux_temp/slices_temp/previewModalSlice";

const PreviewModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector<RootState, boolean>(
    (state) => state.previewModalSlice.isOpen
  );
  const product = useSelector<RootState, Product | undefined>(
    (state) => state.previewModalSlice.data
  );

  if (!product) {
    return null;
  }

  return (
    <Modal open={isOpen} onClose={() => dispatch(onClose())}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
