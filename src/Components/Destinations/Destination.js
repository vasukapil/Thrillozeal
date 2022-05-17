import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './Destination.css'

const Destination = () => {
  return (
      <>
      <div className="flex-destination">
      <span className="ek"></span>
      <span className="do"></span>
      <span className="teen"></span>
           <h1 style={{textAlign:'center'}} className="destination-heading">Top Trending Destinations</h1>
      
      </div>
    <div className="slider-splide">
        <Splide options={ { rewind: true,perPage:4 } } aria-label="React Splide Example">
      <SplideSlide>
        <img src="./Images/a.png" alt="Image 1"/>
        <div>
            <p>Auli - Chopta</p>
            <p>4D/3N</p>
            <img src="./Images/1.svg"></img><p>4.9/5</p>
            <p>₹ 4,499/- </p>
            <p>₹ 7,499/- </p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <img src="./Images/b.png" alt="Image 2"/>
        <div>
            <p>Auli</p>
            <p>3D/2N</p>
            <img src="./Images/1.svg"></img><p>4.9/5</p>
            <p>₹ 3,999/-  </p>
            <p>₹ 6,999/-  </p>
        </div>
      </SplideSlide>

      <SplideSlide>
        <img src="./Images/c.png" alt="Image 2"/>
        <div>
            <p>Chopta </p>
            <p>3D/2N</p>
            <img src="./Images/1.svg"></img><p>4.9/5</p>
            <p>₹ 3,999/-  </p>
            <p>₹ 6,999/-  </p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <img src="./Images/d.png" alt="Image 2"/>
        <div>
            <p>Rishikesh</p>
            <p>4D/3N</p>
            <img src="./Images/1.svg"></img>
            <p>4.9/5</p>
            <p>₹ 2,499/-</p>
            <p>₹ 4,999/-</p>
        </div>
      </SplideSlide>
    </Splide>
    </div>
    </>
  );
   
  
}

export default Destination