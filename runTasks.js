var taskCopyHtml = require('./modules/makeSite/tasks/copyHtml.js');
var taskCopyJpg = require('./modules/makeSite/tasks/copyJpg.js');
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

taskCopyHtml.copyHtml();
taskCopyJpg.copyJpg();
taskCopySvg.copySvg();
taskLess.less();

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
	server: "./build"
});
