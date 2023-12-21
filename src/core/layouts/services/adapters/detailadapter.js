import { tmdb_paths } from "../../../dataSource/data_tmdb/tmdbApi";

export const detailAdapter = (response) => {
  console.log(response)
  return {
    id: response.id,
    title: response.title || response.name,
    poster: `${tmdb_paths.images.poster.url}${tmdb_paths.images.poster.sizes.original}${response.poster_path}`,
    backdrop: `${tmdb_paths.images.backdrop.url}${tmdb_paths.images.backdrop.sizes.original}${response.backdrop_path}`,
    description: response.overview,
    rating: response.vote_average,
    video: response.video,
  };
};
