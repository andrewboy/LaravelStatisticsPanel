import gulp from 'gulp';
import include from 'gulp-include';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import babel from 'gulp-babel';

gulp.task('default', () => {
    console.log('-- gulp is running task: scripts');

    return gulp.src('src/resources/assets/jquery.laravel_statistics_panel.js')
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
        .pipe(gulp.dest('src/resources/assets/js/compiled'));
});