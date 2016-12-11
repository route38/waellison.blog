'use strict';

/*
 * LET'S SUBVERT JEKYLL'S ALLEGED "ASSET PIPELINE" ENTIRELY!!!1
 *
 * We can build, test, and even deploy the site all from Gulp.
 */

const gulp = require('gulp');
const gutil = require('gulp-util');
const sass = require('gulp-ruby-sass');
const coffee_script = require('gulp-coffee');
const haml = require('gulp-ruby-haml');
const source_map = require('gulp-sourcemaps');
const coffee_lint = require('gulp-coffeelint');
const sass_lint = require('gulp-sass-lint');
const uglify = require('gulp-uglify');
const child = require('child_process');
const clean_css = require('gulp-clean-css');

const style_root = 'TheChain/TheChain.sass';
const scripts = 'js/*.coffee';
const scaffolds = '_haml/*.haml';

const browser_sync = require('browser-sync').create();
const site_root = '_site';

var jekyll_build = function() {
  const jekyll = child.spawn('jekyll', ['build']);

  const jekyll_logger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('build: ' + message));
  };

  jekyll.stdout.on('data', jekyll_logger);
  jekyll.stderr.on('data', jekyll_logger);
};

gulp.task('script-lint', () => {
  gulp.src(scripts)
    .pipe(coffee_lint())
    .pipe(coffee_lint.reporter());
});

gulp.task('scripts-debug', ['script-lint'], () => {
  gulp.src(scripts)
    .pipe(source_map.init())
    .pipe(coffee_script({bare: true}).on('error', gutil.log))
    .pipe(source_map.write())
    .pipe(gulp.dest('js'));
  gulp.src('TheChain/TheChain.js')
    .pipe(gulp.dest('js'));
});

gulp.task('scripts-deploy', ['script-lint'], () => {
  gulp.src(scripts)
    .pipe(coffee_script({bare: true}).on('error', gutil.log))
    .pipe(uglify({compress: true}))
    .pipe(gulp.dest('js'));
  gulp.src('TheChain/TheChain.js')
    .pipe(uglify({compress: true}))
    .pipe(gulp.dest('js'));
});

gulp.task('scripts', ['scripts-debug'], () => {});

gulp.task('sass-lint', () => {
  gulp.src(style_root)
    .pipe(sass_lint())
    .pipe(sass_lint.format())
    .pipe(sass_lint.failOnError());
});

gulp.task('sass', ['sass-lint'], () => {
  sass(style_root, {sourcemap: true})
    .on('error', sass.logError)
    .pipe(source_map.write())
    .pipe(gulp.dest('TheChain'));
});

gulp.task('sass-deploy', ['sass-lint'], () => {
  sass(style_root)
    .on('error', sass.logError)
    .pipe(clean_css())
    .pipe(gulp.dest('TheChain'));
});

gulp.task('haml', function() {
  gulp.src(scaffolds)
    .pipe(haml().on('error', function(e) { console.log(e.message)}))
    .pipe(gulp.dest('_includes'));
});

gulp.task('jekyll', ['sass-deploy', 'scripts-deploy', 'haml'], jekyll_build);

gulp.task('watch', ['sass', 'haml', 'scripts'], () => {
  gulp.watch(scaffolds, ['haml']);
  gulp.watch('TheChain/**/*.sass', ['sass']);
  gulp.watch(scripts, ['scripts']);
});

gulp.task('default', ['sass', 'haml', 'scripts', 'watch']);
