import { TMDB_KEY } from "../key";
import { fetchTrendingResponse } from "../../interfaces/tmdb/trending";

export const fetchTrending = async (
  media_type: "all" | "movie" | "tv" | "person",
  time_window: "day" | "week"
): Promise<fetchTrendingResponse> => {
  const url = `https://api.themoviedb.org/3/trending/${media_type}/${time_window}?api_key=${TMDB_KEY}`;
  const response = await fetch(url);
  return await response.json();
};
