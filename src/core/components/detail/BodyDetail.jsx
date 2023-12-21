import React from "react";
import CarouselSection from "../carrousel/components/CarouselSection";
import "../../styles/views/detailView/components/bodyView.css";

const BodyDetail = (props) => {
  const { description, rating } = props.details;

  return (
    <>
      <article className="body-container">
        <span className="rating">⭐️ {rating}</span>
        <p className="description">{description}</p>
        <div className="carousel-body-container">
          <CarouselSection
            title={"Similar"}
            data={props.similar}
            type={props.type}
          ></CarouselSection>
        </div>
      </article>
    </>
  );
};

export default BodyDetail;
