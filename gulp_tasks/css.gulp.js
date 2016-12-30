var gulp         = require('gulp');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var partial      = require('postcss-partial-import');
var lost         = require('lost');
var nesting      = require('postcss-nesting');

// build:css task
gulp.task('build:css', function() {
    return gulp.src('./src/css/main.css')
        .pipe(
            postcss([
				partial(),
				nesting(),
                autoprefixer(),
				lost()
            ])
        )
		.pipe(gulp.dest('./build/css/'));
});
