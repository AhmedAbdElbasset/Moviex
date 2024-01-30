import { useState } from 'react'
import './App.css'
import HomePage from './Pages/homePage'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MoviePage from './Pages/MoviesPage'
import MovieDetalisPage from './Pages/DetailsPage'
import TvPage from './Pages/TvPage'
import TvDetailsPage from './Pages/TvDetailsPage'
import PricingPage from './Pages/PricingPage'
import ContactsPage from './Pages/Contacts'
function App() {

  const router=createBrowserRouter([
    {path:'/Moviex',element:<HomePage/>},
    {path:'/Moviex/movies',element:<MoviePage/>},
    {path:'/Moviex/movieDetalis/:id',element:<MovieDetalisPage/>},
    {path:'/Moviex/tv',element:<TvPage/>},
    {path:'/Moviex/showDetails/:id',element:<TvDetailsPage/>},
    {path:'/Moviex/pericing',element:<PricingPage/>},
    {path:'/Moviex/Contact',element:<ContactsPage/>}

  ])
  window.onscroll = function scroll (){
    console.log(this.scrollY)
}
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
