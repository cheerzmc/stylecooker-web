var gulp = require('gulp');
var babel = require('gulp-babel');
var mocha = require('gulp-mocha');
var karma = require('karma').server;


// Development tasks
gulp.task('travis', ['build', 'testServerJS'], function(){
  process.exit(0);
});

