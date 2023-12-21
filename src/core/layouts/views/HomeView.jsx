import React from "react";
import Nav from "../../components/nav/Nav";
import Banner from "../../components/banner/Banner";
import CarouselSection from "../../components/carrousel/components/CarouselSection";
import useMovieData from "../../hooks/useMovieData";

const HomeView = () => {
  const {
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
  } = useMovieData();

  return (
    <>
      <Nav />
      <Banner />
      <CarouselSection
        title={"Popular Movies"}
        data={popularMovies}
        type={"movies"}
      ></CarouselSection>
      <CarouselSection
        title={"Top Rated Movies"}
        data={topRatedMovies}
        type={"movies"}
      ></CarouselSection>
      <CarouselSection
        title={"Upcoming Movies"}
        data={upcomingMovies}
        type={"movies"}
      ></CarouselSection>
      <CarouselSection
        title={"Popular Series"}
        data={popularSeries}
        type={"tvseries"}
      ></CarouselSection>
      <CarouselSection
        title={"Top Rated Series"}
        data={topRatedSeries}
        type={"tvseries"}
      ></CarouselSection>
      <CarouselSection
        title={"Airing Today Series"}
        data={airingTodaySeries}
        type={"tvseries"}
      ></CarouselSection>
    </>
  );
};

export default HomeView;
