'use strict';

var gulp = require('gulp'),
  gulpLoadPlugins = require('gulp-load-plugins'),
  through = require('through'),
  gutil = require('gulp-util'),
  plugins = gulpLoadPlugins(),
  paths = {
    js: ['./*.js', 'config/**/*.js', 'gulp/**/*.js', 'tools/**/*.js', 'packages/**/*.js', '!packages/**/node_modules/**', '!packages/**/assets/**/lib/**', '!packages/**/assets/**/js/**'],
    html: ['packages/**/*.html', '!packages/**/node_modules/**', '!packages/**/assets/**/lib/**'],
    css: ['packages/**/*.css', '!packages/**/node_modules/**', '!packages/**/assets/**/lib/**','!packages/core/**/public/assets/css/*.css'],
    sass: ['packages/**/*.scss', '!packages/**/node_modules/**', '!packages/**/assets/**/lib/**']
  };

/*var defaultTasks = ['clean', 'jshint', 'less', 'csslint', 'devServe', 'watch'];*/
// var defaultTasks = ['coffee','clean', 'less', 'sass', 'csslint', 'devServe', 'watch'];
var defaultTasks = ['clean', 'sass', 'csslint', 'devServe'];

gulp.task('env:development', function () {
  process.env.NODE_ENV = 'development';
});

gulp.task('jshint', function () {
  return gulp.src(paths.js)
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'))
    // .pipe(plugins.jshint.reporter('fail')) to avoid shutdown gulp by warnings
    .pipe(count('jshint', 'files lint free'));
});

gulp.task('csslint', function () {
  return gulp.src(paths.css)
    .pipe(plugins.csslint('.csslintrc'))
    .pipe(plugins.csslint.reporter())
    .pipe(count('csslint', 'files lint free'));
});

// gulp.task('less', function() {
//   return gulp.src(paths.less)
//     .pipe(plugins.less())
//     .pipe(gulp.dest('./packages'));
// });

gulp.task('sass', function() {
  return gulp.src(paths.sass)
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(gulp.dest('./packages'));
});

gulp.task('devServe', ['env:development'], function () {

  plugins.nodemon({
    script: 'server.js',
    ext: 'html js',
    env: { 'NODE_ENV': 'development' } ,
    ignore: [
      'node_modules/',
      'bower_components/',
      'logs/',
      'packages/*/*/public/assets/lib/',
      'packages/*/*/node_modules/',
      '.DS_Store', '**/.DS_Store',
      '.bower-*',
      '**/.bower-*',
      '**/tests'
    ],
    nodeArgs: ['--debug'],
    stdout: false
  });
});

// gulp.task('coffee', function() {
//   gulp.src(paths.coffee)
//     .pipe(coffee({bare: true}).on('error', gutil.log))
//     .pipe(gulp.dest('./packages'));
// });

function count(taskName, message) {
  var fileCount = 0;

  function countFiles(file) {
    fileCount++; // jshint ignore:line
  }

  function endStream() {
    gutil.log(gutil.colors.cyan(taskName + ': ') + fileCount + ' ' + message || 'files processed.');
    this.emit('end'); // jshint ignore:line
  }
  return through(countFiles, endStream);
}

gulp.task('development', defaultTasks);