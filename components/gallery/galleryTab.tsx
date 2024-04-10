import Image from "next/image";
import { Tab } from "@headlessui/react";
import { cn } from "@/lib/util";
import { Image as ImageType } from "@/types";
interface GalleryTabProps{
    image:string
}
const GalleryTab:React.FC<GalleryTabProps> = ({image}) => {
    return (
        <Tab className="relative flex aspect-square cursor-pointer
        items-center justify-center rounded-mp bg-white">
            {({selected})=>(
                <div>
                    <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                        <Image
                        fill
                        src={image}
                        alt='Image'
                        className="object-cover object-center"
                        ></Image>
                    </span>

                    <span className={cn("absolute inset-0 rounded-md ring-2 ring-offset-2",
                    selected?"ring-black":"ring-transparent")}></span>
                </div>
            )}
        </Tab>
    );
}

export default GalleryTab;