const
    gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    sass    = require('gulp-sass'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat'),
    connect = require('gulp-connect'),
    pump    = require('pump'),
    babel   = require('gulp-babel');

gulp.task('log', () => {
    gutil.log('== My Log Task ==')
});

gulp.task('sass', () => {
    gulp.src('scss/style.scss')
        .pipe(sass({style: 'expanded'}))
            .on('error', gutil.log)
        .pipe(gulp.dest('assets'))
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

gulp.task('watch', () => {
    gulp.watch('js/*.js', ['js']);
    gulp.watch('scss/style.scss', ['sass']);
});

gulp.task('connect', () => {
    connect.server({
        root: '.',
        livereload: true
    })
});