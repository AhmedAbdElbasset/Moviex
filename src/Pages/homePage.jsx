import Landing from '../Componants/Landing/Landing'
import PoplurMovies from '../Componants/PoplurMovies/Poplur'
import OurServices from '../Componants/ourServices/ourServices'
import TopRated from '../Componants/TopRated/topRated'
import Watching from '../Componants/watching/Watching'
import Footer from '../Componants/Footer/Footer'
import { useState } from 'react'
function HomePage(){
    const[scroll,setScroll]=useState(false)
    return(
        <>
        <Landing/>
        <PoplurMovies/>
        <OurServices/>
        <TopRated/>
        <Watching/>
        <Footer/>
        </>
    )
}

export default HomePage