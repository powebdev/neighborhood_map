// Include gulp
var gulp = require('gulp');

// Include plugins
var htmlmin = require('gulp-htmlmin');
var strreplace = require('gulp-replace');
var stripcomments = require('gulp-strip-comments');

// Minify HTMLs
gulp.task('dev_to_prod_html', function() {
	return gulp.src('src/*.html')
		.pipe(strreplace('<!--Start Prod Scripts','<!--Start Prod Scripts-->'))
		.pipe(strreplace('End Prod Scripts-->','<!--End Prod Scripts-->'))
		.pipe(strreplace('<!--Start Dev Scripts-->','<!--Start Dev Scripts'))
		.pipe(strreplace('<!--End Dev Scripts-->','End Dev Scripts-->'))
		.pipe(strreplace('<link href="css/style.css" rel="stylesheet">', '<style>%css_here%</style>'))
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(stripcomments())
		.pipe(gulp.dest('build'));

});

// Default Task
gulp.task('default', ['dev_to_prod_html']);
