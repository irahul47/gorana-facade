import Image from "next/image";
import React from "react";

const CLIENTS = [
  "https://innovators.in/wp-content/uploads/2020/10/1.png",
  "https://innovators.in/wp-content/uploads/2020/10/2.png",
  "https://innovators.in/wp-content/uploads/2020/10/3.png",
  "https://innovators.in/wp-content/uploads/2020/10/4.png",
  "https://innovators.in/wp-content/uploads/2020/10/5.png",
  "https://innovators.in/wp-content/uploads/2020/10/6.png",
  "https://innovators.in/wp-content/uploads/2020/10/7.png",
  "https://innovators.in/wp-content/uploads/2020/10/8.png",
];

const OurClientsSection = () => {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-xl font-semibold">Our Clients</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
          {CLIENTS.map((clientSrc, idx) => (
            <div
              key={idx}
              className="select-none rounded-md bg-white p-4 shadow"
            >
              <div className="relative h-14 w-auto">
                <Image
                  src={clientSrc}
                  alt="client-alt"
                  className="object-contain"
                  fill
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClientsSection;
