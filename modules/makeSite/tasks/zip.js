gulp.task('zip', function () {
	gulp.src('public/**/*')
	.pipe(zip('archive.zip'))
	.pipe(gulp.dest('zip/'));
});
