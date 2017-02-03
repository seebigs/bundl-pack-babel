/**
 * Babel processor for Bundl
 */

var babel = require("babel-core");

module.exports = function (options) {
    options = options || {};
    options.presets = options.presets || [__dirname + '/node_modules/babel-preset-latest'];

    return function (getProcessor, packOptions) {

        function processor (file) {
            return babel.transform(file.contents, options).code;
        }

        return {
            processor: processor
        };
    };

};
