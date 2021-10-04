const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-minify');


// Sass Compile to css 
gulp.task('styles', ()=>{
    return gulp.src('sass/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('css'))
})

// Js minify
gulp.task('minify-js', ()=>{
    return gulp.src('js/*.js') 
    .pipe(minify())
    .pipe(gulp.dest('js'))
});


// Watch Function
gulp.task('watch', ()=>{
    return gulp.watch('sass/*.scss', ()=>{
        gulp.series(['styles']);
    })
});

