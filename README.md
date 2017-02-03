# bundl-pack-babel

*Transpile ES6 code with [bundl-pack](https://github.com/seebigs/bundl-pack)*

> Learn more at [babeljs.io](https://babeljs.io/docs/usage/api/)

## Install

```
$ npm install --save-dev bundl-pack-babel
```

## Use

```js
var bundl = require('bundl');
var pack = require('bundl-pack');
var write = require('bundl-write');

var babelProcessor = require('bundl-pack-babel');

var options = {
    presets: ['es2015'] // uses "latest" if you do not specify
};

bundl('entry.js')
    .then(pack({ js: babelProcessor(options) }))
    .then(write())
    .all();
```
