'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ScssPageGenerator = module.exports = function ScssPageGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the scss_page subgenerator with the argument ' + this.name + '.');
};

util.inherits(ScssPageGenerator, yeoman.generators.NamedBase);

ScssPageGenerator.prototype.files = function files() {
  this.write('scss/page/_'+this.name+'.scss', '');
};
