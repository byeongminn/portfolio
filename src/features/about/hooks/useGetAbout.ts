import {
  UseSuspenseQueryResult,
  useSuspenseQuery,
} from "@tanstack/react-query";
import {
  GetAboutResponse,
  getAbout,
  getAboutURL,
} from "@/features/about/api/getAbout";

export const useGetAbout = (): UseSuspenseQueryResult<
  GetAboutResponse,
  Error
> => {
  return useSuspenseQuery({
    queryKey: ["about", getAboutURL],
    queryFn: async () => await getAbout(),
  });
};
