import { tmdbApi, tmdb_paths } from "../../dataSource/data_tmdb/tmdbApi";
import { genreAdaper } from "./adapters/genreAdapter";
import { movieGenreAdapter } from "./adapters/movieGenreAdapter";
import { tmdbAdapter } from "./adapters/tmdbAdapter";

export const getPopularMovies = async () => {
  const { data } = await tmdbApi(tmdb_paths.movies.popular);

  return tmdbAdapter(data);
};

export const getTopRatedMovies = async () => {
  const { data } = await tmdbApi(tmdb_paths.movies.top_rated);

  return tmdbAdapter(data);
};

export const getUpcomingMovies = async () => {
  const { data } = await tmdbApi(tmdb_paths.movies.upcoming);

  return tmdbAdapter(data);
};

export const getGenres = async () => {
  const { data } = await tmdbApi(tmdb_paths.movies.genres);

  return genreAdaper(data);
};

export const getMoviesGenre = async (genreId) => {
  const { data } = await tmdbApi(tmdb_paths.movies.discover + genreId);

return data;
};

export const getMoviesByGenre = async () =>{
    const genres = await getGenres();

    const moviesByGenre = await Promise.all( genres.map(async (genre) =>{

        const movies = await getMoviesGenre(genre.id);
        
        return movieGenreAdapter(movies);
    }));
    return moviesByGenre;
}