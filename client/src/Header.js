import React, { Component } from 'react'
import './Header.css';
class Header extends Component {
    

    render() {

    return (
      <div className="header">
        <h1 className="header__title"> <div className="container">Food Finder</div> </h1>
        <div className="header__search">
            <form className="search-form" onSubmit={this.props.searchFunc}>
                <select className="search-option" name="search-option">
                    <option>Top Rated</option>
                    <option> Trending</option>
                </select>  
                <div className='search-form__bar'>
                    {/* use the ref passed from the parent  */}
                    <input ref={this.props.childRef} type="text" name="ingredients"></input>
                    <button type="submit" > Search </button>
                </div>
            </form>
        </div>
      </div>
    )
  }
}

export default React.forwardRef((props,ref)=>{return <Header childRef={ref} {...props}></Header>});