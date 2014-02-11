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
  this.mkdir('bin');
  
  this.mkdir('scss');
  this.mkdir('scss/partials');
  this.mkdir('scss/vendor');
  this.mkdir('scss/mixin');
  this.mkdir('scss/page');
  
  this.copy('app/app.js', 'app/app.js');
  this.copy('app/initialize.js', 'app/initialize.js');

  this.template('config.rb', 'config.rb');
  this.template('config.coffee', 'config.coffee');
  
  this.copy('watch.bat', 'watch.bat');
  this.copy('compile.bat', 'compile.bat');
  this.copy('_package.json', 'package.json');
  this.copy('bin/optipng.exe', 'bin/optipng.exe');
  this.copy('bin/jpegtran.exe', 'bin/jpegtran.exe');
  
  this.copy('scss/_base.scss', 'scss/_base.scss');
  this.copy('scss/globale.scss', 'scss/globale.scss');
  this.write('scss/partials/_header.scss', '');
  this.write('scss/partials/_layout.scss', '');
  this.write('scss/partials/_footer.scss', '');
  this.write('scss/mixin/_mixin.scss', '');
  this.write('scss/vendor/_vendor.scss', '');
  this.write('scss/page/_page.scss', '');
};

MazBrunchGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
