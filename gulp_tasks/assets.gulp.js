var gulp         = require('gulp');
var changed      = require('gulp-changed');

// build:images task
gulp.task('build:images', function(){
  	return gulp.src('src/images/**/*.{jpg,png,svg}')
    	.pipe(changed('./build/images/**/*.{jpg,png,svg}'))
    	.pipe(gulp.dest('./build/images'));
});
