import { useMutation } from "@tanstack/react-query";
import request from "../../config/request";

export const useCreateBrandList = () => {
  return useMutation({
    mutationFn: (data: FormData) =>
      request.post("/brand/", data).then((res) => res.data.data),
  });
};
