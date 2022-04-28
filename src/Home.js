import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Gallery from "./Gallery/Gallery";
import Card from "./Components/Card/Card";
import Fourbutton from "./Components/Fourbuttons/Fourbutton";

const Home = () => {
    return (
      <div>
           <Navbar/>
           <Gallery/>
           <Card/>
           <Fourbutton/>
     </div>
    )
}
export default Home