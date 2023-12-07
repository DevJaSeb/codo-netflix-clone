import React from "react";
import Nav from "../nav/Nav";
import CarouselSection from "../carrousel/components/CarouselSection";
import useMovieData from "../../hooks/useMovieData";

const SeriesView = () => {
  const { genre, seriesByGenre } = useMovieData();
  return (
    <>
      <Nav />
      <CarouselSection
        title={genre[0].name}
        data={seriesByGenre[0]}
      ></CarouselSection>
      <CarouselSection
        title={genre[1].name}
        data={seriesByGenre[1]}
      ></CarouselSection>
      <CarouselSection
        title={genre[2].name}
        data={seriesByGenre[2]}
      ></CarouselSection>
      <CarouselSection
        title={genre[3].name}
        data={seriesByGenre[3]}
      ></CarouselSection>
      <CarouselSection
        title={genre[4].name}
        data={seriesByGenre[4]}
      ></CarouselSection>
      <CarouselSection
        title={genre[5].name}
        data={seriesByGenre[5]}
      ></CarouselSection>
      <CarouselSection
        title={genre[6].name}
        data={seriesByGenre[6]}
      ></CarouselSection>
      <CarouselSection
        title={genre[7].name}
        data={seriesByGenre[7]}
      ></CarouselSection>
      <CarouselSection
        title={genre[8].name}
        data={seriesByGenre[8]}
      ></CarouselSection>      
      <CarouselSection
        title={genre[11].name}
        data={seriesByGenre[11]}
      ></CarouselSection>
    </>
  );
};

export default SeriesView;
