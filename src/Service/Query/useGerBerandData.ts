import { useQuery } from "@tanstack/react-query";
import request from "../../config/request";

export const useGetBrandData = (id: string | undefined) => {
  return useQuery({
    queryKey: ["single-data", id],
    queryFn: () => request.get(`/brand/${id}/`).then((res) => res.data),
  });
};
