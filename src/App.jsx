import { useState,useEffect } from 'react'
import './App.css'
import HomePage from './Pages/homePage'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MoviePage from './Pages/MoviesPage'
import MovieDetalisPage from './Pages/DetailsPage'
import TvPage from './Pages/TvPage'
import TvDetailsPage from './Pages/TvDetailsPage'
import PricingPage from './Pages/PricingPage'
import ContactsPage from './Pages/Contacts'
import { motion,useScroll,useTransform } from "framer-motion";
function App() {
  const {scrollYProgress }=useScroll()
  console.log(scrollYProgress )

  const router=createBrowserRouter([
    {path:'/Moviex',element:<HomePage/>},
    {path:'/Moviex/movies',element:<MoviePage/>},
    {path:'/Moviex/movieDetalis/:id',element:<MovieDetalisPage/>},
    {path:'/Moviex/tv',element:<TvPage/>},
    {path:'/Moviex/showDetails/:id',element:<TvDetailsPage/>},
    {path:'/Moviex/pericing',element:<PricingPage/>},
    {path:'/Moviex/Contact',element:<ContactsPage/>}

  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
