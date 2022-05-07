import { useQuery, UseQueryResult } from "react-query";
import { fetchTrending } from "../api/tmdb/trending";
import { fetchTmdbError } from "../interfaces/tmdb";
import { fetchTrendingResponse } from "../interfaces/tmdb/trending";

export const useTrendingQuery = (
  media_type: "all" | "movie" | "tv" | "person",
  time_window: "day" | "week"
): UseQueryResult<fetchTrendingResponse, fetchTmdbError> => {
  return useQuery(["tmdb", "trending"], () =>
    fetchTrending(media_type, time_window)
  );
};
