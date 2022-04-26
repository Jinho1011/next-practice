import { useQuery } from "react-query";
import { fetchPopular } from "../api/tmdb/popular";

export const usePopularQuery = () => {
  return useQuery(["tmdb", "popular"], () => fetchPopular());
};
