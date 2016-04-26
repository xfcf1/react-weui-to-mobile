var path = require('path');
var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var runSequence = require('run-sequence');

gulp.task('copy', function() {
    return gulp.src(['./src/@(css)/**'])
        .pipe(gulp.dest('lib'))
});
gulp.task('css', function() {
    return gulp.src('./lib/**/*.css')
        .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('lib'))
});
gulp.task('buildCss', function() {
    runSequence('copy', 'css');
});
