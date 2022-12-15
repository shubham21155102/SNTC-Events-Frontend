import cops from "../components/images/cops.png";

export default function club(props){

 
    return(
        <div className="card2">
        <h2 className="clubName">{props.name}</h2>
        <div className="card3">
          <div className="image">
          <img src={cops} alt="" />
          </div>
          
        
          <div className="venue">
            <p>Workshop Name : {props.workshop}</p>
            <p>Venue : {props.venue}</p>
          </div>
          <div className="time">
           Time : {props.time}
          </div>
          </div>
          
        </div>
      
    );
}