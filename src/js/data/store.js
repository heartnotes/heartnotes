import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { reduxReactRouter, routerStateReducer } from 'redux-router';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

let createHistory = null;
if (typeof window === 'undefined') {
  createHistory = require('history/lib/createMemoryHistory');
} else {
  createHistory = require('history/lib/createBrowserHistory');  
}

import * as reducers from './reducers';
reducers.router = routerStateReducer;


let logger = createLogger();

let combinedReducer = combineReducers(reducers);

let middleware = [
  thunkMiddleware, 
  logger, 
];



exports.create = function(routes) {
  return compose(
    applyMiddleware(...middleware),
    reduxReactRouter({ routes, createHistory })
  )(createStore)(combinedReducer)
};

