var gulp         = require('gulp');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var partial = require('postcss-partial-import');

// default gulp task
gulp.task('default', ['watch']);

// watch task
gulp.task('watch', function() {
    gulp.watch('src/html/**/*.html', ['build:html']);
    gulp.watch('src/css/**/*.css', ['build:css']);
});

// build: html task
gulp.task('build:html', function() {
    return gulp.src('src/html/index.html')
        .pipe(gulp.dest('./build/'));
});

// build: css task
gulp.task('build:css', function() {
    return gulp.src('src/css/main.css')
        .pipe(
            postcss([
				partial(),
                autoprefixer()
            ])
        )
		.pipe(gulp.dest('./build/css/'));
});
