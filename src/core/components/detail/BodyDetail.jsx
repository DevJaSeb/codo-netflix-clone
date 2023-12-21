import React from "react";
import useMovieData from "../../hooks/useMovieData";
import CarouselSection from "../carrousel/components/CarouselSection";

const BodyDetail = (props) => {
  const {description, rating,similarMovies} = props.details;
  console.log(similarMovies)
  return (
  <>
    <article>
      <span>⭐️ {rating}</span>
      <p>{description}</p>
      {similarMovies && (
          <CarouselSection
            data={similarMovies}
            type={"movies"}
          ></CarouselSection>
        )}
      <section></section>
    </article>
  </>
  );
};

export default BodyDetail;
