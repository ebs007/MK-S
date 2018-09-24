gulp.task('js', function (cb) {
	return gulp.src([
		"node_modules/jQuery/dist/jquery.js",
		"node_modules/bootstrap-sass/assets/javascripts/bootstrap.js",
		// "node_modules/angular/angular.js",
		'src/assets/js/**/*.js'
	])
	.pipe(sourcemaps.init())

	// .pipe(babel({
	// 	presets: ['es2015']
	// }))
	.pipe(uglify())
	.pipe(concat('all.min.js'))
	.pipe(sourcemaps.write('.'))
	// .pipe(rev())
	.pipe(gulp.dest('public/assets/js/'))
	// .pipe(rev.manifest())
	// .pipe(revDel())
	.pipe(browserSync.stream());
});
