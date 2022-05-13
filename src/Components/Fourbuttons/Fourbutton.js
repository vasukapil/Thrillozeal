import React,{useState} from 'react'
import FAQ from '../FAQs/FAQ';
import { Trek } from '../Trek/Trek';
import Itinerary from '../Trek/Itinerary'
import './Fourbutton.css'
import Review from '../Review';

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
        {active==="fifth" && <a href=""></a>}
        
        
        
    </div>

    </div>
  )
}

export default Fourbutton


{/* <div className="First-row">
<img className="resp" src="./Images/Rectangle 87.png"></img>
<img className="resp resp2" src="./Images/Rectangle 92.png"></img>
<img className="resp resp1" src="./Images/Rectangle 88.png"></img>
<img className="mobile-gallery" src="./Images/Rectangle 87.png"></img>
<img className="mobile-gallery" src="./Images/Rectangle 92.png"></img>
</div>

<div className="Second-row">
<img className="resp" src="./Images/Rectangle 91.png"></img>
<img className="resp resp2" src="./Images/Rectangle 89.png"></img>
<img className="resp resp1" src="./Images/Rectangle 90.png"></img>
<img className="mobile-gallery" src="./Images/Rectangle 91.png"></img>
<img className="mobile-gallery" src="./Images/Rectangle 89.png"></img>
</div>

<div className="Third-row">
<img className="resp" src="./Images/Rectangle 87.png"></img>
<img className="resp resp2" src="./Images/Rectangle 92.png"></img>
<img className="resp resp1" src="./Images/Rectangle 88.png"></img>
<img className="mobile-gallery" src="./Images/Rectangle 87.png"></img>
<img className="mobile-gallery" src="./Images/Rectangle 92.png"></img>
</div> */}
