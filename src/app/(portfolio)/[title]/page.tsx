import { GetProjectItemRequestParams } from "@/features/projects/api/getProject";

export type ProjectPageParams = {
  params: Promise<GetProjectItemRequestParams>;
};

export default async function ProjectPage({ params }: ProjectPageParams) {
  const title = (await params).title;

  return <div>Project: {title}</div>;
}
