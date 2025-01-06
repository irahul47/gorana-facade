import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import React from "react";

const PROCESSES = [
  {
    title: "Infrastructure",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, iusto officiis! Soluta ullam fuga quas, illo, asperiores quis facilis molestias culpa magnam odio cum veritatis ratione? Ab blanditiis delectus minus repellat, tenetur, quae corporis omnis, molestias consectetur enim natus dolores ea necessitatibus inventore nam vitae. Et nostrum sint nam repellat.",
    defaultOpen: true,
  },
  {
    title: "Installation",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, iusto officiis! Soluta ullam fuga quas, illo, asperiores quis facilis molestias culpa magnam odio cum veritatis ratione? Ab blanditiis delectus minus repellat, tenetur, quae corporis omnis, molestias consectetur enim natus dolores ea necessitatibus inventore nam vitae. Et nostrum sint nam repellat.",
    defaultOpen: true,
  },
  {
    title: "Design",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, iusto officiis! Soluta ullam fuga quas, illo, asperiores quis facilis molestias culpa magnam odio cum veritatis ratione? Ab blanditiis delectus minus repellat, tenetur, quae corporis omnis, molestias consectetur enim natus dolores ea necessitatibus inventore nam vitae. Et nostrum sint nam repellat.",
    defaultOpen: true,
  },
];

const OurProcess = () => {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy.
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
