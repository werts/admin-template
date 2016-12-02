/**
 * 编译less
 */
const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const lessreporter = require('gulp-less-reporter');

gulp.task('less', function() {
	return gulp.src('src/css/app.less')
		.pipe(less()).on('error', lessreporter)
		.pipe(autoprefixer({
			browsers: ['>5%', 'IE >= 8', 'Firefox <= 20']
		}))
		.pipe(gulp.dest('dist/css'));
});

module.exports = gulp;