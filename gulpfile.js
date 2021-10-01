const gulp = require('gulp');
const smartgrid = require('smart-grid');
function grid(done){
	delete require.cache[require.resolve('./smartgrid.js')];

	let settings = require('./smartgrid.js');
	smartgrid('./static/css', settings);

	settings.offset = '3.1%';
	settings.filename = 'smart-grid-per';
	smartgrid('./static/css', settings);

	done();
}
gulp.task('grid', grid);
