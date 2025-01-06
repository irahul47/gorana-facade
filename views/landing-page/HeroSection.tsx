import React, { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import clsx from "clsx";
import "swiper/css";

const HERO_ITEMS = [
  {
    imageSrc:
      "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sit ad blanditiis iure praesentium ratione saepe iste quae, provident ullam.",
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sit ad blanditiis iure praesentium ratione saepe iste quae, provident ullam.",
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/21728408/pexels-photo-21728408/free-photo-of-apartment-building-with-balconies.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sit ad blanditiis iure praesentium ratione saepe iste quae, provident ullam.",
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/24287750/pexels-photo-24287750/free-photo-of-windows-of-block-of-flats.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sit ad blanditiis iure praesentium ratione saepe iste quae, provident ullam.",
  },
];

const HeroSection = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  const handleSlideChange = (swiper: SwiperCore) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSwiper={setSwiperInstance}
        onSlideChange={() =>
          swiperInstance && handleSlideChange(swiperInstance)
        }
        className="relative"
      >
        <button
          type="button"
          disabled={isBeginning}
          className={clsx(
            isBeginning ? "cursor-not-allowed opacity-50" : "",
            "absolute left-4 top-1/2 z-10 text-white lg:left-10",
          )}
          onClick={() => swiperInstance?.slidePrev()}
        >
          <ChevronLeftIcon className="size-8 lg:size-10" />
        </button>
        <button
          type="button"
          disabled={isEnd}
          className={clsx(
            isEnd ? "cursor-not-allowed opacity-50" : "",
            "absolute right-4 top-1/2 z-10 text-white lg:right-10",
          )}
          onClick={() => swiperInstance?.slideNext()}
        >
          <ChevronRightIcon className="size-8 lg:size-10" />
        </button>
        {HERO_ITEMS.map((item, idx) => {
          const { imageSrc, title, description } = item;

          return (
            <SwiperSlide key={idx}>
              <div className="relative h-[450px] lg:h-svh">
                <Image
                  src={imageSrc}
                  fill
                  alt="Hero Image"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50" />
                <div className="absolute left-12 top-12 max-w-80 text-white sm:left-24 sm:top-24 lg:left-40 lg:top-40">
                  <h3 className="mb-2 text-4xl uppercase">{title}</h3>
                  <p className="text-sm">{description}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default HeroSection;
