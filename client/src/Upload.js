import React, { Component } from 'react';
import './Upload.css';

export default class Upload extends Component {

    constructor(props){
        super(props);
        this.title = React.createRef();
        this.ingredients = React.createRef();
        this.instructions = React.createRef();
    }

submitForm= (e)=>{
    e.preventDefault();
    let init= {
        method:'POST',
        body: JSON.stringify({title: this.title.current.value,
                                ingredients:this.ingredients.current.value,
                                 instructions:this.instructions.current.value   }),
        headers:{
            'Content-Type':'application/json',

        }

    }
    fetch('http://localhost:8080/upload',init).then(res=> res.json())
        .then(res2=>console.log(res2));
}  
  
render() {
    return (
      <div className='upload-container'>
        <form onSubmit={this.submitForm}>
           <label > Title <input ref={this.title} name="Title"></input> </label>
           <label > Ingredients <textarea ref={this.ingredients} name="Ingredient"></textarea> </label>
           <label> Instructions <textarea ref={this.instructions} name="Instructions"></textarea> </label>
           <button type="submit"></button>
        </form>
      </div>
    )
  }
}
