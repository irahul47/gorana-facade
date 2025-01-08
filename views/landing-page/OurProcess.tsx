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
      "At Gorana Facade Solutions, on-time project completion is paramount. Since our inception, we've prioritized meeting deadlines through meticulous planning and efficient time management, earning a reputation for unwavering reliability within the facade industry. Our dedicated professionals collaborate seamlessly to deliver exceptional results without compromising quality, ensuring client trust in our commitment to both excellence and punctuality.",
    defaultOpen: true,
  },
  {
    title: "Quality Excellence",
    description:
      "At Gorana Facade Solutions, an unwavering commitment to quality is the cornerstone of our operations. We meticulously craft long-lasting facade solutions, attending to every detail throughout the entire process. From the careful selection of premium materials to the implementation of advanced construction methodologies, we maintain uncompromising standards in all facets of our work. The exceptional quality of our completed projects reflects these rigorous standards, fostering trust and earning the respect of our clients. With each undertaking, we aim to elevate industry benchmarks, delivering facade solutions that seamlessly integrate aesthetics, enduring durability, and exceptional craftsmanship.",
    defaultOpen: true,
  },
  {
    title: "Collaborative Partnerships",
    description:
      "At Gorana Facade Solutions, strong collaboration is the foundation of successful projects. We partner closely with clients, architects, and project managers, prioritizing open communication and fostering a cooperative culture throughout the project. These partnerships enhance efficiency, streamline workflows, and drive innovation, while our commitment to teamwork extends beyond project completion to build lasting, mutually beneficial relationships. From understanding client needs to refining design concepts with architects, our dedication to collaborative practices guarantees exceptional results and a consistently smooth project experience.",
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
