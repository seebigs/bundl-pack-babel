/**
 * Babel processor for Bundl
 */

var babel = require("babel-core");

function babelProcessor(getProcessor, options) {
    options = options || {};
    options.presets = options.presets || ['latest'];

    function processor (file) {
        return babel.transform(file.contents, options).code;
    }

    return {
        processor: processor
    };
}

module.exports = babelProcessor;
