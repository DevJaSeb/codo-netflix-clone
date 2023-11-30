import React from 'react'
import HomeView from './core/layouts/views/HomeView'
import { register as registerSwiper } from 'swiper/element/bundle';
import LoginView from './core/layouts/views/LoginView';
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