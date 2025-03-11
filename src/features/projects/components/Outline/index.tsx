import Link from "next/link";
import { ProjectItem } from "@/features/projects/api/getProjects";
import * as s from "@/features/projects/components/Project/style.css";

type Params = Pick<ProjectItem, "outline" | "links">;

export const Outline = ({ outline, links }: Params) => {
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
      {links && links.length > 0 && (
        <ul className={s.sectionList}>
          {links.map((link, idx) => (
            <li key={idx} className={s.sectionTitle}>
              {link.text}:{" "}
              <Link href={link.url} className={s.url}>
                {link.url}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
