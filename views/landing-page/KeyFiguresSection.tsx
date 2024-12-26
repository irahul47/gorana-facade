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
];

const KeyFiguresSection = () => {
  return (
    <section className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="grid grid-cols-5 gap-4">
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
