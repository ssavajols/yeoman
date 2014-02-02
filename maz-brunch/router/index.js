'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var RouterGenerator = module.exports = function RouterGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the router subgenerator with the argument ' + this.name + '.');
};

util.inherits(RouterGenerator, yeoman.generators.NamedBase);

RouterGenerator.prototype.files = function files() {
  this.template('router.js', 'router/'+_.slugify(this.name)+'.js');
};
