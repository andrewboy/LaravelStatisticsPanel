import gulp from 'gulp';
import include from 'gulp-include';
import babel from 'gulp-babel';

gulp.task('default', () => {
    console.log('-- gulp is running task: scripts');

    return gulp.src('src/resources/assets/js/jquery.laravel_statistics_panel.js')
    .pipe(include())
    .pipe(babel())
    .pipe(gulp.dest('src/resources/assets/js/dist'));
});