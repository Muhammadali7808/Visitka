import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import request from "../../config/request";
export const useBrandCategory = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: any) =>
      request.patch(`/brand/${id}/`, data).then((res) => res.data),
    onSuccess: (_, id) => {
      client.invalidateQueries({ queryKey: ["get-data"] });
      client.invalidateQueries({ queryKey: ["get-sub-category"] });
      client.invalidateQueries({ queryKey: ["single-data", id] });
    },
  });
};
