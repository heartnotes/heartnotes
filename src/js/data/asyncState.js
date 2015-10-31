import _ from 'lodash';

export function start() {
  return {
    inProgress: true,
    result: null,
    error: null,
  };
}

export function result(payload) {
  return {
    inProgress: false,
    result: payload,
    error: null,
  };
}

export function error(payload) {
  return {
    inProgress: false,
    result: null,
    error: payload.error,
  };
}

export function reset() {
  return {
    inProgress: false,
    result: null,
    error: null,
  };
}
