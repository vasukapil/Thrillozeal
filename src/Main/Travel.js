import React from 'react'
import './Travel.css'

const Travel = () => {
  return (
    <div className="Travel-Container">
          <div className="flex-destination">
        <span className="ek"></span>
        <span className="do"></span>
        <span className="teen"></span>
        <h1 style={{ textAlign: "center" }} className="destination-heading">
          Travel Style
        </h1>
      </div>

      <div className="travel-img-container">
          <div className="column">
          <img style={{width:'170px',height:'170px'}} src="./Images/couples.png"></img>
          </div>
          <div className="column">
          <img style={{width:'170px',height:'170px'}}src="./Images/friends.png"></img>
          </div>
          <div className="column">
          <img style={{width:'170px',height:'170px'}}src="./Images/family.png"></img>
          </div>
          <div className="column">
          <img style={{width:'170px',height:'170px'}}src="./Images/solo.png"></img>
          </div>
          <div className="column">
              
         
          <img style={{width:'170px',height:'170px'}}src="./Images/coorporate.png"></img>
          </div>
          <div className="column">
          <img style={{width:'170px',height:'170px'}}src="./Images/school.png"></img>
          </div>
         
            <div className="column">
            <img style={{width:'170px',height:'170px'}}src="./Images/work.png"></img>
            </div>
            <div className="column">

          <img style={{width:'170px',height:'170px'}}src="./Images/bike.png"></img>
            </div>
      </div>
    </div>
  )
}

export default Travel