"use client";

import { useRouter } from "next/navigation";
import { useGetProject } from "@/features/projects/hooks/useGetProject";
import Close from "./close.svg";
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
        <div className={s.thumbnailWrapper}></div>

        {/* 개요 */}
        <div>
          <h2 className={s.contentTitle}>📌 프로젝트 개요</h2>
          {project.outline.map((o, idx) => (
            <p key={idx} className={s.content}>
              {o}
            </p>
          ))}
        </div>

        {/* 구분선 */}
        <div className={s.divider}></div>

        {/* 담당 역할 및 기여 */}
        <div>
          <h2 className={s.contentTitle}>담당 역할 및 기여</h2>
          {/* 기본 */}
          {project.roles.default.map((defaultRole, idx) => (
            <p key={idx} className={s.content}>
              {defaultRole}
            </p>
          ))}
          {/* 어드민 */}
          {project.roles.admin?.length && <h4>1. Admin</h4>}
          {project.roles.admin?.map((adminRole, idx) => (
            <p key={idx} className={s.content}>
              {adminRole}
            </p>
          ))}
          {/* 클라이언트 */}
          {project.roles.client?.length && (
            <>
              -<h4>2. Client</h4>
            </>
          )}
          {project.roles.client?.map((clientRole, idx) => (
            <p key={idx} className={s.content}>
              {clientRole}
            </p>
          ))}
        </div>

        {/* 성과 및 결과 */}
        <div>
          <h2 className={s.contentTitle}>성과 및 결과</h2>
          {project.achievements.map(({ title, contents }) => (
            <div key={title} className={s.content}>
              <p>{title}</p>
              {contents.map((content) => (
                <p key={content} className={s.content}>
                  {content}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* 결과물 */}
        <div>
          <h2 className={s.contentTitle}>결과물</h2>
        </div>
      </div>
    </section>
  );
};
