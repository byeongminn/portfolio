import Link from "next/link";
import { Project } from "@/features/projects/api/getProjects";
import { Chip } from "@/features/projects/components/Chip";
import * as s from "./style.css";

type ProjectItemProps = {
  project: Project;
};

export const ProjectItem = ({ project }: ProjectItemProps) => {
  const { segment, title, description, period, achievements, stacks } = project;

  return (
    <div className={s.container}>
      {/* 썸네일 */}
      <div className={s.thumbnailWrapper}></div>

      <div className={s.contentsWrapper}>
        <div className={s.infoWrapper}>
          {/* 프로젝트 기본 정보 */}
          <div>
            <h2 className={s.title}>{title}</h2>
            <h4 className={s.description}>{description}</h4>
          </div>

          {/* 디바이더 */}
          <div className={s.divider} />

          {/* 기간 및 주요성과 */}
          <div className={s.achievementsWrapper}>
            <h4>{period}</h4>
            {achievements.map(({ title, contents }) => (
              <div key={title}>
                <h4 className={s.achievementTitle}>{title}</h4>
                {contents.map((content) => (
                  <p key={content} className={s.achievementContents}>
                    {content}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 기술스택 */}
        <div className={s.stacksWrapper}>
          {stacks.map((stack) => (
            <Chip key={stack}>{stack}</Chip>
          ))}
        </div>

        {/* 자세히보기 버튼 */}
        <div className={s.buttonWrapper}>
          <Link className={s.button} href={`/${segment}`} scroll={false}>
            <span>자세히 보기</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
