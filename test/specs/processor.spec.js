
var babelProcessor = require('../../index.js')();

describe('processor', function () {

    describe('does the job', function (expect) {
        var p = babelProcessor();
        var output = p.processor({ contents: 'let foo = 123;' });
        expect(output).toBe('"use strict";\n\nvar foo = 123;');
    });

});
