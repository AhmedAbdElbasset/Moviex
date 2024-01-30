import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import '../MoviesPage/Movies.css'
function TvList(){
    const [tvShows, setTvShows] = useState();
    const TvList = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=3d492f20a9ab24290ad57f4c08a7f2db`
      );
      const Data = await response.json();
      return setTvShows(Data.results);
    };
    useEffect(() => {
        TvList();
    }, []);
    return (
      <div className="movies">
        <p className="headLine">ONLINE STREAMING</p>
        <h3> Tv Shows</h3>
        <div id="slider" className="List">
          {tvShows === undefined
            ? ``
            : tvShows.map((show) => (
                <Link
                  to={`/Moviex/showDetails/${show.id}`}
                  className="box"
                  key={show.id}
                >
                  <div className="detail">
                    <p>Watch Now</p>
                  </div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
                  />
                </Link>
              ))}
        </div>
      </div>
    );
  }
  

export default TvList