# Officer-involved Shootings map

See it: [https://hiddentao.github.io/ois-incidents-map](https://hiddentao.github.io/ois-incidents-map)

A map of police officer-involved shootings for the USA.

This is an interactive map of the dataset available through [Dan Hammer's API](https://github.com/danhammer/ois-incidents), with 
most of the data being from the crowdsourced [Deadspin project](http://regressing.deadspin.com/were-compiling-every-police-involved-shooting-in-americ-1624180387).

## Dataset and technical notes

**NOTE: The dataset behind this map is rough and ready and should NOT be relied upon 
for formulating policy. Crucial data is missing for a number of incidents.**

We have taken the following measures to deal with this:

* In the map we attempt to show as much detail as is available. However we 
automatically reject incidents which don't have atleast the following 
datapoints: _victim's gender, the US state, the outcome of the shooting, and 
the date the incident was added to the dataset_.

* The date an incident took places is mostly not available. So instead we use 
the date information that is available, namely the `searched_date` (the date 
the incident was added to the dataset).

* Precise co-ordinates for where an incident occurred are understandably not 
available. We thus approximate it as accurately possible based on city, county 
and state locations. Note though that for many incidents we don't even have city 
or county data.

* Ideally all incidents will have a working URL reference to a news article 
with the incident details. We've decided to include instances that don't have 
such a reference in the hope that one gets added later on.


## Development

To build and run the map locally you will need to have installed

* Git
* Node.js 0.12

Git clone this repo and set things up:

```bash
$ npm install -g bower
$ npm install
```

To run the server and rebuild the code automatically as you develop:

```bash
$ gulp
```

Now browse to `http://localhost:3000` and you should see the map load.

By default all assets (CSS, JS, etc) are minified. To prevent this use `--debug`:

```bash
$ gulp --debug
```

To build for production release (i.e. prior to committing your changes):

```bash
$ gulp build
```

## Contributing

Contributions are more than welcome. Please see the [contributors guide](https://github.com/hiddentao/ois-incidents-map/blob/gh-pages/CONTRIBUTING.md).

## License

**MIT**

The MIT License (MIT)

Copyright (c) 2015 [Ramesh Nair](http://hiddentao.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
