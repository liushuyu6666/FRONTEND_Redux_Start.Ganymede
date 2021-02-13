import {createStore, compose, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "./reducer";
import {print1, print2, print3, loggerMiddleware} from "./exampleAddons/middleware";

const composedEnhancer = composeWithDevTools(
    applyMiddleware(print1, print2, print3),
    applyMiddleware(loggerMiddleware),
)

const store = createStore(rootReducer, composedEnhancer);

export default store