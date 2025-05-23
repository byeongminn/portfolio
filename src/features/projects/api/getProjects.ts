import { API_BASE_URL } from "@/shared/constants";

type Thumbnail = {
  src: string;
  alt: string;
  width: number;
  height: number;
  backgroundColor: string;
};

type Link = {
  text: string;
  url: string;
};

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
  causes?: string[];
  approaches: string[];
  outcomes: string[];
  references?: {
    label: string;
    url: string;
  }[];
};

type Achievement = {
  title: string;
  descriptions: string[];
};

export type ProjectItem = {
  segment: string;
  thumbnail: Thumbnail;
  title: string;
  description: string;
  period: string;
  outline: string[];
  links?: Link[];
  stacks: string[];
  features: Feature[];
  roles: Roles;
  solutions: Solution[];
  achievements: Achievement[];
};

export type Project = Pick<
  ProjectItem,
  | "segment"
  | "thumbnail"
  | "title"
  | "description"
  | "period"
  | "achievements"
  | "stacks"
>;

export type GetProjectsResponse = {
  projects: Project[];
};

export const getProjectsURL = `${API_BASE_URL}/api/projects`;

export const getProjects = async (): Promise<GetProjectsResponse> => {
  const response = await fetch(getProjectsURL);

  return await response.json();
};
