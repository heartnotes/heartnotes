import { combineReducers, applyMiddleware, createStore } from 'redux';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import * as reducers from './reducers';


var logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  logger
)(createStore);



const store = module.exports = createStoreWithMiddleware(
  combineReducers(reducers)
);

