import Image from "next/image";
import React from "react";

interface Props {
  imageSrc: string;
  title: string;
}

const ProductCard = ({ imageSrc, title }: Props) => {
  return (
    <div>
      <div className="relative mb-1 h-64 w-full">
        <Image src={imageSrc} fill alt="commercial-alt" />
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default ProductCard;
