import React from 'react';
import './Filter.css';
import group1 from './img/Group 1.png'
import group2 from './img/Group 111.png'
import group3 from './img/Group 112.png'
import group4 from './img/Group 113.png'
import star from './img/Vector.png'
import progress from './img/progess.png'

function Filter() {
    return (
        <div className="filter">
            <div className="filter_top">
                <div className="filter__t1">
                    Sort By
                </div>
                <div className="filter__t2">
                    Reset
                </div>
            </div>
            <div className="images__list">
                {/* <img src={group1} alt="" /> */}
                <div className='filter_image__div'>
                    <img src={progress} alt="" />
                    <h6>Popularity</h6>
                    <p>popularity first</p>
                </div>
                <div className='filter_image__div'>
                    <img src={star} alt="" />
                    <h6>Popularity</h6>
                    <p>popularity first</p>
                </div>
                <div className='filter_image__div'>
                    <img src={star} alt="" />
                    <h6>Popularity</h6>
                    <p>popularity first</p>
                </div>
                <div className='filter_image__div'>
                    <img src={star} alt="" />
                    <h6>Popularity</h6>
                    <p>popularity first</p>
                </div>
            </div>
            <div className="filter_top2">
                <div className="filter__two1">
                    Reset Filter
                </div>
                <div className="filter__two2 start_checkbox">
                    Select Filter
                </div>
                <div className="two_checkbox">
                    <div className='checkbox'>
                    <input type="checkbox" />
                    <p>Trending Packages</p>
                    </div>
                    <div className='checkbox start_checkbox'>
                    <input type="checkbox" />
                    <p>Trending Packages</p>
                    </div>
                </div>
                {/* Destinations */}
                <div className="two_checkbox">
                    <h6>Destinations</h6>
                    <div className='checkbox'>
                    <input type="checkbox" />
                    <p>Rishikesh</p>
                    </div>
                    <div className='checkbox'>
                    <input type="checkbox" />
                    <p>Nainital</p>
                    </div>
                    <div className='checkbox'>
                    <input type="checkbox" />
                    <p>Mussoorie</p>
                    </div>

                    <div className="loadMore">
                    Load More..
                    </div>
                </div>
                {/* Categories */}
                <div className="two_checkbox">
                    <h6>Categories</h6>
                    <div className='checkbox'>
                    <input type="checkbox" />
                    <p>Treks</p>
                    </div>
                    <div className='checkbox'>
                    <input type="checkbox" />
                    <p>Rafting</p>
                    </div>
                    <div className='checkbox'>
                    <input type="checkbox" />
                    <p>Camping</p>
                    </div>

                    <div className="loadMore">
                    Load More..
                    </div>
                </div>
                {/* Categories */}
                <div className="two_checkbox">
                    <h6>Travel Style</h6>
                    <div className='checkbox'>
                    <input type="checkbox" />
                    <p>Friends</p>
                    </div>
                    <div className='checkbox'>
                    <input type="checkbox" />
                    <p>Family</p>
                    </div>
                    <div className='checkbox'>
                    <input type="checkbox" />
                    <p>Couple</p>
                    </div>

                    <div className="loadMore">
                    Load More..
                    </div>
                </div>

                {/* Price Range */}
                <div className="two_checkbox">
                    <h6>Price Range</h6>
                    <div className='checkbox'>
                    <input className='Range' type="range" id="myRange"/>
                    </div>
                    <div className="range__value">
                        <div>Min: 0</div>
                        <div>Max: 20000</div>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Filter