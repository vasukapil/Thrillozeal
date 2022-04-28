import React,{useState} from 'react'
import FAQ from '../FAQs/FAQ';
import { Trek } from '../Trek/Trek';
import Itinerary from '../Trek/Itinerary'
import './Fourbutton.css'

const Fourbutton = () => {
    const [active,setActive]=useState("first");
  return (
      <div className="full">
    <div className="button-container">
        <a className="a1" onClick={()=>setActive("first")}>Highlights</a>
        <a className="a2" onClick={()=>setActive("second")}>Itinerary</a>
        <a className="a3" onClick={()=>setActive("third")}>FAQs</a>
        <a className="a4" onClick={()=>setActive("fourth")}>Bookings</a>
        <a className="a5" onClick={()=>setActive("fifth")}>Reviews</a>
    </div>

    <div className="card-full">
        {active==="first" && <Trek/>}
        {active==="second" && <Itinerary/>}
        {active==="third" && <FAQ/>}
        {active==="fourth" && <Trek/>}
        {active==="fifth" && <Trek/>}
        
        
        
    </div>

    </div>
  )
}

export default Fourbutton