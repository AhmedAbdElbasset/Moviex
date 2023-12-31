import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apikey } from "../PoplurMovies/Poplur";
import "../MovieDeatil/Similiar.css";
function ShowSimiliar({onScroll,url,state}) {
  const [Similiars, setSimiliars] = useState();
  const { id: ShowID } = useParams();
  const Id = parseInt(ShowID);
  const loadShow= async() => {
    const response = await fetch(`${url}${Id}/similar?${apikey}`);
    const Data = await response.json();
    return setSimiliars(Data);
  };
  useEffect(() => {
    loadShow();
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
                <Link to={`/Moviex/showDetails/${movie.id}`} className="box" key={movie.id}>
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
export default ShowSimiliar