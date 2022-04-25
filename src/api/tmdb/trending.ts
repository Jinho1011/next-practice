import { TMDB_KEY } from "../key";
import { fetchTrendingResponse } from "../../interfaces/tmdb/trending";
import { fetchTmdbError, fetchTmdbInvalid } from "../../interfaces/tmdb";

interface mediaType {
  media_type: "all" | "movie" | "tv" | "person";
}

interface timeType {
  time_window: "day" | "week";
}

export const fetchTrending = async (
  media_type: mediaType,
  time_window: timeType
): Promise<fetchTrendingResponse | fetchTmdbError | fetchTmdbInvalid> => {
  const url = `https://api.themoviedb.org/3/trending/${media_type}/${time_window}?api_key=${TMDB_KEY}`;
  const response = await fetch(url);
  return await response.json();
};
