var path = require('path');
var sassTrue = require('sass-true');

sassTrue.runSass({
  precision: 10, // MUST be 10 to match equality
  file: path.join(__dirname, 'linear-expression.test.scss')
}, 
{
  describe, 
  it
});