# value-descriptors-factory

[![travis ci][1]][2]
[![npm version][3]][4]
[![Coverage Status][5]][6]
[![Dependency Status][7]][8]

`value-descriptors-factory` exports a function that builds `Object.degineProperties` value descriptors without verbosity.

## Install

``` bash
$ npm install value-descriptors-factory --save
```

## Usage
``` JavaScript

const vdf = require('value-descriptors-factory')

const obj1 = Object.defineProperties(vdf({
    foo: 'bar',
    fizz: 'buzz'
}))

// is equivalent to

const obj2 = Object.defineProperties({
    foo: {
        value: 'bar',
    },
    fizz: {
        value: 'buzz'
    }
}))

```

## Support
- Node.js >=6
- ES2015 transpilers

## License
MIT

  [1]: https://travis-ci.org/xgbuils/value-descriptors-factory.svg?branch=master
  [2]: https://travis-ci.org/xgbuils/value-descriptors-factory
  [3]: https://badge.fury.io/js/value-descriptors-factory.svg
  [4]: https://badge.fury.io/js/value-descriptors-factory
  [5]: https://coveralls.io/repos/github/xgbuils/value-descriptors-factory/badge.svg?branch=master
  [6]: https://coveralls.io/github/xgbuils/value-descriptors-factory?branch=master
  [7]: https://david-dm.org/xgbuils/value-descriptors-factory.svg
  [8]: https://david-dm.org/xgbuils/value-descriptors-factory
