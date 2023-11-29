import {tmdbApi, tmdb_paths} from "../../dataSource/data_tmdb/tmdbApi";
import { tmdbAdapter } from "./adapters/tmdbAdapter";

export const getPopularMovies = async () => {
    const {data} = await tmdbApi(tmdb_paths.movies.popular);

    return tmdbAdapter(data);
};

export const getTopRatedMovies = async () => {
    const {data} = await tmdbApi(tmdb_paths.movies.top_rated);

    return tmdbAdapter(data);
};

export const getUpcomingMovies = async () => {
    const {data} = await tmdbApi(tmdb_paths.movies.upcoming);
    
    return tmdbAdapter(data);
};

