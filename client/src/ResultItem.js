import React, { Component } from 'react';
import './ResultItem.css';
import {Link} from 'react-router-dom';

export default class ResultItem extends Component {
  
  render() {
    let {result:item} =this.props;
    return (
      <div className="result">
        <Link to={{pathname: `/${item.recipe_id}`, state:{source_url: item.source_url}}}> <img className="result__image" src={item.image_url}></img> </Link>
        <div className="result__title">{item.title}</div>
        <div className="result__publisher">{item.publisher}</div>
        <div className="result__social">{item.social_rank}</div>
      </div>
    )
  }
}
