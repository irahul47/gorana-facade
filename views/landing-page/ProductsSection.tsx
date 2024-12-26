import ProductCard from "@/components/ProductCard";
import React from "react";

const PRODUCTS = [
  {
    imageSrc: "https://picsum.photos",
    title: "Sliding Folding Door",
  },
  {
    imageSrc: "https://picsum.photos",
    title: "Ultra Slim System",
  },
  {
    imageSrc: "https://picsum.photos",
    title: "Minimal System",
  },
];

const ProductsSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="mb-3 text-center text-xl font-medium">Our Products</h1>
        <div className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro id
          voluptatibus deleniti quia eos veritatis facilis ratione earum sint
          saepe.
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {PRODUCTS.map((product, idx) => {
          const { imageSrc, title } = product;

          return (
            <ProductCard
              key={idx}
              imageSrc={`${imageSrc}/id/${idx + 10}/256`}
              title={title}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductsSection;
