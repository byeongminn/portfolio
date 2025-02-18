import {
  UseSuspenseQueryResult,
  useSuspenseQuery,
} from "@tanstack/react-query";
import {
  GetProjectItemRequestParams,
  GetProjectItemResponse,
  getProjectItem,
  getProjectItemURL,
} from "@/features/projects/api/getProject";

type Params = GetProjectItemRequestParams;

export const useGetProject = ({
  title,
}: Params): UseSuspenseQueryResult<
  { project: GetProjectItemResponse },
  Error
> => {
  return useSuspenseQuery({
    queryKey: ["project", getProjectItemURL, title],
    queryFn: async () => await getProjectItem({ title }),
  });
};
