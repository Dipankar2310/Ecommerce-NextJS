"use client";
import Image from "next/image";
import { Image as Imagetype } from "@/types";
import { Tab } from "@headlessui/react";

import GalleryTab from "./galleryTab";
interface GalleryProps {
  images: string[];
}
const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images?.map((image) => {
            return <GalleryTab key={image} image={image} />;
          })}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {images?.map((image) => {
          return (
            <Tab.Panel key={image}>
              <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                <Image
                  fill
                  src={image}
                  alt="Image"
                  className="object-cover object-center"
                ></Image>
              </div>
            </Tab.Panel>
          );
        })}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
