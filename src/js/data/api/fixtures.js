import _ from 'lodash';
import { instance as Api } from './index';


var users = {
  'ok@test.com': {
    key: '6387272dd9a29a371e2c1f5f4115f4215e1f96985399f5ba7c5975ba311be8cb',
    meta: {
      "keyTest":"eyJpdiI6InlNaGJybW00UVFtWDc3MDNmVW9OY2c9PSIsInYiOjEsIml0ZXIiOjEwMDAsImtzIjoyNTYsInRzIjoxMjgsIm1vZGUiOiJnY20iLCJhZGF0YSI6IiIsImNpcGhlciI6ImFlcyIsImN0IjoiazlWVTJWMFpNUUkyWjdQbDlVdnZLNVVwUVo2RVlHVC9VOFZvMVdLRHZ2OVRZbyt4MXg0LzZQWU9HU3ZTMTVpWDdGdGNkV24vbzRLMHpTWklzbDNVdytxcWtkbjZvZkdldEdJTXRzTnIvS280a0E9PSJ9",
      "salt":"e8b40256d32f03a5be73d19d83a1ed74bc65c05b873cef7ed8f457ef39653239",
      "iterations":40788
    },
  },
  'badkey@test.com': {
    key: 'hahaha',
    meta: {
      "keyTest":"eyJpdiI6InlNaGJybW00UVFtWDc3MDNmVW9OY2c9PSIsInYiOjEsIml0ZXIiOjEwMDAsImtzIjoyNTYsInRzIjoxMjgsIm1vZGUiOiJnY20iLCJhZGF0YSI6IiIsImNpcGhlciI6ImFlcyIsImN0IjoiazlWVTJWMFpNUUkyWjdQbDlVdnZLNVVwUVo2RVlHVC9VOFZvMVdLRHZ2OVRZbyt4MXg0LzZQWU9HU3ZTMTVpWDdGdGNkV24vbzRLMHpTWklzbDNVdytxcWtkbjZvZkdldEdJTXRzTnIvS280a0E9PSJ9",
      "salt":"e8b40256d32f03a5be73d19d83a1ed74bc65c05b873cef7ed8f457ef39653239",
      "iterations":40788
    },
  },
};


var _throw = function(msg) {
  let e = new Error(msg);
  e.responseText = msg;
  throw e;
}


Api.addFixtureGet('meta', (query, body) => {
  return _.get(users[query.username], 'meta');
});


Api.addFixturePost('login', (query, body) => {
  if (_.get(users[body.username], 'key') !== body.key) {
    _throw('Password incorrect');
  }
});


Api.addFixturePost('signUp', (query, body) => {
  users[body.username] = {
    key: body.key,
    meta: body.meta,
  };
});


Api.addFixturePost('updatePassword', (query, body) => {
  users[body.username] = {
    key: body.key,
    meta: body.meta,
  };
});


