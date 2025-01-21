import { API_BASE_URL } from "@/shared/constants";

type Stack = {
  iconUrl: string;
  name: string;
};

export type GetCoverResponse = {
  title: {
    p1: string;
    p2: string;
  };
  stacks: {
    frontend: Stack[];
    backend: Stack[];
    tools: Stack[];
  };
  info: {
    number: string;
    email: string;
  };
};

export const getCoverURL = `${API_BASE_URL}/api/cover`;

export const getCover = async (): Promise<GetCoverResponse> => {
  const response = await fetch(getCoverURL);

  return await response.json();
};
