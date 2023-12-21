import React from "react";
import CarouselTitle from "./CarouselTitle";
import { Carousel } from "../Carousel";
import CarouselSlide from "./CarouselSlide";
import "../../../styles/carousel/carousel-slide.css";
import { Link } from "react-router-dom";

const CarouselSection = ({ title, data, type }) => {
  return (
    <>
      <CarouselTitle>{title}</CarouselTitle>
      <Carousel>
        {data?.map((e) => (
          <Link id={e.id} key={e.id} to={`/${type}/${e.id}`}>
            <CarouselSlide key={e.id}>
              <div
                className="carousel-slide"
                style={{
                  backgroundImage: `url(${e.poster})`,
                }}
              ></div>
            </CarouselSlide>
          </Link>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselSection;
