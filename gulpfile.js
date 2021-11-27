'use strict';

/*
 * tnwae's wee li'l asset pipeline, targetted at Jekyll users but
 * probably good enough for anyone.
 *
 * Version 2017,3
 * WTFPL
 */

const gulp          = require('gulp');
const gutil         = require('gulp-util');
const sass          = require('gulp-sass')(require('sass'));
const coffee_script = require('gulp-coffee');
const haml          = require('gulp-ruby-haml');
const source_map    = require('gulp-sourcemaps');
const coffee_lint   = require('gulp-coffeelint');
const sass_lint     = require('gulp-sass-lint');
const uglify        = require('gulp-uglify');
const child         = require('child_process');
const clean_css     = require('gulp-clean-css');
const browser_sync  = require('browser-sync').create();
const style_root    = 'TheChain/TheChain.sass';
const scripts       = 'TheBall/*.coffee';
const scaffolds     = '_haml/*.haml';

// Build a Jekyll site the JavaScript way.  Jekyll, and hence the
// RubyGems directory, must be on your PATH.
var jekyll_build = function() {
  const jekyll = child.spawn('jekyll', ['build']);

  const jekyll_logger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('build: ' + message));
  };

  jekyll.stdout.on('data', jekyll_logger);
  jekyll.stderr.on('data', jekyll_logger);
}

var jekyll_serve = () => {
  const jekyll = child.spawn('jekyll', ['serve', '--watch'])

  const jekyll_logger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('build: ' + message));
  };

  jekyll.stdout.on('data', jekyll_logger);
  jekyll.stderr.on('data', jekyll_logger);
}

// Lint the scripts before building.
gulp.task('script-lint', () => {
  gulp.src(scripts)
    .pipe(coffee_lint())
    .pipe(coffee_lint.reporter());
});

// Build the scripts for debugging.
gulp.task('scripts-debug', ['script-lint'], () => {
  gulp.src(scripts)
    .pipe(source_map.init())
    .pipe(coffee_script({bare: true}).on('error', gutil.log))
    .pipe(source_map.write())
    .pipe(gulp.dest('TheBall'));
});

// Build the scripts for deployment.
gulp.task('scripts', ['script-lint'], () => {
  gulp.src(scripts)
    .pipe(coffee_script({bare: true}).on('error', gutil.log))
    .pipe(uglify({compress: true}))
    .pipe(gulp.dest('TheBall'));
});

// Lint the Sass files.
gulp.task('sass-lint', () => {
  gulp.src(style_root)
    .pipe(sass_lint())
    .pipe(sass_lint.format())
    .pipe(sass_lint.failOnError());
});

// Build Sass, development-style.
gulp.task('sass-debug', ['sass-lint'], () => {
  return gulp.src(style_root)
    .pipe(sass({sourcemap: true}).on('error', sass.logError))
    .pipe(source_map.write())
    .pipe(gulp.dest('TheChain'));
});

// Build Sass, deployment-style.
gulp.task('sass', ['sass-lint'], () => {
  return gulp.src(style_root)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('TheChain'));
});

// Build the Haml scaffolds and dump them into _includes.
gulp.task('haml', function() {
  return gulp.src(scaffolds)
    .pipe(haml().on('error', function(e) { console.log(e.message) }))
    .pipe(gulp.dest('_includes'));
});

// Build the site prior to deployment.
gulp.task('jekyll', ['sass', 'scripts', 'haml'], jekyll_build);

// Build everything and watch for changes.  This is for debug builds.
gulp.task('watch', ['haml', 'sass-debug', 'scripts-debug'], () => {
  gulp.watch(scaffolds, ['haml']);
  gulp.watch('TheChain/**/*.s{a,c}ss', ['sass-debug']);
  gulp.watch(scripts, ['scripts-debug']);
  jekyll_serve();
});

// So that the tasks are run once before the watch is initiated, the
// default task runs the builds before watching for changes.  When
// Jekyll is run concurrently, it will listen for changes generated by
// Gulp and roll those changes into its site build.  Yes, this does
// lengthen the builds somewhat, but the tradeoff is apt, I think.
gulp.task('default', ['haml', 'sass-debug', 'scripts-debug', 'watch']);

