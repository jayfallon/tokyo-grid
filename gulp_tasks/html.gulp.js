var gulp = require('gulp');

// build:html task
gulp.task('build:html', function() {
    return gulp.src('./src/html/index.html')
        .pipe(gulp.dest('./build/'));
});
