
import React from "react";
import { useState } from "react";
import Actor from "./Actor";
import Movie from "./Movie";
import "./App.css" ;


function App(){

    const [actor, setActor] = useState();
    const [movie, setMovie] = useState();

    const setActorName = () => {
        setMovie(false);
        setActor(true);
    }

    const setMovieName = () => {
        setActor(false);
        setMovie(true);
       
    }
    return (
        <>
          <div className="main">
            <div className="container">
              <h1 > TV Maze Search App </h1>
            </div> 
            <div className="container">
                        <div>
                            <input type="radio" name="search" onChange={() => setMovieName()}  /> Movie Name
                            <input type="radio" name="search" onChange={() => setActorName()} /> Actor Name
                        </div>
            </div>
            {actor ? <Actor /> : ""}
            {movie ? <Movie /> : ""}
          </div>
      </>
  );
}
export default App;