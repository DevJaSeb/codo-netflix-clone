import React from 'react'

const CarouselSlide = ({children, ...props}) => {
  return (
    <swiper-slide 
      {...props}>{children}
    </swiper-slide>
  )
}

export default CarouselSlide