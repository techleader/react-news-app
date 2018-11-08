import React, { Component } from 'react';
import {BrowserRouter,Route, Switch} from "react-router-dom";
import Home from "./components/Home"
import Navigation from "./components/Navigation";
import Address from "./components/Address";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <div>
          <Navigation></Navigation>
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/address" component={Address}/>
        </Switch>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
