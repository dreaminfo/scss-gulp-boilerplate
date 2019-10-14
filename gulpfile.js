const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
 
function style() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('eror', sass.logError))
        .pipe(gulp.dest('./src/'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './src'
        }
    });

    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./src/*.html').on('change', browserSync.reload);
    gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
}

const build = gulp.series(style, watch);

exports.style = style;
exports.watch = watch;
exports.default = build;
