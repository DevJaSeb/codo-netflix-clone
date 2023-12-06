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
      ></CarouselSection>
      <CarouselSection
        title={"Top Rated Movies"}
        data={topRatedMovies}
      ></CarouselSection>
      <CarouselSection
        title={"Upcoming Movies"}
        data={upcomingMovies}
      ></CarouselSection>
      <CarouselSection
        title={"Popular Series"}
        data={popularSeries}
      ></CarouselSection>
      <CarouselSection
        title={"Top Rated Series"}
        data={topRatedSeries}
      ></CarouselSection>
      <CarouselSection
        title={"Airing Today Series"}
        data={airingTodaySeries}
      ></CarouselSection>
    </>
  );
};

export default HomeView;
