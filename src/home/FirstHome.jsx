import React, { useState, useEffect } from 'react';
import './FirstHome.css';
import logo from './img/logo.png';
import call from './img/phone-call.png';
import background1 from './img/thrillo 1.png';
import background2 from './img/thrillo 1.jpg';
import background3 from './img/thrillo 1 (4).jpg';
import background4 from './img/thrillo 1 (2).jpg';
import background5 from './img/thrillo 1 (1).jpg';
import background6 from './img/thrillo 1 (3).jpg';
import divider from './img/Line 2.png'
import search from './img/search.png';
import dropdown from './img/Vector.svg'
import map from './img/map-pin.png'
import arrow from './img/Arrow 1.png'
import icon1 from './img/icon 1.png'
import icon2 from './img/icon 2.png'
import icon3 from './img/icon 3.png'
import icon4 from './img/icon 4.png'
import icon5 from './img/icon 5.png'
import icon6 from './img/icon 6.png'
import background1theme from './img/Ellipse 1 (5).png'
import background2theme from './img/Ellipse 1.png'
import background3theme from './img/Ellipse 1 (4).png'
import background4theme from './img/Ellipse 1 (2).png'
import background5theme from './img/Ellipse 1 (1).png'
import background6theme from './img/Ellipse 1 (3).png'
import menu from './img/menu.png'
import Secondpage from './Secondpage';
function FirstHome() {

    const [newArr, setNewArr] = useState([icon1, icon2, icon3, icon4, icon5, icon6]);
    const [number, setNumber] = useState(icon1);

    const function1 = () => {
        setNumber(newArr[1])
        const Nn = newArr;
        const A = newArr[0];
        Nn.splice(0, 1);
        Nn.push(A);
        setNewArr(Nn)
        // Nn.splice(0, 1);
        console.log(Nn, newArr)

    }
    return (
        <>
        <div className='FirstHome'>
            {number == icon1 &&
                <>
                    <img className='backimage' src={background1} alt="" />
                    <img className='theme' src={background1theme} alt="" />
                </>
            }
            {number == icon2 &&
                <>
                    <img className='backimage' src={background2} alt="" />
                    <img className='theme' src={background2theme} alt="" />
                </>
            }
            {number == icon3 &&
                <>
                    <img className='backimage' src={background3} alt="" />
                    <img className='theme' src={background3theme} alt="" />
                </>
            }
            {number == icon4 &&
                <>
                    <img className='backimage' src={background4} alt="" />
                    <img className='theme' src={background4theme} alt="" />
                </>
            }
            {number == icon5 &&
                <>
                    <img className='backimage' src={background5} alt="" />
                    <img className='theme' src={background5theme} alt="" />
                </>
            }
            {number == icon6 &&
                <>
                    <img className='backimage' src={background6} alt="" />
                    <img className='theme' src={background6theme} alt="" />
                </>
            }
            <div className="FirstHome__Header">
                <div className="Header__logo">
                    <img src={logo} alt="" />
                </div>
                <div className="sections">
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
                <div className="sections_forM">
                    <img src={menu} alt="" />
                </div>
            </div>
            <div className="secRow">
                <div className="firstBox">
                    <div className='combText'>
                        <div className="text1">
                            Explore New
                        </div>
                        <div className="text2">
                            Adventures
                        </div>
                    </div>
                    <div className="FirstHome__input">
                        <input type="text" placeholder='Trekking' />
                        <img className='dropdown' src={dropdown} alt="" />
                        <img className='divider' src={divider} alt="" />
                        <img className='dropdown' src={map} alt="" />
                        <input type="text" placeholder='Location' />
                        <img className='divider' src={divider} alt="" />
                        <img className='search' src={search} alt="" />
                    </div>
                </div>
                <div className="secondBox">
                    <div className="secondbox_row">
                        <div className="second_Border">

                            {newArr.map((arr, k) => (
                                <>
                                    {k == 1 && <img src={arr} className="one" alt="" />}
                                    {k == 2 && <img src={arr} className="two" alt="" />}
                                    {k == 3 && <img src={arr} className="three" alt="" />}
                                    {k == 4 && <img src={arr} className="four" alt="" />}
                                    {k == 5 && <img src={arr} className="five" alt="" />}
                                </>
                            ))}
                        </div>
                    </div>
                    <div className="secondbox_row2">
                        <div className="changeArrow">
                            <img src={arrow} className="changeArrowImg" onClick={function1} alt="" />
                        </div>
                        <img src={number} className="changeIcon" alt="" />
                        <div className="changeArrow">
                            <img src={arrow} className="changeArrowImg" onClick={function1} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default FirstHome;