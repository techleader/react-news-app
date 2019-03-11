import React, { Component } from 'react';
import {BrowserRouter,Route, Switch} from "react-router-dom";
import Home from "./components/Home"
import Navigation from "./components/Navigation";
import Sports from "./sports/Sports";
import Business from "./business/Business";
import './App.css';
import General from './general/General';
import NewsByCountires from './components/NewsByCountries';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <div>
          <Navigation></Navigation>
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/general" component={General}/>
            <Route path="/business" component={Business}/>
            <Route path="/sports" component={Sports}/>    
            <Route path="/components" component={NewsByCountires}/>        
        </Switch>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
