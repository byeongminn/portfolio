import { ProjectItem } from "@/features/projects/api/getProjects";
import { API_BASE_URL } from "@/shared/constants";

export type GetProjectItemRequestParams = {
  title: string;
};

export type GetProjectItemResponse = ProjectItem;

export const getProjectItemURL = `${API_BASE_URL}/api/projects/project/:title`;

export const getProjectItem = async (
  params: GetProjectItemRequestParams
): Promise<GetProjectItemResponse> => {
  const url = getProjectItemURL.replace(":title", params.title);

  const response = await fetch(url);

  return await response.json();
};
