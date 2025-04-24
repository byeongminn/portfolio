import Link from "next/link";
import { ProjectItem } from "@/features/projects/api/getProjects";
import * as s from "@/features/projects/components/Project/style.css";

type Params = Pick<ProjectItem, "solutions">;

export const Solutions = ({ solutions }: Params) => {
  return (
    <div className={s.sectionContainer}>
      <h2 className={s.sectionHeading}>🚀 문제 해결 사례</h2>
      {solutions.map(
        ({ title, issues, causes, approaches, outcomes, references }) => (
          <div key={title} className={s.solutionWrapper}>
            <h4 className={s.sectionTitle}>{title}</h4>
            <ul className={s.sectionList}>
              <h4 className={s.solutionType}>상황</h4>
              {issues.map((issue) => (
                <li key={issue} className={s.sectionItem}>
                  {issue}
                </li>
              ))}
            </ul>
            {causes && (
              <ul className={s.sectionList}>
                <h4 className={s.solutionType}>문제 원인</h4>
                {causes.map((cause) => (
                  <li key={cause} className={s.sectionItem}>
                    {cause}
                  </li>
                ))}
              </ul>
            )}
            <ul className={s.sectionList}>
              <h4 className={s.solutionType}>해결 방법</h4>
              {approaches.map((approach) => (
                <li key={approach} className={s.sectionItem}>
                  {approach}
                </li>
              ))}
            </ul>
            <ul className={s.sectionList}>
              <h4 className={s.solutionType}>결과</h4>
              {outcomes.map((outcome) => (
                <li key={outcome} className={s.sectionItem}>
                  {outcome}
                </li>
              ))}
            </ul>
            {references && (
              <ul className={s.sectionList}>
                <h4 className={s.solutionType}>관련 문서</h4>
                {references.map((reference) => (
                  <li key={reference.url} className={s.sectionItem}>
                    <Link
                      href={reference.url}
                      target="_blank"
                      className={s.solutionLink}
                    >
                      {reference.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )
      )}
    </div>
  );
};
