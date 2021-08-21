import React, {useState, useEffect} from 'react';
import axios from 'axios';
import People from './components/People';
import Films from './components/Films';

import './App.css';
import { Switch,Route,Link} from "react-router-dom";

const App = () => {

  
    
  
  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch charactersn and films from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  

  return (
   
    
    <div className="people" >
      <nav>
         <div className="home-button">
      
         <Link to="/"  className="navbar">Home</Link>
            
            <Link to={"/films"} className="navbar" >Films</Link>
            <Link to={"/people"} className="navbar">People</Link>
            </div>
            </nav>

      <Switch>
        

        <Route path = "/films" >
      <Films />
        </Route>

        <Route path = {"/people"} >
        <People  />
        </Route>
      </Switch>
          
    <div className="App">
 
      <h1 className="Header">React Wars</h1>
      <div>
     
      </div>
    </div>
  
            
   </div>


      

  );
}

export default App;
