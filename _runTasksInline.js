var taskSass = require('./modules/makeSite/tasks/sass.js');
var taskImg = require('./modules/makeSite/tasks/img.js');
// var taskCssInline = require('./modules/makeSite/tasks/cssInline.js');
var taskLive = require('./modules/makeSite/tasks/live.js');
var rmDir = require('./lib/rmDir.js');
var mkDir = require('./lib/mkDir.js');
var cpExt = require('./lib/cpExt.js');
var checkExist = require('./lib/checkExist.js');

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

const task = async () => {
	let css = await taskSass.sass();
	let img = await taskImg.img();
	// let inline = await taskCssInline.cssInline();
	let live = await taskLive.live();
	return {
		'css:':css,
		'img:':img,
		// 'inline': inline,
		'live': live
	};
}

task()
.then((value) => console.log('SUCCESS', value)) // 2 + 3 + 2 + 6 = 13
.catch((error) => console.log('FAILURE', error)); // Random error