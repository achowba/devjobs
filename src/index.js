import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

import "./index.css";
import App from "./App";
import reducer from './store/reducers';

function logger (store) {
    return (next) => {
        return (action) => {
            // console.log("[Middleware]  Dispatching: ", action);
            const result = next(action);
            // console.log("[Middleware] next  state: ", store.getState());
            return result;
        };
    };
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);
