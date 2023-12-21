import { useRef } from "react";

export const Carousel = ({ children }) => {
  const swiperElRef = useRef(null);

  return (
    <swiper-container
      id = "swiper"
      ref={swiperElRef}
      loop ={true}
      slides-per-view="6"
      navigation="true"
    >
      {children}
    </swiper-container>
  );
};
