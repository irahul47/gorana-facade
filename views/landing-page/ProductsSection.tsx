import ProductCard from "@/components/ProductCard";
import React from "react";

const PRODUCTS = [
  {
    imageSrc: "https://www.kawneer.us/wp-content/uploads/2022/08/windows.png",
    title: "Cladding",
  },
  {
    imageSrc: "https://www.kawneer.us/wp-content/uploads/2022/08/windows.png",
    title: "Glazing",
  },
  {
    imageSrc: "https://www.kawneer.us/wp-content/uploads/2022/08/windows.png",
    title: "Curtain wall",
  },
  {
    imageSrc: "https://www.kawneer.us/wp-content/uploads/2022/08/windows.png",
    title: "Windows",
  },
  {
    imageSrc: "https://www.kawneer.us/wp-content/uploads/2022/08/windows.png",
    title: "Handrail",
  },
];

const ProductsSection = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:flex lg:space-x-8 lg:px-8">
        <div className="mb-10 lg:w-80 lg:flex-none">
          <h1 className="mb-3 text-xl font-semibold">Products</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:flex-1 xl:grid-cols-3">
          {PRODUCTS.map((product, idx) => {
            const { imageSrc, title } = product;

            return <ProductCard key={idx} imageSrc={imageSrc} title={title} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
