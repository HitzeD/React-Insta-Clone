import React from 'react';
import './searchBar.css';
import logo from './insta.png';

const SearchBar = props => {
    return (
        <div className="navBar">
            <div className="picLogo">
                <img src={logo} alt="insta logo"/>
                <p className="title-logo"> |  Instagram</p>
            </div>
            <form onSubmit={props.search}>
                <input onChange={props.search} value={props.write} types="text" placeholder="Search" />
            </form>
            <div className="clickables">
                <i className="fas fa-compass"></i>
                <i className="fas fa-heart"></i>
                <i className="fas fa-user"></i>
            </div>
        </div>
    );
}

export default SearchBar;