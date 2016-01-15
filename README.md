# Heartnotes

Personal diary app - cross-platform, offline, encrypted.

Features:

* OS X desktop app _(Windows + Linux coming soon)_
* Completely offline, password is not stored anywhere
* Rock-solid encryption (AES-256-GCM)
* Auto-save diary as you type
* Timeline view for easy access to past entries
* Search using lunr.js
* Export diary to readable HTML file at any time

Fetch the latest release from [http://heartnot.es](http://heartnot.es).

## Technology

Built using React.js + Redux + Electron.js.

### Encryption details

This uses the [SJCL library](https://crypto.stanford.edu/sjcl/) for AES-256 
encryption as well as for the PRNG algorithm to generate random seed data and 
salts.

We first derive a "master" key from the user's password as follows:

* Use Fortuna PRNG with multiple event inputs (mouse, keyboard, accelerometer etc) to generate a salt.
* Use salt and password as inputs to PBKDF2-SHA512 to generate a 512-bit key. _(The number of iterations of PBKDF2 is set such that generation takes 1 second on the user's machine- on a Macbook Air 2012 this easily results in >10000 iterations._
* Store the input salt and PBKDF2 iteration count in the user's diary file.
* Set the first 256 bits of the key as the MASTER key.

Now let's generate the encryption key:

* Generate a SHA-256 hash of: user's password + random number (generated using a non-CSRNG)
* Use Fortuna PRNG with multiple event inputs (mouse, keyboard, accelerometer etc) to generate a salt.
* Use salt and hash as inputs to PBKDF2-SHA512 to generate a 512-bit key. _(The number of iterations of PBKDF2 is set such that generation takes 1 second on the user's machine- on a Macbook Air 2012 this easily results in >10000 iterations._
* Set the first 256 bits of the key as the ENCRYPTION key.

Notes:

* We use the ENCRYPTION key to encrypt the actual entry data. 
* We encrypt the ENCRYPTION key using the MASTER key (AES-256-GCM, random IV) and save it as a bundle in the user's diary file.
* The ENCRYPTION key is currently never changed. 

The next time the user enters the right password, we:

* Use the stored salt and iteration count to regenerate the right MASTER key. 
* We use this to decrypt the bundle containing the ENCRYPTION key.


## Development

**Node.js 0.12+ required.**

Setup:

```bash
$ npm install -g electron-prebuilt@0.34.3
$ npm install
```

Run dev server and Electron app (http://localhost:3000):

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


