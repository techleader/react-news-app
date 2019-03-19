import React from 'react';
import { render } from 'react-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import NewsSource from "./components/NewsSource"
import { combineReducers } from 'redux';
import newsreducer from './reducer/newsreducer';



const store = createStore(newsreducer);

store.subscribe(() =>{
    console.log("store updated", store.getState());
});


 render(<Provider store = {store}>
    <App />
 </Provider>, document.getElementById('root'));

 


serviceWorker.unregister();
