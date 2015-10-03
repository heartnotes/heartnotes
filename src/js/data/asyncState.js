import _ from 'lodash';

export function start(obj) {
  return _.extend({}, obj, {
    inProgress: true,
    result: null,
    error: null,
  });
}

export function result(obj, payload) {
  return _.extend({}, obj, {
    inProgress: false,
    result: payload,
    error: null,
  });
}

export function error(obj, payload) {
  return _.extend({}, obj, {
    inProgress: false,
    result: null,
    error: payload.error,
  });
}

export function reset(obj) {
  return _.extend({}, obj, {
    inProgress: false,
    result: null,
    error: null,
  });
}
