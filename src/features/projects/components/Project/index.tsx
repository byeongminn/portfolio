"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useGetProject } from "@/features/projects/hooks/useGetProject";
import Close from "./close.svg";
import { Outline } from "@/features/projects/components/Outline";
import { Roles } from "@/features/projects/components/Roles";
import { Achievements } from "@/features/projects/components/Achievements";
import { Features } from "@/features/projects/components/Features";
import { Solutions } from "@/features/projects/components/Solutions";
import * as s from "./style.css";

type Props = {
  title: string;
};

export const Project = ({ title }: Props) => {
  const {
    data: { project },
  } = useGetProject({ title });

  const router = useRouter();

  const handleCloseClick = () => {
    router.back();
  };

  return (
    <section className={s.container}>
      <div className={s.wrapper}>
        <div className={s.topWrapper}>
          {/* 닫기 버튼 */}
          <div className={s.closeWrapper}>
            <Close className={s.close} onClick={handleCloseClick} />
          </div>

          {/* 프로젝트명 및 기간 */}
          <div className={s.titleWrapper}>
            <h1 className={s.title}>{project.title}</h1>
            <h3>{project.period}</h3>
          </div>

          {/* 썸네일 */}
          <div
            className={s.thumbnailWrapper}
            style={{
              ...assignInlineVars({
                [s.backgroundColor]: project.thumbnail.backgroundColor,
              }),
            }}
          >
            <Image
              src={`images/${project.thumbnail.src}.svg`}
              alt={project.thumbnail.alt}
              width={project.thumbnail.width}
              height={project.thumbnail.height}
            />
          </div>
        </div>

        <div className={s.bottomWrapper}>
          {/* 개요 */}
          <Outline outline={project.outline} />

          {/* 구분선 */}
          <div className={s.divider}></div>

          {/* 주요 기능 */}
          <Features features={project.features} />

          {/* 담당 역할 및 기여 */}
          <Roles roles={project.roles} />

          {/* 문제 해결 사례 */}
          <Solutions solutions={project.solutions} />

          {/* 성과 및 결과 */}
          <Achievements achievements={project.achievements} />
        </div>
      </div>
    </section>
  );
};
