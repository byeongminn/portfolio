import { ProjectItem } from "@/features/projects/api/getProjects";
import * as s from "@/features/projects/components/Project/style.css";

type Params = Pick<ProjectItem, "achievements">;

export const Achievements = ({ achievements }: Params) => {
  return (
    <div className={s.sectionContainer}>
      <h2 className={s.sectionHeading}>🏆 성과 및 결과</h2>
      {achievements.map(({ title, descriptions }) => (
        <div key={title}>
          <h4 className={s.sectionTitle}>{title}</h4>
          <ul className={s.sectionList}>
            {descriptions.map((description) => (
              <li key={description} className={s.sectionItem}>
                {description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
