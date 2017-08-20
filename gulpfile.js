const
    gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    sass    = require('gulp-sass'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat'),
    pump    = require('pump'),
    babel   = require('gulp-babel'),
    browserSync = require('browser-sync').create();

gulp.task('log', () => {
    gutil.log('== My Log Task ==')
});

gulp.task('sass', () => {
    gulp.src('scss/style.scss')
        .pipe(sass({style: 'expanded'}))
            .on('error', gutil.log)
        .pipe(gulp.dest('assets'))
        .pipe(browserSync.stream())
});

gulp.task('js', cb => {
    pump([
            gulp.src('js/*.js'),
            babel({
                presets: ['env']
            }),
            uglify(),
            concat('script.js'),
            gulp.dest('assets')
        ],
    cb
    );
});

gulp.task('js-watch', ['js'], done => {
    browserSync.reload();
    done();
});

gulp.task('serve', ['sass', 'js'], () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    
    gulp.watch('js/*.js', ['js-watch']);
    gulp.watch('scss/style.scss', ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});