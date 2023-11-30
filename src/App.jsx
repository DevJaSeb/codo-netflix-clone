import React from 'react'
import { register as registerSwiper } from 'swiper/element/bundle';
import RootProvider from './core/providers/RootProvider';
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './core/routes/AppRouter';
registerSwiper();


const App = () => {
  return (
    <>
      <RootProvider>
        <RouterProvider router={AppRouter} />
      </RootProvider>
    </>
  )
}

export default App