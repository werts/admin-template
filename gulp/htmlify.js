/**
 * 转换标记ng-到data-ng
 */
const gulp = require('gulp');
const htmlify = require('gulp-angular-htmlify');
const watch = require('gulp-watch');

gulp.task('htmlify', function() {
	return gulp.src([
			'src/app/**/*.html',
			'src/sys/**/*.html'
		], {
			base: 'src'
		})
		.pipe(htmlify())
		.pipe(gulp.dest('dist'));
});

/**
 * watch enabled
 * only for changed file
 */
gulp.task('watch:htmlify', function() {
	return gulp.src([
			'src/app/**/*.html',
			'src/sys/**/*.html'
		], {
			base: 'src'
		})
		.pipe(watch([
			'src/app/**/*.html',
			'src/sys/**/*.html'
		], {
			base: 'src'
		}))
		.pipe(htmlify())
		.pipe(gulp.dest('dist'));
});

module.exports = gulp;