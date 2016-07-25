import gulp from 'gulp';
import include from 'gulp-include';
//import concat from 'gulp-concat';
//import uglify from 'gulp-uglify';
//import rename from 'gulp-rename';
import babel from 'gulp-babel';
//import browserify from 'browserify';
//import source from 'vinyl-source-stream';
//import buffer from 'vinyl-buffer';
//import del from 'del';

gulp.task('default', () => {
    console.log('-- gulp is running task: scripts');

    return gulp.src('src/resources/assets/js/jquery.laravel_statistics_panel.js')
    .pipe(include())
    .pipe(babel())
    .pipe(gulp.dest('src/resources/assets/js/dist'));
});