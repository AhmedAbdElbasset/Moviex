import { useState } from "react";
import Header from "../Componants/Header/Header";
import ActorsList from "../Componants/MovieDeatil/Actors";
import MovieDetail from "../Componants/MovieDeatil/MovieDetalis";
import Similiar from "../Componants/MovieDeatil/Similiar";
import Footer from "../Componants/Footer/Footer";
function MovieDetalisPage() {
  const [scroll, setScroll] = useState(false);
  function scrolle() {
    setScroll(true);
  }
  if (scroll === true) {
      window.location.reload(false)
  }
  return (
    <>
      <Header />
      <MovieDetail url={'https://api.themoviedb.org/3/movie/'}/>
      <ActorsList url={'https://api.themoviedb.org/3/movie/'}/>
      <Similiar onScroll={scrolle} url={'https://api.themoviedb.org/3/movie/'} state={'movieDetalis'}/>
      <Footer/>
    </>
  );
}

export default MovieDetalisPage;
