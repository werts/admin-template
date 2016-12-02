/**
 * 转换标记ng-到data-ng
 */
const gulp = require('gulp');
const htmlify = require('gulp-angular-htmlify');

gulp.task('htmlify', function() {
	return gulp.src([
			'src/app/**/*.html',
			'src/sys/**/*.html'
		], {base: 'src'})
		.pipe(htmlify())
		.pipe(gulp.dest('dist'));
});

module.exports = gulp;