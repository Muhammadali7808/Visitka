import { useQuery } from "@tanstack/react-query"
import request from "../../config/request"

export const useBrandGetType = () => {
  return useQuery({
    queryKey:["get-data"],
    queryFn: () => request.get("/brand/").then((res) => res.data)
  })
}