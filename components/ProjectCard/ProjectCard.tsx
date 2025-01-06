import Image from "next/image";
import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

interface Props {
  imageSrc: string;
  title: string;
}

const ProjectCard = ({ imageSrc, title }: Props) => {
  return (
    <div className="select-none">
      <div className="relative h-64 w-full cursor-pointer overflow-hidden rounded-md">
        <Image src={imageSrc} fill alt="commercial-alt" />
      </div>
      <div className="mt-2.5 flex cursor-pointer items-center px-2.5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <ArrowLongRightIcon className="ml-1.5 size-6 flex-none" />
      </div>
    </div>
  );
};

export default ProjectCard;
