import { API_BASE_URL } from "@/shared/constants";

export type Project = {
  segment: string;
  title: string;
  description: string;
  period: string;
  achievements: {
    title: string;
    contents: string[];
  }[];
  stacks: string[];
};

export type GetProjectsResponse = {
  projects: Project[];
};

export const getProjectsURL = `${API_BASE_URL}/api/projects`;

export const getProjects = async (): Promise<GetProjectsResponse> => {
  const response = await fetch(getProjectsURL);

  return response.json();
};
