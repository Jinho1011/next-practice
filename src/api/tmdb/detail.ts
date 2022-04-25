import { TMDB_KEY } from "../key";
import { fetchDetailResponse } from "../../interfaces/tmdb/detail";
import { fetchTmdbError, fetchTmdbInvalid } from "../../interfaces/tmdb";

interface movieIdType {
  movie_id: number;
}

export const fetchDetail = async (
  movie_id: movieIdType
): Promise<fetchDetailResponse | fetchTmdbError | fetchTmdbInvalid> => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${TMDB_KEY}`;
  const response = await fetch(url);
  return await response.json();
};
