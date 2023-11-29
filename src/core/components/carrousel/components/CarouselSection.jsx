import React from 'react'
import CarouselTitle from './CarouselTitle'
import { Carousel } from '../Carousel'
import CarouselSlide from './CarouselSlide'
import '../../../styles/carousel/carousel-slide.css'

const CarouselSection = ({title, data}) => {
  return (
    <>
        <CarouselTitle>{title}</CarouselTitle>
        <Carousel>
            {data?.map((e) => (
                <CarouselSlide key={e.id}>
                    <div className='carousel-slide'
                    style={{
                        backgroundImage: `url(${e.poster})`,
                    }}>
                    </div>
                </CarouselSlide>
            ))}
        </Carousel>    
    </>
  )
}

export default CarouselSection