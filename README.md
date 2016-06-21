# Heartnotes

**Personal diary app** (web and desktop) which uses client-side 
encryption and zero-knowledge authentication.

[Try it at https://web.heartnot.es](https://web.heartnot.es).

Get it from [https://heartnot.es](https://heartnot.es).

Features:

* 256-bit AES encryption done client-side for maximum security
* Auto-save-as-you-type, with cloud sync running the background
* Full-text search using [lunr.js](http://lunrjs.com/)
* Backup/restore and export to local file at any time.
* Continue editing even if connection goes down.

## Technology

Main ingredients: React.js, Redux, Electron.js.

### Encryption details

This uses the [SJCL library](https://crypto.stanford.edu/sjcl/) for AES-256 
encryption as well as for the PRNG algorithm to generate random seed data and 
salts.

We first derive a "master" key from the user's password as follows:

* Use Fortuna PRNG with multiple event inputs (mouse, keyboard, accelerometer etc) to generate a salt.
* Use salt and password as inputs to PBKDF2-SHA512 to generate a 512-bit key. _(The number of iterations of PBKDF2 is set such that generation takes 1 second on the user's machine- on a Macbook Air 2012 this easily results in >10000 iterations._
* Store the input salt and PBKDF2 iteration count in the user's account online.
* Set the first 256 bits of the key as the MASTER key.
* Set the second 256 bits of the key as the authentication key (i.e. to login to server).

Now let's generate the encryption key:

* Generate a SHA-256 hash of: user's password + random number (generated using a non-CSRNG)
* Use Fortuna PRNG with multiple event inputs (mouse, keyboard, accelerometer etc) to generate a salt.
* Use salt and hash as inputs to PBKDF2-SHA512 to generate a 512-bit key. _(The number of iterations of PBKDF2 is set such that generation takes 1 second on the user's machine- on a Macbook Air 2012 this easily results in >10000 iterations._
* Set the first 256 bits of the key as the ENCRYPTION key.

The next time the user enters the right password, we:

* Use the stored salt and iteration count to regenerate the right MASTER key. 
* We use this to decrypt the bundle containing the ENCRYPTION key.

**Notes:**

* We use the ENCRYPTION key to encrypt the actual entry data (AES-256-GCM, random IV).  
* We encrypt the ENCRYPTION key using the MASTER key (AES-256-GCM, random IV) and save it as a bundle in the user's diary file.
* The ENCRYPTION key is currently never changed. Changing the user password simply changes the master key. This allows password change without having to re-encrypt everything.


## Development

**Node.js 4.4.5+ required.**

Setup:

```bash
$ npm install -g electron-prebuilt@1.2.2
$ npm install
```

Run web version (http://localhost:3000) and Electron desktop app:

```bash
$ gulp
```

_NOTE: Add `--minified` on the command-line to enable JS and CSS minification during build._


## Production build

```bash
$ npm run release
```

You will find the `Heartnotes.app` OS X executable in `build-electron/release/...`. 
Built web assets (minfied, production config) will be in `build/`. 

To do a web-only release (i.e. only the stuff in `build/`) run:

```bash
$ npm run release_web
```


## Release checklist

1. Make final commits
2. Update `version` in `package.json`
3. Commit version update and push
4. Tag commit as <version>
5. Push tag
6. Do a production build (see above)
7. Test production build
8. Create release entry on Github and attach built executable
9. Announce to world!



## License

Copyright (C) 2015 [Ramesh Nair](https://hiddentao.com)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.


