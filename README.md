# rehype-plaintext

Output plain text from rehype.

[![build status](https://secure.travis-ci.org/noblesamurai/rehype-plaintext.png)](http://travis-ci.org/noblesamurai/rehype-plaintext)

## Installation

This module is installed via npm:

``` bash
$ npm install rehype-plaintext
```

## Example Usage

``` js
var rehypePlaintext = require('rehype-plaintext');

var expect = require('expect.js'),
    unified = require('unified'),
    parseHTML = require('rehype-parse'),
    inspect = require('unist-util-inspect'),
    Readable = require('stream').Readable;

var s = new Readable;
s.push('<p>Hi there <em>my friend</em> I hope you are well.</p>');
s.push(null);

var result = '';
s.pipe(unified())
.use(parseHTML)
.use(function () {
  return function (cst) {
    console.log(inspect(cst));
  }
})
.use(rehypePlaintext)
.on('data', function(s) {
  result += s;
})
.on('end', function() {
  expect(result).to.equal('Hi there my friend I hope you are well.');
  done();
})
.on('error', done);
```

# Acknowledgements
With thanks to https://gist.github.com/blahah/bb8ee2c7695180f425f443f88fa16b79
