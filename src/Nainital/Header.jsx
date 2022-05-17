import React from 'react';
import './Header.css';
import logo from '../home/img/logo.png';
import divider from '../home/img/Line 2.png'
import search from '../home/img/search.png';
import dropdown from '../home/img/Vector.svg'
import map from '../home/img/map-pin.png'
import call from '../home/img/phone-call.png';
import menu from '../home/img/menu.png'

function Header() {
    return (
        <div className='nainital_header'>
            <div className="firstDiv">
                <div className="nainitalSearch_img">
                    <img src={search} alt="" />
                </div>
                <div className="N__Header__logo">
                    <img className='Nainital_logo' src={logo} alt="" />
                </div>
                <div className="sections_forM">
                    <img src={menu} alt="" />
                </div>
                <div className="FirstHome__input_forheader">
                    <input type="text" placeholder='Trekking' />
                    <img className='dropdown' src={dropdown} alt="" />
                    <img className='N__divider' src={divider} alt="" />
                    <img className='dropdown' src={map} alt="" />
                    <input type="text" placeholder='Location' />
                    <img className='N__divider' src={divider} alt="" />
                    <img className='search' src={search} alt="" />
                </div>
            </div>
            <div className="N__sections">
                <div className="Header__section">
                    About Us
                </div>
                <div className="Header__section">
                    Category
                </div>
                <div className="Header__section">
                    Cities
                </div>
                <div className="Header__section">
                    Contact
                </div>
                <div className="call">
                    <img src={call} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header