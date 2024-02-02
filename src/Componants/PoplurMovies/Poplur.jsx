import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft,faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { motion,useScroll,useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import "./Poplur.css";

 export const apikey = "api_key=3d492f20a9ab24290ad57f4c08a7f2db";
function PoplurMovies() {
  const [movies, setMovies] = useState();
  const Movies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=3d492f20a9ab24290ad57f4c08a7f2db`
    );
    const Data = await response.json();
    return setMovies(Data.results);
  };
  useEffect(() => {
    Movies();
  }, []);
  function scrollLeft(){
    let slider=document.getElementById('slider')
    slider.scrollLeft=slider.scrollLeft-300
  }
  function scrollRight(){
    let slider=document.getElementById('slider')
    slider.scrollLeft=slider.scrollLeft+300
  }
  return (
    <div className="poplurMovies">
      <div className="intro">
        <p>ONLINE STREAMING</p>
        <h3>Poplur Movies</h3>
        <div className="Scroll">
          <FontAwesomeIcon icon={faCaretLeft} onClick={scrollLeft}/>
        </div>

      </div>
      <div  id="slider" className="Movies">
        {movies === undefined
          ? ``
          : movies.map(movie=>(
            <div className="box" key={movie.id}>
              <Link to={`movieDetalis/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
              </Link>
              <p className="name">{movie.title}</p>
              <p className="year">{(movie.release_date).slice(0,4)}</p>
              <p className="rate">{(movie.vote_average)}</p>
              <span className="hd">HD</span>
            </div>))
            }
      </div>
      
      <FontAwesomeIcon icon={faCaretRight} className="right" onClick={scrollRight}/>
    </div>
  );
}

export default PoplurMovies;
