'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.appname = "test";
  },
  prompting: {
    askName: function () {
      var done = this.async();

      // Have Yeoman greet the user.
      this.log(yosay(
        'Welcome to the finest ' + chalk.red('Toa') + ' generator!'
      ));

      var prompts = [{
        name: 'appname',
        message: 'What\'s the base name of your toa Server?',
        default: 'toa-server'
      }];

      this.prompt(prompts, function (props) {
        //this.props = props;
        // To access props later use this.props.someOption;
        this.appname = props.appname;
        done();
      }.bind(this));
    }
  },

  configuring: {
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('app.js'),
        this.destinationPath('app.js')
      );
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
