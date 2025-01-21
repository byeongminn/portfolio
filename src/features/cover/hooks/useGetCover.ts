import { useSuspenseQuery } from "@tanstack/react-query";
import { getCover, getCoverURL } from "@/features/cover/api/getCover";

export const useGetCover = () => {
  return useSuspenseQuery({
    queryKey: ["cover", getCoverURL],
    queryFn: async () => await getCover(),
  });
};
