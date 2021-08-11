import React, { useState,useEffect } from 'react'
import axios from './axios';
import './Row.css'
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"
const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl,isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const handleClick = (movie) => {
        if (trailerUrl){
            setTrailerUrl("");
        }
        else{

            movieTrailer(movie?.name || "") /** passing movie name movietrailer module returns a youtube trailer */
        // https://www.youtube.com/watch?v=QwVLObz0MGs&ab_channel=Netflix
            .then( (url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                // newURLSearchParams means URLSearchParams.get("V") it will give QwVLObz0MGs exaclty
                setTrailerUrl(urlParams.get("v"));

            })
            .catch((error) => console.log(error));
        }

    }

    /**need to pull info from backend while loading this row */
    useEffect(() => {
   async function fetchData() {
       const request = await axios.get(fetchUrl);
    //    console.log(request.data);
       setMovies(request.data.results);
       return request;
   }
   fetchData();
    }, [fetchUrl]); 
    /**[] means run once while row loads, if added movies i'e [movies] when movies changes it reruns */

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      }; 
    //   autoplay when loads in with a screen size of height 390 and width 640
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
               
                {movies.map(movie => (

              <img 
              key={movies.id}
              onClick={() => handleClick(movie)}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_url}${isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                ))}

            </div>
           {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}

        </div>
    )
}

export default Row

/**used rfce */

