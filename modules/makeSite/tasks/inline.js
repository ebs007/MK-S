gulp.task('inline', ['include', 'sass'], function() {
	return gulp.src('public/**/*.html')
	// .pipe(inlineCss())
	// .pipe(inlineimg('src'))
	.pipe(htmlmin({
		collapseInlineTagWhitespace: true,
		collapseWhitespace: true,
		removeAttributeQuotes: true,
		removeComments: true,
		removeEmptyAttributes: true,
		removeRedundantAttributes: true
	}))
	.pipe(gulp.dest('public'))
	.pipe(browserSync.stream());
});
