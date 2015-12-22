import { instance as Api } from './index';


var credentials = {
  'ram@hiddentao.com': {
    "keyTest":"eyJpdiI6InlNaGJybW00UVFtWDc3MDNmVW9OY2c9PSIsInYiOjEsIml0ZXIiOjEwMDAsImtzIjoyNTYsInRzIjoxMjgsIm1vZGUiOiJnY20iLCJhZGF0YSI6IiIsImNpcGhlciI6ImFlcyIsImN0IjoiazlWVTJWMFpNUUkyWjdQbDlVdnZLNVVwUVo2RVlHVC9VOFZvMVdLRHZ2OVRZbyt4MXg0LzZQWU9HU3ZTMTVpWDdGdGNkV24vbzRLMHpTWklzbDNVdytxcWtkbjZvZkdldEdJTXRzTnIvS280a0E9PSJ9",
    "salt":"e8b40256d32f03a5be73d19d83a1ed74bc65c05b873cef7ed8f457ef39653239",
    "iterations":40788
  },
};


Api.addFixture('credentials', (method, query, body) => {
  return credentials[query.username];
});

