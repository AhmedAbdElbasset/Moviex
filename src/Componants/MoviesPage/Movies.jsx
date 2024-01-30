import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Movies.css";
import ReactPaginate from "react-paginate"

function MoviesList() {
  const [num, setNum] = useState(0);
  const [movies, setMovies] = useState();
  const MoviesLise = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=3d492f20a9ab24290ad57f4c08a7f2db`
    );
    const Data = await response.json();
    return setMovies(Data.results);
  };
  useEffect(() => {
    MoviesLise();
  }, []);
  function ChangeHandler(data) {
    console.log(data.selected);
  }
  return (
    <div className="movies">
      <p className="headLine">ONLINE STREAMING</p>
      <h3>New Release Movies</h3>
      <div id="slider" className="List">
        {movies === undefined
          ? ``
          : movies.map((movie) => (
              <Link
                to={`/Moviex/movieDetalis/${movie.id}`}
                className="box"
                key={movie.id}
              >
                <div className="detail">
                  <p>Watch Now</p>
                </div>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
              </Link>
            ))}
      </div>
    </div>
  );
}

export default MoviesList;
