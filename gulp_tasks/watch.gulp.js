var gulp = require('gulp');

// watch task
gulp.task('watch', function() {
    gulp.watch('./src/html/**/*.html', ['build:html']);
    gulp.watch('./src/css/**/*.css', ['build:css']);
	gulp.watch('./src/images/**/*.{jpg,png,svg}', ['build:images']);
});
