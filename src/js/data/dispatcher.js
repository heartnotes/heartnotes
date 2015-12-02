"use strict";

import _ from 'lodash';
import Logger from '../utils/logger';

import { buildAction } from '../actions';


export class Dispatcher {

  constructor() {
    this.logger = Logger.create(`dispatcher`);
  }


  init (dispatchFunction, getStateFunction) {
    this._dispatch = dispatchFunction;
    this._getState = getStateFunction;
  }


  do (actionId, data) {
    if (!this._dispatch) {
      throw new Error('Dispatcher not yet initialized');
    }

    this._dispatch(buildAction(actionId, data));
  }
}


Dispatcher.instance = new Dispatcher();
