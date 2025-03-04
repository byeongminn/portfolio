import { ProjectItem } from "@/features/projects/api/getProjects";
import * as s from "@/features/projects/components/Project/style.css";

type Params = Pick<ProjectItem, "outline">;

export const Outline = ({ outline }: Params) => {
  return (
    <div className={s.sectionContainer}>
      <h2 className={s.sectionHeading}>📌 프로젝트 개요</h2>
      <ul className={s.sectionList}>
        {outline.map((o, idx) => (
          <li key={idx} className={s.sectionTitle}>
            {o}
          </li>
        ))}
      </ul>
    </div>
  );
};
