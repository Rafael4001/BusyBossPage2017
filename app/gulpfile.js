const gulp = require('gulp'),
    sass = require('gulp-sass');


gulp.task('hello', function () {
    console.log('Hello Zell');
});


gulp.task('sass', function(){
    return gulp.src('app/scss/styleSCSS.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('app/css'))
});