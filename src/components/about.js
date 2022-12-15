import React from "react";
import Club from './club'
import data from './data/data.json'

export default function About(props) {
  return (
    <>
    <div className="card">
      <h1 className="date">{props.date}</h1>

      {data["15_december_2022"].map((item)=>{
        return(
          <Club 
            id={item.id}
            name={item.clubName}
            src={item.clubImage}
            workshop={item.workshop}
            venue={item.venue}
            time={item.time}/>
        )
      })}
     
    </div>
    </>
  );
}
