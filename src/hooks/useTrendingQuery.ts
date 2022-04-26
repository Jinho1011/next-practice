import { useQuery } from "react-query";
import { fetchDetail } from "../api/tmdb/detail";
import { fetchTrending } from "../api/tmdb/trending";

export const useTrendingQuery = (
  media_type: "all" | "movie" | "tv" | "person",
  time_window: "day" | "week"
) => {
  return useQuery(["tmdb", "trending"], () =>
    fetchTrending(media_type, time_window)
  );
};
