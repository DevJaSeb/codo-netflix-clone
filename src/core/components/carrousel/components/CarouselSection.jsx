import React from "react";
import CarouselTitle from "./CarouselTitle";
import { Carousel } from "../Carousel";
import CarouselSlide from "./CarouselSlide";
import "../../../styles/carousel/carousel-slide.css";
import { useNavigate } from "react-router-dom";

const CarouselSection = ({ title, data, type }) => {
  const navigate = useNavigate();
  return (
    <div className="carousel-container">
      <CarouselTitle>{title}</CarouselTitle>
      <Carousel>
        {data?.map((e) => (
          <CarouselSlide
            key={e.id}
            onClick={() => navigate(`/${type}/${e.id}`)}
          >
            <div
              className="carousel-slide"
              style={{
                backgroundImage: `url(${e.poster})`,
              }}
            ></div>
          </CarouselSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSection;

{
  /* <NavLink id={e.id} key={e.id} to={`/${type}/${e.id}`}></NavLink> */
}
