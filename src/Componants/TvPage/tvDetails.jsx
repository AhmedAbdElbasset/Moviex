import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './tvDetails.css'
import { apikey } from "../PoplurMovies/Poplur";
function ShowDetails({url}) {
  const [tvShow, setTvShow] = useState();
  const { id: ShowId } = useParams();
  const id = parseInt(ShowId);

  const loadMovie = async () => {
    const response = await fetch(
      `${url}${id}?${apikey}`
    );
    const Data = await response.json();
    return setTvShow(Data);
  };
  useEffect(() => {
    loadMovie();
  }, [id]);
  return (
    <>
      {tvShow === undefined ? (
        ""
      ) : (
        <div className="Details">
          <img
            src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`}
            alt=""
            className="poster"
          />
          <div className="des">
              <div className="title">
                  <h2>{tvShow.name}</h2>
                  <p>{tvShow.number_of_seasons} S</p>
                  <span className="start">{(tvShow.first_air_date).slice(0,4)}   -</span>
                  <span className="end">{(tvShow.last_episode_to_air.air_date).slice(0,4)}</span>
                  <div className="genres">
                      {
                      tvShow.genres.map((genere)=>(
                      <span className="genere" key={genere.id}>{genere.name}</span>))
                      }
                  </div>
              </div>
            <div className="overView">
                <h2>Overview</h2>
                <p>{tvShow.overview}</p>
            </div>
            <div className="table">
            <div className="key">
                <p>Language :</p>
                <p>number of episodes :</p>
                <p>created by :</p>
                <p>episode run time :</p>
                <p>vote :</p>
            </div>
            <div className="value">
                <p>{tvShow.languages}</p>
                <p>{tvShow.number_of_episodes}  </p>
                <p>{tvShow.created_by.map((author)=>(<span key={author.id}>{author.name} ,</span>))} </p>
                <p>{tvShow.episode_run_time} min </p>
                <p>{Math.floor(tvShow.vote_average)} /10</p>
            </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShowDetails;