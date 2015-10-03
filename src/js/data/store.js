import { combineReducers, applyMiddleware, createStore } from 'redux';

import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

import * as reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore);



const store = module.exports = createStoreWithMiddleware(
  combineReducers(reducers)
);

