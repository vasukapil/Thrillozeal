import React from 'react';
import './Nainital.css'
import Header from './Header';
import NainitalImage from './img/nainitalimg.jpg';
import search from '../home/img/search.png';
import Card from './Card/Card';
import Filter from './Filter/Filter';
import Footer from '../Components/Footer/Footer';
import Destination from '../Components/Destinations/Destination';

function Nainital() {
  return (
    <div className='nainital'>
      <Header />
      <div className="nainital__body">
        <img src={NainitalImage} alt="" />
      <div className="nainital__body_first">
        <div className="smallHeader">
          <div className="header_name">
            Home
            {/* {">"}  */}
          </div>
          <div className="header_name">
            Cities
            {/* {"> "} */}
          </div>
          <div className="header_name active">
            Nainital
          </div>
        </div>
        <div className="smallContent">
          <div className="smallContent__head">
            ABOUT NAINITAL
          </div>
          <div className="smallContent__body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec posuere mauris, ut lacinia lectus. Donec ut enim mauris. Sed molestie lacinia neque, in consequat turpis interdum nec. Quisque elit mi, suscipit id tincidunt ac, scelerisque eu nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In sodales ac orci quis finibus. Nullam id tortor non elit laoreet ultrices vitae et quam. Proin vulputate neque a lacus consequat, a condimentum mauris vehicula. Donec dapibus, est porttitor porta feugiat, purus neque blandit neque, et porttitor lacus enim eget elit. Curabitur lacinia eleifend libero vel ultrices.
          </div>
        </div>
        <div className="Read__More">
          Read  More
        </div>
        <div className="nainitalBody__input">
          <img src={search} alt="" />
          <input type="" placeholder='Search...'/>
          <div className=''>
          49 Packages Found
          </div>
        </div>
      </div>
      <div className="nainital__body_second">
      <div className="nainital__body_secondIn">
      <div className="nainital__filter">
         <Filter/>
         </div>
         <div className="nainital__card_out">
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
         </div>
      </div>
      </div>
      </div>
      {/* <Destination/> */}
      <Footer/>
    </div>
  )
}

export default Nainital