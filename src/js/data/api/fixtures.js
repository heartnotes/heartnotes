import _ from 'lodash';
import { instance as Api } from './index';


var users = {
  'ram@hiddentao.com': {
    key: 'test',
    meta: {
      "keyTest":"eyJpdiI6InlNaGJybW00UVFtWDc3MDNmVW9OY2c9PSIsInYiOjEsIml0ZXIiOjEwMDAsImtzIjoyNTYsInRzIjoxMjgsIm1vZGUiOiJnY20iLCJhZGF0YSI6IiIsImNpcGhlciI6ImFlcyIsImN0IjoiazlWVTJWMFpNUUkyWjdQbDlVdnZLNVVwUVo2RVlHVC9VOFZvMVdLRHZ2OVRZbyt4MXg0LzZQWU9HU3ZTMTVpWDdGdGNkV24vbzRLMHpTWklzbDNVdytxcWtkbjZvZkdldEdJTXRzTnIvS280a0E9PSJ9",
      "salt":"e8b40256d32f03a5be73d19d83a1ed74bc65c05b873cef7ed8f457ef39653239",
      "iterations":40788
    },
  },
};


Api.addFixture('meta', (method, query, body) => {
  return _.get(users[query.username], 'meta');
});


Api.addFixture('login', (method, query, body) => {
  if (_.get(users[query.username], 'key') !== body.key) {
    throw new Error('Incorrect credentials');
  }
});


Api.addFixture('signUp', (method, query, body) => {
  users[query.username] = {
    key: body.key,
    meta: body.meta,
  };
});



