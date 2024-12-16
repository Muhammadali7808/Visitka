import { useMutation } from "@tanstack/react-query";
import { AttrValue } from "../../Types/data-types";
import request from "../../config/request";

export const 
useCreateAttribute = () => {
  return useMutation({
    mutationFn: (data: AttrValue | any) =>
      request.post("/attribute/", data).then((res) => res.data),
  });
};
