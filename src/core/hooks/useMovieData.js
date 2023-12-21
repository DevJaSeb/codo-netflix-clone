import useSWR from "swr";
import {
  getDetailsMovie,
  getGenres,
  getMoviesByGenre,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../layouts/services/movieServices";
import {
  getAiringTodaySeries,
  getGenre,
  getPopularSeries,
  getSerieByGenre,
  getSerieGenre,
  getTopRatedSeries,
} from "../layouts/services/tvServices";

const useMovieData = () => {
  const {
    data: popularMovies,
    error: popularMoviesError,
    isLoading: popularMoviesLoading,
  } = useSWR("getPopularMovies", getPopularMovies);

  
  const {
    data: topRatedMovies,
    error: topRatedMoviesError,
    isLoading: topRatedMoviesLoading,
  } = useSWR("getTopRatedMovies", getTopRatedMovies);

  const {
    data: upcomingMovies,
    error: upcomingMoviesError,
    isLoading: upcomingMoviesLoading,
  } = useSWR("getUpcomingMovies", getUpcomingMovies);

  const {
    data: popularSeries,
    error: popularSeriesError,
    isLoading: popularSeriesLoading,
  } = useSWR("getPopularSeries", getPopularSeries);

  const {
    data: topRatedSeries,
    error: topRatedSeriesError,
    isLoading: topRatedSeriesLoading,
  } = useSWR("getTopRatedSeries", getTopRatedSeries);

  const {
    data: airingTodaySeries,
    error: airingTodaySeriesError,
    isLoading: airingTodaySeriesLoading,
  } = useSWR("getAiringTodaySeries", getAiringTodaySeries);

  const {
    data: genres,
    error: genresError,
    isLoading: genresLoading,
  } = useSWR("getGenres", getGenres);

  const {
    data: moviesByGenre,
    error: moviesByGenreError,
    isLoading: moviesByGenreLoading,
  } = useSWR("getMoviesByGenre", getMoviesByGenre);

  const {
    data: genre,
    error: genreError,
    isLoading: genreLoading,
  } = useSWR("getGenre", getGenre);

  const {
    data: seriesByGenre,
    error: seriesByGenreError,
    isLoading: seriesByGenreLoading,
  } = useSWR("getSeriesByGenre", getSerieByGenre )

  const{
    data: detailsMovie,
    error: detailsMovieError,
    isLoading: detailsMovieLoading,
  } = useSWR("12", getDetailsMovie)
  return {
    popularMovies,
    popularMoviesError,
    popularMoviesLoading,
    topRatedMovies,
    topRatedMoviesError,
    topRatedMoviesLoading,
    upcomingMovies,
    upcomingMoviesError,
    upcomingMoviesLoading,
    popularSeries,
    popularSeriesError,
    popularSeriesLoading,
    topRatedSeries,
    topRatedSeriesError,
    topRatedSeriesLoading,
    airingTodaySeries,
    airingTodaySeriesError,
    airingTodaySeriesLoading,
    genres,
    genresError,
    genresLoading,
    moviesByGenre,
    genre,
    seriesByGenre,
    detailsMovie
  };
};

export default useMovieData;
