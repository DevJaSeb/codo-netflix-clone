import { tmdbApi, tmdb_paths } from "../../dataSource/data_tmdb/tmdbApi";
import { genreAdaper } from "./adapters/genreAdapter";
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

export const getGenre = async () =>{
    const {data} = await tmdbApi(tmdb_paths.tv.genres);

    return genreAdaper(data);
}

export const getSerieGenre = async (genreId) =>{
    const {data} = await tmdbApi(tmdb_paths.tv.discover + genreId);

    return data;    
}

export const getSerieByGenre = async () =>{
    const genres = await getGenre();

    const seriesByGenre = await Promise.all( genres.map(async (genre) => {
        const series = await getSerieGenre(genre.id);

        return tmdbAdapter(series);
    }))

    return seriesByGenre;
}