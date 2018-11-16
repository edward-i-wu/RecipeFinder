import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Results from './Results';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import ResultPage from './ResultPage';
import Upload from './Upload';

const baseURL= 'https://www.food2fork.com';
const api_key = '6ee4ea36eef2846253f19ed524b601ed';
const search = '/api/search?key=';

class App extends Component {
  submitForm = (e)=>{
    //fetch search here 
    e.preventDefault();
    fetch(`${baseURL}${search}${api_key}`).then(res=>res.json())
        .then(data =>{
          this.setState(data);
        })
    
  }

  state = {recipes:[]}
  
  render() {
    return (
      <div className="App">
        <Header searchFunc={this.submitForm}></Header> 
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
