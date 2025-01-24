import { Project } from "@/features/projects/api/getProjects";
import { Chip } from "@/features/projects/components/Chip";
import * as s from "./style.css";

type ProjectItemProps = {
  project: Project;
};

export const ProjectItem = ({ project }: ProjectItemProps) => {
  const { title, description, period, achievements, stacks } = project;

  return (
    <div className={s.container}>
      {/* 썸네일 */}
      <div className={s.thumbnailWrapper}></div>

      <div className={s.contentsWrapper}>
        <div className={s.infoWrapper}>
          {/* 프로젝트 기본 정보 */}
          <div>
            <h3 className={s.title}>{title}</h3>
            <h5 className={s.description}>{description}</h5>
          </div>

          {/* 디바이더 */}
          <div className={s.divider} />

          {/* 기간 및 주요성과 */}
          <div className={s.achievementsWrapper}>
            <h5>{period}</h5>
            {achievements.map(({ title, contents }) => (
              <div key={title}>
                <h5 className={s.achievementTitle}>{title}</h5>
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
          <button className={s.button}>
            <span>자세히 보기</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};
