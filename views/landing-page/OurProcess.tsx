import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import React from "react";

const PROCESSES = [
  {
    title: "Timely Delivery",
    description:
      "At Gorana Facade Solution, we understand the importance of delivering projects on schedule. Timely completion has been our top priority since our inception, allowing us to build a strong reputation in the facade industry. We approach every project with meticulous planning and effective time management, ensuring we meet deadlines without compromising quality. Our dedicated team of professionals works seamlessly to complete each project on time, adhering to the strictest industry standards. Clients trust us for our reliability and consistency, knowing that we deliver not just results, but results on time.",
    defaultOpen: true,
  },
  {
    title: "Quality Excellence",
    description:
      "Unwavering commitment to quality is at the core of everything we do at Gorana Facade Solution. We believe in delivering solutions that stand the test of time, with attention to detail in every aspect of our work. From the materials we use to our construction techniques, we prioritize excellence at every step. Our finished projects are a testament to our high standards, earning us the trust and respect of our clients. With every project, we strive to set new benchmarks in the industry, offering facade solutions that combine aesthetics, durability, and superior craftsmanship.",
    defaultOpen: true,
  },
  {
    title: "Collaborative Partnerships",
    description:
      "At Gorana Facade Solution, we believe that strong relationships are the key to successful projects. We work closely with clients, architects, and project managers to ensure open communication and collaboration at every stage of the process. By fostering these partnerships, we create a working environment that drives efficiency and innovation. Our approach to collaboration extends beyond project completion, as we believe in building long-lasting relationships that add value to all stakeholders. Whether it's understanding client needs or working hand-in-hand with architects, our commitment to teamwork ensures that we deliver exceptional results.",
    defaultOpen: true,
  },
];

const OurProcess = () => {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="mb-6">
          Our company operates with three core motives that drive our success.
          These principles guide every project we undertake and reflect our
          commitment to delivering the best outcomes.
        </p>
        <div className="space-y-6">
          {PROCESSES.map((process, idx) => {
            const { title, description, defaultOpen } = process;

            return (
              <Disclosure key={idx} as="div" defaultOpen={defaultOpen}>
                <DisclosureButton className="text-2xl font-semibold">
                  {`${idx + 1}. ${title}`}
                </DisclosureButton>
                <DisclosurePanel className="mt-4">
                  {description}
                </DisclosurePanel>
              </Disclosure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
