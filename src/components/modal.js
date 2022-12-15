import React from "react";

function modal({ closeModal }) {

   
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
        </div>

        <div className="title">
          <h1>Book Your Slots here.</h1>
        </div>
        <div className="body">
          <form action="">
            <div className="inputDiv">
              <label htmlFor="name">Name of the Club : </label>
              <span>
                <input type="text" name="name" id="name" placeholder="Name of the Club."
                />
              </span>
            </div>
            
            <div className="inputDiv">
              <label htmlFor="date">Date Of Event : </label>
              <span>
                <input type="date" name="date" id="date" placeholder="Date of the Event"
                />
              </span>
            </div>
            
            <div className="inputDiv">
              <label htmlFor="venue">Venue of Event : </label>
              <span>
                <input type="text" name="venue" id="venue" placeholder="Venue of the Event"/>
              </span>
            </div>
            
            <div className="inputDiv">
              <label htmlFor="topic">Topic Of Event : </label>
              <span>
                <input type="text" name="topic" id="topic" placeholder="Topic of the Event"/>
              </span>
            </div>
          </form>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              closeModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button id="continueBtn">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default modal;
