"use client";

import { useGetProjects } from "@/features/projects/hooks/useGetProjects";
import { ProjectItem } from "@/features/projects/components/Projects/ProjectItem";

export const Projects = () => {
  const {
    data: { projects },
  } = useGetProjects();

  console.log(projects);

  return (
    <section>
      {projects.map((project) => (
        <ProjectItem key={project.title} project={project} />
      ))}
    </section>
  );
};
