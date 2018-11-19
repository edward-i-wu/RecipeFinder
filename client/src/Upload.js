import React, { Component } from 'react';
import './Upload.css';

export default class Upload extends Component {

    constructor(props){
        super(props);
        this.title = React.createRef();
        this.ingredients = React.createRef();
        this.instructions = React.createRef();
        this.image = React.createRef();
    }

submitForm= (e)=>{
    e.preventDefault();
    var formData = new FormData();
    formData.append('title',this.title.current.value);
    formData.append('ingredients',this.ingredients.current.value);
    formData.append('instructions',this.instructions.current.value);
    formData.append('image',this.image.current.files[0]);
    let init= {
        method:'POST',
        // body: JSON.stringify({title: this.title.current.value,
        //                         ingredients:this.ingredients.current.value,
        //                          instructions:this.instructions.current.value ,
        //                         image:this.image.current.fileInput }),
        body: formData
    }
    fetch('http://localhost:8080/upload',init).then(res=> console.log(res))
        //.then(res2=>console.log(res2))
        .catch(err => console.log(err));
}  
  
render() {
    return (
      <div className='upload-container'>
        <form onSubmit={this.submitForm}>
           <label > Title <input ref={this.title} name="Title"></input> </label>
           <label > Ingredients <textarea ref={this.ingredients} name="Ingredient"></textarea> </label>
           <label> Instructions <textarea ref={this.instructions} name="Instructions"></textarea> </label>
           <label>Image Upload <input name='image' ref={this.image} type='file'></input></label>
           <button type="submit"> Submit your recipe! </button>
        </form>
      </div>
    )
  }
}
