import React, { useState, useEffect } from "react";

function Actor() {
  const [inputVal, setInputVal] = useState("");
  const [actorsData, setActorsData] = useState([]);

  let dataUrl = `https://api.tvmaze.com/search/people?q=${inputVal}`;

    const getActorsData = async () => {
        try {
        let respone = await fetch(dataUrl);
        let resData = await respone.json();
        console.log(resData)
        setActorsData(resData);
        } catch (error) {
        console.log(error);
        }
        
    };
    console.log(getActorsData)
    useEffect(() => {
        getActorsData();
    }, [inputVal]);
  return (
    <>
        <div >
            <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)}
             placeholder="Enter actor name here...."/>
        </div>
      <section>
      <div className="wrapper">
         <div className="row row_name" >
            {actorsData.map((element) => {
              return (
                  <div className="card">
                    <h5 className="title">{element.person.name} </h5>
                    {element.person.image ? (
                      <img src={element.person.image.medium} class="poster"
                        alt={element.person.name != null
                            ? element.person.name: "Not found" }
                      />
                    ) : ( <div ><img src="" alt="..."/></div>)}
                </div>
                
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Actor;