import { useQuery } from "@tanstack/react-query"
import request from "../../config/request"

export const useBannerGetType = () => {
  return useQuery({
    queryKey:["get-data"],
    queryFn: () => request.get("/banner/").then((res) => res.data)
  })
}