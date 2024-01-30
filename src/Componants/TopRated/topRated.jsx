import { useState,useEffect } from 'react';
import './toprated.css'
import Starts from '../../assets/stars.png'
import { Link } from 'react-router-dom';

function TopRated(){  
    const [topRated, setTopRated] = useState();
    const Movies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=3d492f20a9ab24290ad57f4c08a7f2db`
      );
      const Data = await response.json();
      return setTopRated(Data.results);
    };
    useEffect(() => {
      Movies();
    }, []);
    return(
        <div className='topRated'>
            <p className='headLine'>ONLINE STREAMING</p>
            <h3>Top Rated Movies</h3>
            <div  id="slider" className="Movies">
              {topRated === undefined
                ? ``
                : topRated.slice(0,8).map(movie=>(
                  <div className="box" key={movie.id}>
                    <div className="detail">
                    <Link to={`movieDetalis/${movie.id}`}>Watch Now</Link>
                    <Link to={`movieDetalis/${movie.id}`} className='details'>Details</Link>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
                    </div>
                    <p className="name">{movie.title}</p>
                    <p className='type'>Adventure</p>
                    <p className="rate">{(movie.vote_average)}</p>
                    <p className="lan">{(movie.original_language)}</p>
                    <img src={Starts} alt="" className='starts'/>
                    <span className="hd">HD</span>
                  </div>))}
            </div>
            <Link to={'/movies'}> browse all movies</Link>
        </div>
    )
}

export default TopRated