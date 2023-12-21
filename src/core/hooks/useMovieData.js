import useSWR from "swr";
import {
  getDetailsMovie,
  getDetailsSeries,
  getGenres,
  getMoviesByGenre,
  getPopularMovies,
  getSimilarMovies,
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

const useMovieData = (id) => {
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
  } = useSWR("/movie/"+id, getDetailsMovie)

  const{
    data:detailsSerie,
    error:detailsSerieError,
    isLoading:detailsSerieLoading
  } = useSWR("/tv/"+id,getDetailsSeries)

  const{
    data:similarMovies,
    error:similarMoviesError,
    isLoading:similarMoviesLoading
  } = useSWR("/movie/"+id+"/similar",getSimilarMovies)

  const{
    data:similarSeries,
    error:similarSeriesError,
    isLoading:similarSeriesLoading
  } = useSWR("/tv/"+id+"/similar",getSimilarMovies)


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
    detailsMovie,
    detailsMovieLoading,
    detailsSerie,
    detailsSerieLoading,
    similarMovies,
    similarSeries   
  };
};

export default useMovieData;

// separalo en 3 hooks
