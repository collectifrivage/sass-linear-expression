var path = require('path');
var sassTrue = require('sass-true');

var sassFile = path.join(__dirname, 'sass-linear-expression.test.scss');
sassTrue.runSass({precision: 8, file: sassFile}, {describe, it});