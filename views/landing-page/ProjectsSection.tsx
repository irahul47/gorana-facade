import ProjectCard from "@/components/ProjectCard";
import React, { useState } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import clsx from "clsx";
import "swiper/css";

const PROJECTS = [
  {
    imageSrc:
      "https://images.pexels.com/photos/2388358/pexels-photo-2388358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Lorem ipsum dolor sit.",
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/210726/pexels-photo-210726.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=500",
    title: "Lorem ipsum dolor sit.",
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/3285725/pexels-photo-3285725.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/129494/pexels-photo-129494.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Lorem ipsum dolor sit.",
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Lorem ipsum dolor sit amet.",
  },
];

const ProjectsSection = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  const handleSlideChange = (swiper: SwiperCore) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:flex lg:space-x-8 lg:px-8">
        <div className="mb-10 lg:w-80 lg:flex-none">
          <h1 className="mb-3 text-xl font-semibold">Featured Projects</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
          <div className="mt-4 flex items-center justify-center space-x-2">
            <button
              type="button"
              disabled={isBeginning}
              className={clsx(
                isBeginning ? "cursor-not-allowed opacity-50" : "",
              )}
              onClick={() => swiperInstance?.slidePrev()}
            >
              <ArrowLeftIcon className="size-8" />
            </button>
            <button
              type="button"
              disabled={isEnd}
              className={clsx(isEnd ? "cursor-not-allowed opacity-50" : "")}
              onClick={() => swiperInstance?.slideNext()}
            >
              <ArrowRightIcon className="size-8" />
            </button>
          </div>
        </div>
        <Swiper
          slidesPerView={1.2}
          spaceBetween={16}
          onSwiper={setSwiperInstance}
          onSlideChange={() =>
            swiperInstance && handleSlideChange(swiperInstance)
          }
          breakpoints={{
            768: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
          }}
          className="lg:flex-1"
        >
          {PROJECTS.map((project, idx) => {
            const { imageSrc, title } = project;

            return (
              <SwiperSlide key={idx}>
                <ProjectCard imageSrc={imageSrc} title={title} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsSection;
