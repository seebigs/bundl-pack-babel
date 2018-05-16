# bundl-pack-babel

*Transpile ES6 code with [bundl-pack](https://github.com/seebigs/bundl-pack)*

> Learn more at [babeljs.io](https://babeljs.io/docs/usage/api/)

## Install

```
$ npm install --save-dev bundl-pack-babel
```

## Use

```js
var Bundl = require('bundl');
var pack = require('bundl-pack');
var write = require('bundl-write');

var babelProcessor = require('bundl-pack-babel');

new Bundl('entry.js')
    .then(pack({
        js: {
            processor: babelProcessor,
            presets: ['es2015'] // uses "latest" if you do not specify
        }
    }))
    .then(write())
    .go();
```
