# Heartnotes

Personal diary app - cross-platform, offline, encrypted.

Features:

* OS X desktop app
* Completely offline, password is not stored anywhere
* Rock-solid encryption (AES-256)
* Timeline view for easy access to past entries
* Export diary to unencrypted HTML file

Fetch the latest release from [http://heartnot.es](http://heartnot.es).


## Development

**Node.js 0.12+ required.**

Setup:

```bash
$ npm install -g electron-prebuilt
$ npm install
```

Run dev server (http://localhost:3000):

```bash
$ gulp --debug
```

_NOTE: Remove `--debug` command-line argument to enable JS and CSS minification during build._



## Production build

```bash
$ gulp release
```

You will find the `Heartnotes.app` OS X executable in `build-electron/relese/...`



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


