gulp.task('robots', function () {
	gulp.src('src/**/*.html')
	.pipe(robots({
		useragent: '*',
		allow: ['/'],
		disallow: ['src/', 'public/'],
		sitemap: 'https://comoconseguirumhomemrico.com/sitemap.xml'
	}))
	.pipe(gulp.dest('public/'));
});
