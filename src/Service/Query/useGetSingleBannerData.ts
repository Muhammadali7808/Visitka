import { useQuery } from "@tanstack/react-query";
import request from "../../config/request";

export const useGetSingleBannerData = (id: string | undefined) => {
  return useQuery({
    queryKey: ["single-data",id],
    queryFn: () => request.get(`/banner/${id}/`).then((res) => res.data),
  });
};
