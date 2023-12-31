import { useState } from "react";
import Header from "../Componants/Header/Header";
import ActorsList from "../Componants/MovieDeatil/Actors";
import ShowDetails from "../Componants/TvPage/tvDetails";
import ShowSimiliar from "../Componants/TvPage/tvSimiliar";
import Footer from "../Componants/Footer/Footer";
function TvDetailsPage() {
  const [scroll, setScroll] = useState(false);
  function scrolle() {
    setScroll(true);
  }
  if (scroll === true) {
      window.location.reload(false)
  }
  const url='https://api.themoviedb.org/3/tv/'
  return (
    <>
      <Header />
      <ShowDetails url={url}/>
      <ActorsList url={url}/>
      <ShowSimiliar onScroll={scrolle} url={url}/>
      <Footer/>

    </>
  );
}

export default TvDetailsPage