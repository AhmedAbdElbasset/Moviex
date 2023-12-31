import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./MovieDetails.css";
import { apikey } from "../PoplurMovies/Poplur";
function MovieDetail({url}) {
  const [movie, setMovie] = useState();
  const { id: movieId } = useParams();
  const id = parseInt(movieId);
  function timeConvert(n){
    let hours=(n/60)
    let rhours=Math.floor(hours)
    let minutes=(hours - rhours)*60
    let rminutes=Math.round(minutes)
    return (rhours + 'h'+ rminutes + 'min')

  }
  const loadMovie = async () => {
    const response = await fetch(
      `${url}${id}?${apikey}`
    );
    const Data = await response.json();
    return setMovie(Data);
  };
  useEffect(() => {
    loadMovie();
  }, [id]);
  return (
    <>
      {movie === undefined ? (
        ""
      ) : (
        <div className="Details">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
            className="poster"
          />
          <div className="des">
            <div className="title">
                <h2>{movie.title}</h2>
                <p>{(movie.release_date).slice(0,4)}</p>
                <span>{timeConvert(movie.runtime)}</span>
                <div className="genres">
                    {
                    movie.genres.map((genere)=>(
                    <span className="genere" key={genere.id}>{genere.name}</span>))
                    }
                </div>
            </div>
            <div className="overView">
                <h2>Overview</h2>
                <p>{movie.overview}</p>
            </div>
            <div className="table">
            <div className="key">
                <p>Language :</p>
                <p>Budget :</p>
                <p>revenue :</p>
                <p>vote :</p>
            </div>
            <div className="value">
                <p>{movie.original_language}</p>
                <p>{movie.budget}  $</p>
                <p>{movie.revenue} $</p>
                <p>{Math.floor(movie.vote_average)} /10</p>
            </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetail;
