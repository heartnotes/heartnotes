import _ from 'lodash';

export function started(obj) {
  return _.extend({}, obj, {
    inProgress: true,
    result: null,
    error: null,
  });
}

export function finished(obj, result) {
  return _.extend({}, obj, {
    inProgress: false,
    result: result,
    error: null,
  });
}

export function failed(obj, err) {
  return _.extend({}, obj, {
    inProgress: false,
    result: null,
    error: err,
  });
}
