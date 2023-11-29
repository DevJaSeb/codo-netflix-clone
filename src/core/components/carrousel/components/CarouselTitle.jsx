import React from 'react'
import '../../../styles/carousel/carousel-title.css'

const CarouselTitle = ({children, ...props}) => {
  return (
    <h2 className='carousel-title' {...props}>
        {children}            
    </h2>
  )
}

export default CarouselTitle