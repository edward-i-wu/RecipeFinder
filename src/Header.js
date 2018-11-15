import React, { Component } from 'react'
import './Header.css';
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="header__title"> Food Finder </h1>
        <div className="header__search">
            <form className="search-form" >
                <select className="search-option" name="search-option">
                    <option>Top Rated</option>
                    <option> Trending</option>
                </select>  
                <div className='search-form__bar'>
                    <input type="text" name="ingredients"></input>
                    <button type="submit"> Search </button>
                </div>
            </form>
        </div>
      </div>
    )
  }
}
