import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Results from './Results';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import ResultPage from './ResultPage';
import Upload from './Upload';

const baseURL= 'https://www.food2fork.com';
// const api_key = '6ee4ea36eef2846253f19ed524b601ed';
const api_key ='23d6944200f9e7cf3c2e3c139d8a57b2';
const search = '/api/search?key=';

class App extends Component {


  constructor(props){
    super(props);
    this.searchTerms = React.createRef();
  }

  state={recipes:[]};
  submitForm = (e)=>{
    //fetch search here 
    e.preventDefault();
    //still need to format paramters 

    console.log(this.searchTerms.current.value);
    //change string to query
    let query = this.searchTerms.current.value.replace(',','%20')
    fetch(`${baseURL}${search}${api_key}&q=${query}`).then(res=>res.json())
        .then(data =>{
          if(data.recipes){
          console.log(data.recipes);
          this.setState((prevState,props)=>{
            return {recipes:prevState.recipes.concat(data.recipes)}
          });
        }});
    //search our own server endpoint
    fetch(`http://localhost:8080/search/${query}`).then(res=>res.json())
        .then(res=>this.setState((prevState,props)=>{
          
         return {recipes: prevState.recipes.concat(res)}
        }));
    
  }

 
  
  render() {
    return (
      <div className="App">
        <Header ref={this.searchTerms} searchFunc={this.submitForm}></Header> 
        <Router> 
          <Switch>
          <Route path='/upload' component={Upload} />           
             <Route path='/:recipeId'  render={(props)=>{return <ResultPage {...props}></ResultPage>}} />
            
            <Route path='/' exact render={()=>{return <Results recipes={this.state.recipes}/>}} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
