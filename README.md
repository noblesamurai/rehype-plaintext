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
var rehypePlaintext = require('rehype-plaintext'),
    unified = require('unified'),
    parseHTML = require('rehype-parse'),
    expect = require('expect.js');

    unified()
      .use(parseHTML)
      .use(rehypePlaintext)
      .process('<p>Hi there <em>my friend</em> I hope you are well.</p>', function(err, result) {
        expect(result.toString()).to.equal('Hi there my friend I hope you are well.');
      });
```

# Acknowledgements
With thanks to https://gist.github.com/blahah/bb8ee2c7695180f425f443f88fa16b79
