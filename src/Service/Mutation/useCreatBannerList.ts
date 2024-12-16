import { useMutation } from "@tanstack/react-query";
import request from "../../config/request";

export const useCreateBannerList = () => {
  return useMutation({
    mutationFn: (data: FormData) =>
      request.post("/banner/", data).then((res) => res.data.data),
  });
};
