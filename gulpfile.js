/*global require*/
var gulp = require('gulp'),
    include = require('gulp-include'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename"),
    uglify_js = require("uglify-js");

gulp.task('scripts', function () {
    console.log('-- gulp is running task: scripts');

    gulp.src('src/resources/assets/jquery.laravel_statistics_panel.js')
        .pipe(include())
        .pipe(gulp.dest('src/resources/assets/js/compiled'))
        .pipe(uglify())
        .pipe(rename({
            dirname: '',
            prefix: 'jquery.',
            basename: 'laravel_statistics_panel',
            suffix: '.min',
            extname: '.js'
        }))
        .pipe(gulp.dest('src/resources/assets/js/compiled'))
        //.on('error', console.log)
    ;
});

gulp.task('default', ['scripts']);