import React,{useState,useEffect}from "react";

import Movie from './component/MovieBox';

const URL_API="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f6623a5a4e696bc6c4435deec3dded06&page=1";

const SEARCH_API ="https://api.themoviedb.org/3/search/movie?&api_key=f6623a5a4e696bc6c4435deec3dded06&query=";
    

function App () {
  const [movie, setMovie] =useState([]);
  const [searchItem,setSearchItem]=useState('');

  useEffect(()=>{
    getMovie(URL_API)
 }, []);

const getMovie = (API) => {
  fetch(URL_API)
     .then((res)=>res.json())
     .then((data) => {
      console.log(data)
           setMovie(data.results);
    });
}

 const handleSubmit = (e) =>{
  e.preventDefault();
   
  fetch(SEARCH_API + searchItem)
    .then((res)=>res.json())
    .then((data) => {
        setMovie(data.results);
 });
   setSearchItem('');

 }

 const handleOnChange = (e) =>{
  setSearchItem(e.target.value);
 }


  return (
  <div>
      <header>
        <form onSubmit={handleSubmit}>
        <input 
        className="search" 
        type="search"
         placeholder="search..."
         value={searchItem}
         onChange={handleOnChange}
          />
          </form>

        </header>
    <div 
    className="movie-container">
      {movie.map((movie)=> 
        <Movie key={movie.id} {...movie}/>
      )}
    </div>
    </div>
  )
}

export default App;
