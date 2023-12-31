import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft,faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { apikey } from "../PoplurMovies/Poplur";
import "./Actors.css";
function ActorsList({url}) {
  const [Actors, setActorsName] = useState();
  const { id: movieId } = useParams();
  const id = parseInt(movieId);
  const loadMovie = async () => {
    const response = await fetch(
      `${url}${id}/credits?${apikey}`
    );
    const Data = await response.json();
    return setActorsName(Data);
  };
  function scrollLeft(){
    let slider=document.getElementById('slider')
    slider.scrollLeft=slider.scrollLeft-350
  }
  function scrollRight(){
    let slider=document.getElementById('slider')
    slider.scrollLeft=slider.scrollLeft+350
  }
  useEffect(() => {
    loadMovie();
  }, []);
  return (
    <>
      {Actors === undefined ? (
        ""
      ) : (
        <div className="Actors">
        <div className="Scroll">
          <FontAwesomeIcon icon={faCaretLeft} onClick={scrollLeft}/>
        </div>
          <h2>actors</h2>
          <div className="actorsList" id="slider">
            {Actors.cast.map((actore) => (
                <div className="list" key={actore.id}>
                    <img
                    src={`https://image.tmdb.org/t/p/w500/${actore.profile_path}`}
                    alt=""
                    />
                    <p >{(actore.character).slice(0,10)}</p>
                    <p className="name">{actore.name}</p>
                    </div>
            ))}
          </div>
            <FontAwesomeIcon icon={faCaretRight} className="right" onClick={scrollRight}/>
        </div>
      )}
    </>
  );
}

export default ActorsList;
