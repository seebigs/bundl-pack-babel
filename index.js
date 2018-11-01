/**
 * Babel processor for Bundl
 */

var babel = require("@babel/core");
var presets = require("@babel/preset-env");

function babelProcessor(getProcessor, options) {
    options = options || {};
    options.presets = options.presets || [ presets ];

    function processor (file) {
        options.filename = file.path;
        var original = file.contents;
        var transformed = babel.transformSync(original, options);
        var transformedCode = transformed && transformed.code;
        return transformedCode || original;
    }

    return {
        processor: processor
    };
}

module.exports = babelProcessor;
