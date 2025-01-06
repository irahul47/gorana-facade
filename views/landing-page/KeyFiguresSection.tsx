import React from "react";

const FIGURES = [
  {
    count: "08",
    title:
      "Manufacturing Facilities In India For Fabrication, Coating, Sheet Metal Works",
  },
  {
    count: "1000+",
    title: "Experts Operating Across Diverse Domains",
  },
  {
    count: "20 Million",
    title: "Square Feet Of Façade Work Completed",
  },
  {
    count: "350+",
    title: "Projects Successfully Completed",
  },
  {
    count: "500,000",
    title: "Square Feet Of Design and Manufacturing Floor Space",
  },
  {
    count: "400+",
    title: "Total Employees",
  },
];

const KeyFiguresSection = () => {
  return (
    <section className="bg-blue-950 text-white">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="mb-16">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FIGURES.map((figure, idx) => {
            const { count, title } = figure;

            return (
              <div key={idx}>
                <h3 className="mb-2 text-3xl font-bold">{count}</h3>
                <div>{title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFiguresSection;
