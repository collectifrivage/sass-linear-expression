const path = require('path');
const sassTrue = require('sass-true');
const precision = 10; // MUST be 10 to match equality

function test(file) {
  sassTrue.runSass({precision, file}, {describe, it});
}

test(path.join(__dirname, 'linear-expression.test.scss'));
test(path.join(__dirname, 'linear-expression.test.sass'));
