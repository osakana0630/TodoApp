import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux"
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./reducers/rootReducer"
import logger from 'redux-logger'
import {composeWithDevTools} from "redux-devtools-extension";




const enhancer = process.env.NODE_ENV === "development" ?
    composeWithDevTools(applyMiddleware(thunk,logger)) : applyMiddleware(thunk);
export const store = createStore(rootReducer, enhancer);


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
