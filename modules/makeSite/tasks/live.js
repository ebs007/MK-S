var taskSass = require('./sass.js');
var taskImg = require('./img.js');
var taskBase64 = require('./base64.js');
var taskCssInline = require('./cssInline.js');
var cpExt = require('../../../lib/cpExt.js');
var bs = require('browser-sync').create();

module.exports.live = async function () {

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

	bs.watch("src/**/*.html",
	{
		awaitWriteFinish : true
	},
	async function (event, file) {
		if (event === "change") {
			console.log('teste html watch: ', event);
			await taskSass.sass();
			await taskBase64.base64();
			await cpExt.cpExt(
				'./src/',
				'./build/',
				['.html']
			);
			await taskCssInline.cssInline();
			bs.reload('*.html');
		}
	});

	bs.watch("src/**/*.jpg", function (event, file) {
		if (event === "change") {
			taskImg.img();
			bs.reload("*.jpg");
		}
	});

	bs.watch("src/**/*.js",
	{
		awaitWriteFinish : true
	},
	async function (event, file) {
		if (event === "change") {
			await taskSass.sass();
			await taskBase64.base64();
			await cpExt.cpExt(
				'./src/',
				'./build/',
				['.js']
			);
			await cpExt.cpExt(
				'./src/',
				'./build/',
				['.html']
			);
			await taskCssInline.cssInline();
			bs.reload("*.html");
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


	bs.watch("src/**/*.scss",
	{
		awaitWriteFinish : true
	},
	async function (event, file) {
		if (event === "change") {
			console.log('teste sass watch: ', event);
			await taskSass.sass();
			await taskBase64.base64();
			await cpExt.cpExt(
				'./src/',
				'./build/',
				['.html']
			);
			await taskCssInline.cssInline();
			bs.reload('*.html');
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

};
