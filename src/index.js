import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import { applyMiddleware,createStore} from 'redux'
import ReduxThunk from 'redux-thunk'
import {BrowserRouter} from 'react-router-dom'
import './support/css/animated.css'

import Reducers from './2.reducers'


import './support/fontawesome-free/css/fontawesome.min.css'
import './support/fontawesome-free/css/all.min.css';

const globalState = createStore(Reducers,{},applyMiddleware(ReduxThunk))

ReactDOM.render(
<Provider store={globalState}>
<BrowserRouter>
<App/>
</BrowserRouter>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
