var expect = require('expect.js'),
    rehypePlaintext = require('..'),
    unified = require('unified'),
    parseHTML = require('rehype-parse'),
    inspect = require('unist-util-inspect');

describe('rehype-plaintext', function() {
  describe('using the streams interface', function() {
    it('should take the input html and output plain text', function(done) {

      var Readable = require('stream').Readable
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
    });
  });
  describe('using the programmatic interface', function() {
    it('should take the input html and output plain text', function(done) {

      unified()
        .use(parseHTML)
        .use(rehypePlaintext)
        .process('<p>Hi there <em>my friend</em> I hope you are well.</p>', function(err, result) {
          if (err) return done(err);
          expect(result.toString()).to.equal('Hi there my friend I hope you are well.');
          done();
        });
    })
  });
});
