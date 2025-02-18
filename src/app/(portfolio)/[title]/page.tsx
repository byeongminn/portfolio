import { GetProjectItemRequestParams } from "@/features/projects/api/getProject";
import { Project } from "@/features/projects/components/Project";

export type ProjectPageParams = {
  params: Promise<GetProjectItemRequestParams>;
};

export default async function ProjectPage({ params }: ProjectPageParams) {
  const title = (await params).title;

  return <Project title={title} />;
}
