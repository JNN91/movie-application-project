import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w500";

const setClassRate = (vote) =>{
    if (vote >= 9) {
        return "yellow";
    } else if (vote >= 5) {
        return "red";
    } else {
        return "blue";
    }
};

const Movie=({title, poster_path, overview, vote_average}) =>(
    <div 
    className='Movie'>
        <img 
        src={IMG_API+poster_path} alt={title}/>
        <div 
        className='movie-info'>
            <h3>{title}</h3>
            <span className={`tag ${setClassRate(vote_average)
            }`}>
                {vote_average}
                </span>
        </div>
        <div className='movie over'>
            <h2>Overview</h2>
            <p>{overview}</p>
        </div>
    </div>
)

export default Movie;
