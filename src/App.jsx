import React from 'react'
import HomeView from './core/layouts/views/HomeView'
import { register as registerSwiper } from 'swiper/element/bundle';
registerSwiper();


const App = () => {
  return (
    <>
      <HomeView/>
    </>
  )
}

export default App