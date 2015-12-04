import _ from 'lodash';

export function start() {
  return {
    inProgress: true,
    progressMsg: null,
    result: null,
    error: null,
  };
}

export function progress(payload) {
  return {
    inProgress: true,
    progressMsg: payload.msg,
    result: payload,
    error: null,
  };
}


export function result(payload) {
  return {
    inProgress: false,
    progressMsg: null,
    result: payload,
    error: null,
  };
}

export function error(payload) {
  return {
    inProgress: false,
    progressMsg: null,
    result: null,
    error: payload.error,
  };
}

export function reset() {
  return {
    inProgress: false,
    progressMsg: null,
    result: null,
    error: null,
  };
}
