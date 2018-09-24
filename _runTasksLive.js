var taskSass = require('./modules/makeSite/tasks/sass.js');
var taskImg = require('./modules/makeSite/tasks/img.js');
var taskLive = require('./modules/makeSite/tasks/live.js');
var rmDir = require('./lib/rmDir.js');
var mkDir = require('./lib/mkDir.js');
var cpExt = require('./lib/cpExt.js');
var checkExist = require('./lib/checkExist.js');

var loadPath = require('../../../lib/loadPath.js');
var mountFileVar = require('../../../lib/mountFileVar.js');
var sass = require('node-sass');
// var mountSass = require('../modules/mountSass.js');
var fs = require('fs-extra');
var path = require('path');

var bs = require('browser-sync').create();

if(checkExist.checkExist('./build/')) {
	// console.log('exist');
	rmDir.rmDir('./build/');
}

mkDir.mkDir('./build/');


/**
* -----------------------------------------------------------------------
*                              Copy to build
* -----------------------------------------------------------------------
*/

cpExt.cpExt(
	'./src/',
	'./build/',
	[
		'.svg',
		'.js',
		'.css',
		'.html',
		'.eot',
		'.ttf',
		'.woff',
		'.woff2',
		'.gif'
	]
);

/**
* -----------------------------------------------------------------------
*                            Copy to build End
* -----------------------------------------------------------------------
*/

taskSass.sass();
taskImg.img();

bs.watch("src/**/*.css", function (event, file) {
	if (event === "change") {
		cpExt.cpExt(
			'./src/',
			'./build/',
			['.css']
		);
		bs.reload("*.css");
	}
});

bs.watch("src/**/*.gif", function (event, file) {
	if (event === "change") {
		cpExt.cpExt(
			'./src/',
			'./build/',
			['.gif']
		);
		bs.reload("*.gif");
	}
});

bs.watch("src/**/*.html", function (event, file) {
	if (event === "change") {
		cpExt.cpExt(
			'./src/',
			'./build/',
			['.html']
		);
		// await taskCssInline.cssInline();
		bs.reload("*.html");
	}
});

bs.watch("src/**/*.jpg", function (event, file) {
	if (event === "change") {
		taskImg.img();
		bs.reload("*.jpg");
	}
});

bs.watch("src/**/*.js", function (event, file) {
	if (event === "change") {
		cpExt.cpExt(
			'./src/',
			'./build/',
			['.js']
		);
		bs.reload("*.js");
	}
});

bs.watch("src/**/*.png", function (event, file) {
	if (event === "change") {
		taskImg.img();
		bs.reload("*.png");
	}
});

bs.watch("src/**/*.Svg", function (event, file) {
	if (event === "change") {
		cpExt.cpExt(
			'./src/',
			'./build/',
			['.svg']
		);
		bs.reload("*.Svg");
	}
});

bs.watch("src/**/*.scss", function (event, file) {
	if (event === "change") {
		console.log('teste');
		taskSass.sass();
		// taskCssInline.cssInline();
		bs.reload('*.css');
		// bs.reload('*.html');
	}
});

// Now init the Browsersync server
bs.init({
	// https: true,
	// cors: true,
	server: {
		baseDir: "build",
		// index: "/new-home-page/index.html"
	},
	startPath: "/new-home-page/index.html"
});
