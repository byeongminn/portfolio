import {
  UseSuspenseQueryResult,
  useSuspenseQuery,
} from "@tanstack/react-query";
import {
  GetCoverResponse,
  getCover,
  getCoverURL,
} from "@/features/cover/api/getCover";

export const useGetCover = (): UseSuspenseQueryResult<
  GetCoverResponse,
  Error
> => {
  return useSuspenseQuery({
    queryKey: ["cover", getCoverURL],
    queryFn: async () => await getCover(),
  });
};
