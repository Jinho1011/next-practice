import { useQuery } from "react-query";
import { fetchDetail } from "../api/tmdb/detail";

export const useDetailQuery = (movie_id: number) => {
  return useQuery(["tmdb", "detail"], () => fetchDetail(movie_id));
};
