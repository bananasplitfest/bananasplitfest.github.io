var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');

// Task: Sass
gulp.task('sass', function() {
    return gulp.src('./source/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./source/css'));
});

// Task:: jshint
gulp.task('jshint', function() {
  return gulp.src('source/javascript/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Task: Default
gulp.task('default', ['sass'], function() {
    gulp.watch('./source/scss/_partial/*.scss', ['sass']);
    gulp.watch('./source/scss/*.scss', ['sass']);
});


//sass({outputStyle: 'compressed'})
