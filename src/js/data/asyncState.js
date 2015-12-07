import _ from 'lodash';

export function start() {
  return {
    inProgress: true,
    progressMsg: null,
    result: null,
    success: false,
    error: null,
  };
}

export function progress(payload) {
  return {
    inProgress: true,
    progressMsg: payload,
    result: null,
    success: false,
    error: null,
  };
}


export function result(payload) {
  return {
    inProgress: false,
    progressMsg: null,
    result: payload,
    success: true,
    error: null,
  };
}

export function error(payload) {
  return {
    inProgress: false,
    progressMsg: null,
    result: null,
    success: false,
    error: payload.error,
  };
}

export function reset() {
  return {
    inProgress: false,
    progressMsg: null,
    result: null,
    success: false,
    error: null,
  };
}
