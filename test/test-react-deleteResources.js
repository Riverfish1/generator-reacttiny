/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('reacttiny:deleteResouces', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/react'))
      .inDir('/home/mike/Documents/TestData/generator/testing')
      .withArguments('settings/react --delete')
      .withPrompts({
        resourcesPath: "./resources",
        delete: true,
        deleteTesting: false
      })
      .on('end', done);
  });

  it('delete files', function () {
    assert.noFile([
      'resources/javascripts/views/settings/reactApp.js'
    ]);
    assert.file([
      'develop/app/settings/reactAppTest.html',
      'develop/test/settings/reactApp-unitTest.js',
      'develop/test/settings/reactApp-endToEndTest.js'
    ]);
  });
});
