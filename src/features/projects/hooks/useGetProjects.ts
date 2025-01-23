import {
  UseSuspenseQueryResult,
  useSuspenseQuery,
} from "@tanstack/react-query";
import {
  GetProjectsResponse,
  getProjects,
  getProjectsURL,
} from "@/features/projects/api/getProjects";

export const useGetProjects = (): UseSuspenseQueryResult<
  GetProjectsResponse,
  Error
> => {
  return useSuspenseQuery({
    queryKey: ["projects", getProjectsURL],
    queryFn: async () => await getProjects(),
  });
};
