import { API_BASE_URL } from "@/shared/constants";

type About = {
  title: string;
  contents: string;
};

export type GetAboutResponse = {
  about: About[];
};

export const getAboutURL = `${API_BASE_URL}/api/about`;

export const getAbout = async (): Promise<GetAboutResponse> => {
  const response = await fetch(getAboutURL);

  return response.json();
};
