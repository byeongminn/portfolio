"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import clsx from "clsx";
import { useGetProjects } from "@/features/projects/hooks/useGetProjects";
import { ProjectItem } from "@/features/projects/components/Projects/ProjectItem";
import Prev from "./prev.svg";
import Next from "./next.svg";
import "swiper/css";
import "swiper/css/navigation";
import * as s from "./style.css";

export const Projects = () => {
  const {
    data: { projects },
  } = useGetProjects();

  return (
    <section className={s.container}>
      <div className={s.wrapper}>
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiperButtonPrev",
            nextEl: ".swiperButtonNext",
          }}
          className={s.swiper}
          loop={true}
          slidesPerView="auto"
          centeredSlides={true}
          loopAdditionalSlides={1}
          speed={500}
          initialSlide={1}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title} className={s.swiperSlider}>
              <ProjectItem key={project.title} project={project} />
            </SwiperSlide>
          ))}
          {projects.map((project) => (
            <SwiperSlide key={project.title} className={s.swiperSlider}>
              <ProjectItem key={project.title} project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div>
          <button
            className={clsx("swiperButtonPrev", s.swiperButtonPrev)}
            aria-label="Previous slide"
          >
            <Prev />
          </button>
          <button
            className={clsx("swiperButtonNext", s.swiperButtonNext)}
            aria-label="Next slide"
          >
            <Next />
          </button>
        </div>
      </div>
    </section>
  );
};
