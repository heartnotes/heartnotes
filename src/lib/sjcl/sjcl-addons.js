
/**
 * Fix for https://github.com/bitwiseshiftleft/sjcl/issues/131
 *
 * This version does not call escape/encodeURIComponent on the final string.
 */
sjcl.codec.utf8String.fromBitsRaw = function (arr) {
  var out = "", bl = sjcl.bitArray.bitLength(arr), i, tmp;
  for (i=0; i<bl/8; i++) {
    if ((i&3) === 0) {
      tmp = arr[i/4];
    }
    out += String.fromCharCode(tmp >>> 24);
    tmp <<= 8;
  }
  return out;
};