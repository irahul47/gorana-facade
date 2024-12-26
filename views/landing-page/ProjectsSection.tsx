import ProjectCard from "@/components/ProjectCard";
import React from "react";

const PROJECTS = [
  {
    imageSrc: "https://picsum.photos",
    title: "Residential",
  },
  {
    imageSrc: "https://picsum.photos",
    title: "Commercial & Hospitality",
  },
  {
    imageSrc: "https://picsum.photos",
    title: "Hospitals",
  },
];

const ProjectsSection = () => {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="mb-3 text-center text-xl font-medium">Our Projects</h1>
          <div className="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            tempore distinctio quam cupiditate rem porro soluta assumenda dolore
            error cum.
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {PROJECTS.map((project, idx) => {
            const { imageSrc, title } = project;

            return (
              <ProjectCard
                key={idx}
                imageSrc={`${imageSrc}/id/${idx + 25}/256`}
                title={title}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
