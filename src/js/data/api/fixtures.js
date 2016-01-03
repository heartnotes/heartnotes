import _ from 'lodash';
import moment from 'moment';

import { instance as Api } from './index';

var Logger = require('../../utils/logger').create('ApiFixtures');


var users = {
  'ok@test.com': {
    "key": "2d97759123110bbacfdb5cce21bbe508cdea860afc49c7b554b1b981a612c05c",
    "account": {
      subscription: {
        expiry: moment('2025-03-01').toDate(),
        type: 'Free Trial',
      },
    },
    "meta": {
      "bundle": "eyJpdiI6InhlYXE2M2MwQThTWTQzZmtqVHJxZHc9PSIsInYiOjEsIml0ZXIiOjEwMDAsImtzIjoyNTYsInRzIjoxMjgsIm1vZGUiOiJnY20iLCJhZGF0YSI6IiIsImNpcGhlciI6ImFlcyIsImN0IjoiM3d3WTFkT3dUdThwakdCY1pzREN2SjhDN09weDdoMWhXaEhQQjhnZ1dlbXhpZnYrbWVNeXcxMk00UFVIcEhXbmp1bUJNS2MwKzR0RFA5all4MkJ6RXpxMzIzY0pNK21QSTZhTndpTzZmcmdyYWZ5My9udkNKVjJKOGRqRENUVmZBdXFFRlBnSFF3PT0ifQ==",
      "salt": "865c63d1ac886a196a7d025ad9fbd937ed94d301af609c7d792f7f369832e006",
      "iterations": 54097,
      "version": "1.3.0"
    },
  },
  "test2@test.com": {
    "key": "4753d4ea5cae556628a72bdcde29761a72c46937c02dfa212475cb23eb7e9bad",
    "account": {
      subscription: {
        expiry: moment('2025-04-02').toDate(),
        type: 'Yearly subscription',
      },
    },
    "meta": {
      "bundle": "eyJpdiI6IkJBZTY4dVZsVW40ZWJ5ZXM1eDI1cUE9PSIsInYiOjEsIml0ZXIiOjEwMDAsImtzIjoyNTYsInRzIjoxMjgsIm1vZGUiOiJnY20iLCJhZGF0YSI6IiIsImNpcGhlciI6ImFlcyIsImN0IjoiR05JV1oxQmZ1ZmI0SHJ4OW03eHl3b3J6SkdqOEo2NkprSWxJRzJqdktJS09PdDU3c1NBUHZ1bEpMZ0NDWTRrd3pZYUJoTElUR05HQzdYQTVtOWYzUTBHWlJHcW05T3RjcEV5dzJPeENjRDVFNVJSSytPV05yc3RtUy9hTjdxZ2lMZFBPOCtpQnZnPT0ifQ==",
      "salt": "041626fefc9f944f05aa84c771cd707049909422a1cdd94336d318d3d79de23d",
      "iterations": 46440,
      "version": "2.0.0"
    }
  },
  'badkey@test.com': {
    key: 'hahaha',
    "account": {
      subscription: {
        expiry: moment('2015-04-06').toDate(),
        type: 'Yearly subscription',
      },
    },
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

  return users[body.username].account;
});


Api.addFixturePost('signUp', (query, body) => {
  users[body.username] = {
    key: body.key,
    meta: body.meta,
  };
});


Api.addFixturePost('sync', (query, body) => {
  Logger.debug('SYNC');

  return {};
});



Api.addFixturePost('updatePassword', (query, body) => {
  users[body.username] = {
    key: body.key,
    meta: body.meta,
  };
});


Api.addFixturePost('feedback', (query, body) => {
  Logger.debug('FEEDBACK RECIEVED', body);
});


