import { ProjectItem } from "@/features/projects/api/getProjects";
import * as s from "@/features/projects/components/Project/style.css";

type Params = Pick<ProjectItem, "features">;

export const Features = ({ features }: Params) => {
  return (
    <div className={s.sectionContainer}>
      <h2 className={s.sectionHeading}>⚙️ 주요 기능</h2>
      {features.map(({ title, descriptions }) => (
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
