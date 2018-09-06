gulp.task('jshint', function() {
	return gulp.src('src/assets/js/main.js')
	.pipe(jshint())
	.pipe(jshint.reporter(stylish, {
		'curly': true,
		'newcap': true,
		'eqeqeq': true,
		'undef': true,
		'devel': true,
		'debug': true,
		'globals': {
			'$': true,
			'jQuery': true,
			'angular': true,
			'console': true,
			'document': true,
			'navigator': true,
			'window': true,
			'httpService': true,
			'request': true,
			'w3IncludeHTML': true,
			'XMLHttpRequest': true
		},
		all: "src/assets/js/*.js",
		prod: {
			options: {
				'devel': false,
				'debug': false
			},
			ignores: [
				"node_modules/jQuery/dist/jquery.js",
				"node_modules/bootstrap-sass/assets/javascripts/bootstrap.js",
				'node_modules/webfontloader/webfontloader.js',
				"src/assets/js/ng-table.min.js",
				"src/assets/js/w3data.js"
			],
		}
	}));
});
