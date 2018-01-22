import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter,Route, Router} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./StoreData";

ReactDOM.render((
    <Provider store={store}><App/></Provider>
), document.getElementById('root'));
registerServiceWorker();
