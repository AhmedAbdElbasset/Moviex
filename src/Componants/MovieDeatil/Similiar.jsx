import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apikey } from "../PoplurMovies/Poplur";
import "./Similiar.css";
function Similiar({onScroll,url,state}) {
  const [Similiars, setSimiliars] = useState();
  const { id: movieId } = useParams();
  const id = parseInt(movieId);
  const loadMovie = async () => {
    const response = await fetch(
      `${url}${id}/similar?${apikey}`
    );
    const Data = await response.json();
    return setSimiliars(Data);
  };
  useEffect(() => {
    loadMovie();
  }, []);
  return(
    <>
      {Similiars===undefined?'':
      <div className="similiar">
        <h2>Recommendations :</h2>
            <div  id="slider" className="List">
              {Similiars === undefined
                  ? ``
                  : Similiars.results.map(movie=>(
                  <Link to={`/Moviex/movieDetalis/${movie.id}`} className="box" key={movie.id}>
                      <div className="detail">
                      <p>Watch Now</p>
                      </div>
                      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} onClick={onScroll}/>
                  </Link>))}
            </div>
      </div>
      }
    
    </>
  )
}

export default Similiar