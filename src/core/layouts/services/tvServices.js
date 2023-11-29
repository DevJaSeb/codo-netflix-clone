import { tmdbApi, tmdb_paths } from "../../dataSource/data_tmdb/tmdbApi";
import { tmdbAdapter } from "./adapters/tmdbAdapter";


export const getPopularSeries = async () => {
    const {data} = await tmdbApi(tmdb_paths.tv.popular);

    return tmdbAdapter(data);
};

export const getTopRatedSeries = async () => {
    const {data} = await tmdbApi(tmdb_paths.tv.top_rated);

    return tmdbAdapter(data);
};

export const getAiringTodaySeries = async () => {
    const {data} = await tmdbApi(tmdb_paths.tv.airing_today);

    return tmdbAdapter(data);
};