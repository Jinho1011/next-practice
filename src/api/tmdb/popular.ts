import { TMDB_KEY } from "../key";
import { fetchPopularResponse } from "../../interfaces/tmdb/popular";
import { fetchTmdbError, fetchTmdbInvalid } from "../../interfaces/tmdb";

export const fetchTrending = async (): Promise<
  fetchPopularResponse | fetchTmdbError | fetchTmdbInvalid
> => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_KEY}`;
  const response = await fetch(url);
  return await response.json();
};
