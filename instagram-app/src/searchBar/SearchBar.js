import React from 'react';
import './searchBar.css';

const SearchBar = props => {
    return (
        <div className="navBar">
            <div className="picLogo">
                <img src="glyph-logo_May2016.png" />
                <p className="title-logo"> |  Instagram</p>
            </div>
            <input types="text" placeholder="Search" />
            <div className="clickables">
                <a href="#" ><img src="#" alt="compass"/></a>
                <a href="#" ><img src="#" alt="heart"/></a>
                <a href="#" ><img src="#" alt="user"/></a>
            </div>
        </div>
    );
}

export default SearchBar;


{/* Comments alt="insta logo" */}