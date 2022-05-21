import React from 'react';
import Gallery from '../Gallery/Gallery';
import Header from '../Nainital/Header';
import './SubLocation.css'

function SubLocation() {
  return (
    <div className='SubLocation'>
        <Header/>
    <div className="subLocation">
        <Gallery/>
    </div>
    </div>
  )
}

export default SubLocation