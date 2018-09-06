gulp.task('sass', function () {
	return gulp.src([
		'src/assets/css/*.css',
		"src/assets/scss/main.scss"
	])
	// .pipe(gulpIgnore.exclude('src/assets/css/effect1.css'))
	.pipe(sourcemaps.init())
	.pipe(sass({
		// outputStyle: 'compressed'
	}).on('error', sass.logError))
	.pipe(uncss({
		html: ['public/**/*.html'],
		ignore: [
			".fade",
			".fade.in",
			".collapse",
			".collapse.in",
			".collapsing",
			".alert-danger",
			/\.open/
		]
	}))
	.pipe(cleanCss({
		compatibility: 'ie7,ie8,ie9',
		level: {
			1: {
				cleanupCharsets: true, // controls `@charset` moving to the front of a stylesheet; defaults to `true`
				normalizeUrls: true, // controls URL normalization; defaults to `true`
				optimizeBackground: true, // controls `background` property optimizations; defaults to `true`
				optimizeBorderRadius: true, // controls `border-radius` property optimizations; defaults to `true`
				optimizeFilter: true, // controls `filter` property optimizations; defaults to `true`
				optimizeFont: true, // controls `font` property optimizations; defaults to `true`
				optimizeFontWeight: true, // controls `font-weight` property optimizations; defaults to `true`
				optimizeOutline: true, // controls `outline` property optimizations; defaults to `true`
				removeEmpty: true, // controls removing empty rules and nested blocks; defaults to `true`
				removeNegativePaddings: true, // controls removing negative paddings; defaults to `true`
				removeQuotes: true, // controls removing quotes when unnecessary; defaults to `true`
				removeWhitespace: true, // controls removing unused whitespace; defaults to `true`
				replaceMultipleZeros: true, // contols removing redundant zeros; defaults to `true`
				replaceTimeUnits: true, // controls replacing time units with shorter values; defaults to `true`
				replaceZeroUnits: true, // controls replacing zero values with units; defaults to `true`
				roundingPrecision: false, // rounds pixel values to `N` decimal places; `false` disables rounding; defaults to `false`
				selectorsSortingMethod: 'standard', // denotes selector sorting method; can be `'natural'` or `'standard'`, `'none'`, or false (the last two since 4.1.0); defaults to `'standard'`
				specialComments: 'none', // denotes a number of /*! ... */ comments preserved; defaults to `all`
				tidyAtRules: true, // controls at-rules (e.g. `@charset`, `@import`) optimizing; defaults to `true`
				tidyBlockScopes: true, // controls block scopes (e.g. `@media`) optimizing; defaults to `true`
				tidySelectors: true, // controls selectors optimizing; defaults to `true`,
				transform: function () {} // defines a callback for fine-grained property optimization; defaults to no-op
			},
			2: {
				mergeAdjacentRules: true, // controls adjacent rules merging; defaults to true
				mergeIntoShorthands: true, // controls merging properties into shorthands; defaults to true
				mergeMedia: true, // controls `@media` merging; defaults to true
				mergeNonAdjacentRules: true, // controls non-adjacent rule merging; defaults to true
				mergeSemantically: false, // controls semantic merging; defaults to false
				overrideProperties: true, // controls property overriding based on understandability; defaults to true
				removeEmpty: true, // controls removing empty rules and nested blocks; defaults to `true`
				reduceNonAdjacentRules: true, // controls non-adjacent rule reducing; defaults to true
				removeDuplicateFontRules: true, // controls duplicate `@font-face` removing; defaults to true
				removeDuplicateMediaBlocks: true, // controls duplicate `@media` removing; defaults to true
				removeDuplicateRules: true, // controls duplicate rules removing; defaults to true
				removeUnusedAtRules: true, // controls unused at rule removing; defaults to false (available since 4.1.0)
				restructureRules: false, // controls rule restructuring; defaults to false
				skipProperties: [] // controls which properties won't be optimized, defaults to `[]` which means all will be optimized (since 4.1.0)
			}
		}
	}))
	.pipe(concat('all.min.css'))
	.pipe(sourcemaps.write('.'))
	// .pipe(rev())
	// .pipe(gulp.dest('public/assets/css'))
	// .pipe(rev.manifest())
	// .pipe(revDel({dest: 'public/assets/css'}))
	.pipe(gulp.dest('public/assets/css/'));
	// .pipe(browserSync.stream());
});
