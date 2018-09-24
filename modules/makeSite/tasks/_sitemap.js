gulp.task('sitemap', function () {
	gulp.src('public/**/*.html', {
		read: false
	})
	.pipe(sitemap({
		siteUrl: 'https://comoconseguirumhomemrico.com'
	}))
	.pipe(gulp.dest('public/'));
});
