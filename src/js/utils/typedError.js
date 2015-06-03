"use strict";

// From https://gist.github.com/daliwali/09ca19032ab192524dc6
export default class TypedError extends Error {
 
  constructor (message) {
    super();
 
    if (Error.hasOwnProperty('captureStackTrace'))
      Error.captureStackTrace(this, this.constructor);
    else
      Object.defineProperty(this, 'stack', {
        value: (new Error()).stack
      });
 
    Object.defineProperty(this, 'message', {
      value: message
    });
  }
 
  get name () {
    return this.constructor.name;
  }
  
}

