import useSWR from "swr";
import {
  getGenres,
  getMoviesByGenre,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../layouts/services/movieServices";
import {
  getAiringTodaySeries,
  getPopularSeries,
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
  } = useSWR("getMoviesByGenre", getMoviesByGenre)
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
  };
};

export default useMovieData;
