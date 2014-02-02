'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var MazBrunchGenerator = module.exports = function MazBrunchGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(MazBrunchGenerator, yeoman.generators.Base);

MazBrunchGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'public_path',
    message: 'What is the public path ?',
    default: "../public"
  }];

  this.prompt(prompts, function (props) {
    this.public_path = props.public_path;

    cb();
  }.bind(this));
};

MazBrunchGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/controller');
  this.mkdir('app/router');
  this.mkdir('app/model');
  this.mkdir('app/view');
  this.mkdir('app/view/template');
  this.mkdir('vendor');
  this.mkdir('scss');
  
  this.copy('app/app.js', 'app.js');
  this.copy('app/initialize.js', 'app/initialize.js');

  this.template('config.rb', 'config.rb');
  this.template('config.coffee', 'config.coffee');
  
  this.copy('watch.bat', 'watch.bat');
  this.copy('compile.bat', 'compile.bat');
  this.copy('_package.json', 'package.json');
  
  this.write('scss/global.scss', '@import "compass/reset";');
};

MazBrunchGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
