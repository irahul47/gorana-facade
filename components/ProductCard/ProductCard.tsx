import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

interface Props {
  imageSrc: string;
  title: string;
}

const ProductCard = ({ imageSrc, title }: Props) => {
  return (
    <div className="cursor-pointer select-none rounded-md bg-gray-100">
      <div className="relative h-48 w-full overflow-hidden rounded-md">
        <Image
          src={imageSrc}
          fill
          className="object-contain"
          alt="commercial-alt"
        />
      </div>
      <div className="mt-2.5 flex items-center px-8 py-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <ArrowLongRightIcon className="ml-1.5 size-6 flex-none" />
      </div>
    </div>
  );
};

export default ProductCard;
