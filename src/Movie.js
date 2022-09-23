import React, { useState, useEffect } from "react";

function Movie() {
    const [inputVal, setInputVal] = useState("");
    const [movieData, setMovieData] = useState([]);

    let dataUrl = `https://api.tvmaze.com/search/shows?q=${inputVal}`;

    const getData = async (url) => {
        try {
            let respone = await fetch(dataUrl);
            let resData = await respone.json();
            setMovieData(resData);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getData();
    }, [inputVal]);

    return (
        <>
            <div >
                <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)}
                 placeholder="Enter movie name here..."/>
            </div>
            <div className="wrapper">
              <div className="row row_name" >
                {movieData.map((element, index) => {
                  return (
                      <div className="card">
                          <h5 className="title">
                            {element.show.name}
                          </h5>
                        {element.show.image ?
                          (<img src={element.show.image.medium} class="poster"
                            alt={element.show.name != null ? element.show.name : "Not found"}
                          />) : (<div > <img src=" " alt="..."/></div>)
                        }
                          <div className="card_body">
                              {element.show.summary}
                          </div>
                      </div>
                      );
                  })}
                </div>
            </div>
        </>
    );
}

export default Movie;