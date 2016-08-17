var visit = require('unist-util-visit');

module.exports = function (processor, config) {
  function Compiler (file, options, processor) {
    this.options = options;
    this.data = processor.data;
    this.file = file;
  }

  function compile (tree) {
    var parts = [];
    visit(tree, 'text', function (node) {
      parts.push(node.value);
    });
    return parts.join('');
  }

  /* Expose methods. */
  Compiler.prototype.compile = compile;
  processor.Compiler = Compiler;
};
