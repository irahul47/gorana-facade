import React from "react";

const CLIENTS = [
  "Client 1",
  "Client 2",
  "Client 3",
  "Client 4",
  "Client 5",
  "Client 6",
  "Client 7",
  "Client 8",
  "Client 9",
  "Client 10",
  "Client 11",
  "Client 12",
  "Client 13",
  "Client 14",
  "Client 15",
  "Client 16",
  "Client 17",
  "Client 18",
  "Client 19",
  "Client 20",
];

const OurClientsSection = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="mb-3 text-center text-xl font-medium">Our Clients</h1>
          <div className="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            quaerat possimus officia repudiandae quibusdam placeat iure
            reiciendis neque consequuntur soluta.
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {CLIENTS.map((client, idx) => (
            <h3 key={idx}>{client}</h3>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClientsSection;
