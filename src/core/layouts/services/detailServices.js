import { tmdbApi, tmdb_paths } from "../../dataSource/data_tmdb/tmdbApi";
import { tmdbAdapter } from "./adapters/tmdbAdapter";

export const getDetailsMovie = async (id) => {
  const { data } = await tmdbApi(tmdb_paths.movies.movie + id);

  return tmdbAdapter(data);
};
