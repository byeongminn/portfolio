import { API_BASE_URL } from "@/shared/constants";

type Feature = {
  title: string;
  descriptions: string[];
};

export type Role = {
  title: string;
  descriptions: string[];
};

export type Roles = {
  admin?: Role[];
  client?: Role[];
  default: Role[];
};

type Solution = {
  title: string;
  issues: string[];
  approaches: string[];
  outcomes: string[];
};

type Achievement = {
  title: string;
  descriptions: string[];
};

export type ProjectItem = {
  segment: string;
  title: string;
  description: string;
  period: string;
  outline: string[];
  stacks: string[];
  features: Feature[];
  roles: Roles;
  solutions: Solution[];
  achievements: Achievement[];
};

export type Project = Pick<
  ProjectItem,
  "segment" | "title" | "description" | "period" | "achievements" | "stacks"
>;

export type GetProjectsResponse = {
  projects: Project[];
};

export const getProjectsURL = `${API_BASE_URL}/api/projects`;

export const getProjects = async (): Promise<GetProjectsResponse> => {
  const response = await fetch(getProjectsURL);

  return response.json();
};
