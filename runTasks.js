var taskCopyCss = require('./modules/makeSite/tasks/copyCss.js');
var taskCopyGif = require('./modules/makeSite/tasks/copyGif.js');
var taskCopyHtml = require('./modules/makeSite/tasks/copyHtml.js');
var taskCopyJpg = require('./modules/makeSite/tasks/copyJpg.js');
var taskCopyJs = require('./modules/makeSite/tasks/copyJs.js');
var taskCopyPng = require('./modules/makeSite/tasks/copyPng.js');
var taskCopySvg = require('./modules/makeSite/tasks/copySvg.js');
var taskLess = require('./modules/makeSite/tasks/less.js');
var rmDir = require('./lib/rmDir.js');
var checkExist = require('./lib/checkExist.js');
var bs = require("browser-sync").create();

if(checkExist.checkExist('./build')) {
	console.log('exist');
	rmDir.rmDir('./build');
} else {
	console.log('not exist');
}

taskCopyCss.copyCss();
taskCopyGif.copyGif();
taskCopyHtml.copyHtml();
taskCopyJpg.copyJpg();
taskCopyJs.copyJs();
taskCopyPng.copyPng();
taskCopySvg.copySvg();
taskLess.less();

bs.watch("src/**/*.css", function (event, file) {
	if (event === "change") {
		taskCopyCss.copyCss();
		bs.reload("*.css");
	}
});

bs.watch("src/**/*.gif", function (event, file) {
	if (event === "change") {
		taskCopyGif.copyGif();
		bs.reload("*.gif");
	}
});

bs.watch("src/**/*.html", function (event, file) {
	if (event === "change") {
		taskCopyHtml.copyHtml();
		bs.reload("*.html");
	}
});

bs.watch("src/**/*.jpg", function (event, file) {
	if (event === "change") {
		taskCopyJpg.copyJpg();
		bs.reload("*.jpg");
	}
});

bs.watch("src/**/*.js", function (event, file) {
	if (event === "change") {
		taskCopyJs.copyJs();
		bs.reload("*.js");
	}
});

bs.watch("src/**/*.png", function (event, file) {
	if (event === "change") {
		taskCopyPng.copyPng();
		bs.reload("*.png");
	}
});

bs.watch("src/**/*.Svg", function (event, file) {
	if (event === "change") {
		taskCopySvg.copySvg();
		bs.reload("*.Svg");
	}
});

bs.watch("src/**/*.less", function (event, file) {
	if (event === "change") {
		taskLess.less();
		bs.reload("*.css");
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
