import gulp from 'gulp';
import include from 'gulp-include';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import babel from 'gulp-babel';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import del from 'del';

gulp.task('default', () => {
    console.log('-- gulp is running task: scripts');

    gulp.src('src/resources/assets/js_babel/jquery.laravel_statistics_panel.js')
    .pipe(include())
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('src/resources/assets/js_babel/dist'));

    return gulp.src('src/resources/assets/js/jquery.laravel_statistics_panel.js')
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

//gulp.task('clean-temp', function(){
//    return del(['src/resources/assets/js_babel/dist']);
//});
//
//gulp.task('es6-commonjs',['clean-temp'], function(){
//    return gulp.src(['src/resources/assets/js_babel/*.js'])
//        .pipe(babel({
//            presets: ['es2015']
//        }))
//        .pipe(gulp.dest('src/resources/assets/js_babel/dist/temp'));
//});
//
//gulp.task('bundle-commonjs-clean', function(){
//    return del(['es5/commonjs']);
//});
//
//gulp.task('commonjs-bundle',['bundle-commonjs-clean','es6-commonjs'], function(){
//    return browserify(['src/resources/assets/js_babel/dist/temp/app.js'])
//        .bundle()
//    //    .pipe(source('app.js'))
//    //    .pipe(buffer())
//    //    .pipe(uglify())
//    //    .pipe(rename('app.js'))
//    //    .pipe(gulp.dest("es5/commonjs"))
//     ;
//});
//
//gulp.task('commonjs', ['commonjs-bundle']);