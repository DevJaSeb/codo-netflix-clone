import {  useRef } from 'react';


export const Carousel = ({children}) => {
  const swiperElRef = useRef(null);

  return (
    <swiper-container
      ref={swiperElRef}
      loop
      slides-per-view="6"
      navigation="true"
    >
      {children}
    </swiper-container>
  );
};