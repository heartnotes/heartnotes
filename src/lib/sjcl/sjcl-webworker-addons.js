/**
 * HMAC-SHA-512 for use with PBKDF2.
 * @param key
 */
sjcl.misc.hmac512 = function(key) {
  sjcl.misc.hmac.call(this, key, sjcl.hash.sha512);
};
sjcl.misc.hmac512.prototype = new sjcl.misc.hmac('');
sjcl.misc.hmac512.prototype.constructor = sjcl.misc.hmac512;


/**
 * Encrypt using AES-256-CCM
 * @param password {bitArray} 8 words / 32 bytes.
 * @param plaintext {string}
 * @param iv {bitArray} 4 words / 16 bytes.
 * @return {string} ciphertext encoded as Base64
 */
sjcl.encrypt_b64 = function(password, plaintext, iv) {
  return btoa(sjcl.encrypt(password, plaintext, {
    cipher: 'aes',
    iter: 1000,
    mode: 'gcm',
    iv: iv,
    ts: 128,
    ks: 256
  }));
};



/**
 * Decrypt using AES-256-CCM.
 * @param password {bitArray} 8 words / 32 bytes.
 * @param ciphertext {string} encrypted string encoded as Base64.
 * @return {string} plaintext
 */
sjcl.decrypt_b64 = function(password, ciphertext) {
  return sjcl.decrypt(password, atob(ciphertext));
};

