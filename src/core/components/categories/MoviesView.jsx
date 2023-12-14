import React from "react";
import Nav from "../nav/Nav";
import CarouselSection from "../carrousel/components/CarouselSection";
import useMovieData from "../../hooks/useMovieData";
import '../../styles/views/moviesView.css'

const MoviesView = () => {
  const {moviesByGenre, genres} = useMovieData();
  return(
    <>
      <Nav/>
      <CarouselSection
        title = {genres[0].name}
        data = {moviesByGenre[0]}
      ></CarouselSection>
      <CarouselSection
        title = {genres[1].name}
        data = {moviesByGenre[1]}
      ></CarouselSection>
      <CarouselSection
        title = {genres[2].name}
        data = {moviesByGenre[2]}
      ></CarouselSection>
      <CarouselSection
        title = {genres[3].name}
        data = {moviesByGenre[3]}
      ></CarouselSection>
      <CarouselSection
        title = {genres[4].name}
        data = {moviesByGenre[4]}
      ></CarouselSection>
      <CarouselSection
        title = {genres[5].name}
        data = {moviesByGenre[5]}
      ></CarouselSection>
      <CarouselSection
        title = {genres[6].name}
        data = {moviesByGenre[6]}
      ></CarouselSection>
      <CarouselSection
        title = {genres[7].name}
        data = {moviesByGenre[7]}
      ></CarouselSection>
      <CarouselSection
        title = {genres[8].name}
        data = {moviesByGenre[8]}
      ></CarouselSection>
      <CarouselSection
        title = {genres[9].name}
        data = {moviesByGenre[9]}
      ></CarouselSection>
      <CarouselSection
        title = {genres[10].name}
        data = {moviesByGenre[10]}
      ></CarouselSection>
      <CarouselSection
        title = {genres[12].name}
        data = {moviesByGenre[12]}
      ></CarouselSection>
      <CarouselSection
        title = {genres[13].name}
        data = {moviesByGenre[13]}
      ></CarouselSection>
      <CarouselSection
        title = {genres[14].name}
        data = {moviesByGenre[14]}
      ></CarouselSection>
      <CarouselSection
        title = {genres[15].name}
        data = {moviesByGenre[15]}
      ></CarouselSection>
      <CarouselSection
        title = {genres[16].name}
        data = {moviesByGenre[16]}
      ></CarouselSection>
      <CarouselSection
        title = {genres[17].name}
        data = {moviesByGenre[17]}
      ></CarouselSection>
      <CarouselSection
        title = {genres[18].name}
        data = {moviesByGenre[18]}
      ></CarouselSection>
    </>
  ) 
};

export default MoviesView;
