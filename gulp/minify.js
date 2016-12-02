/**
 * minify
 */
const gulp = require('gulp');
const ngmin = require('gulp-ngmin');
const watch = require('gulp-watch');

gulp.task('ngmin', function() {
	return gulp.src(['src/sys/**/*.js', 'src/app/**/*.js'], {
			base: 'src'
		})
		.pipe(ngmin({
			dynamic: false
		})).pipe(gulp.dest('dist'));
});

/**
 * watch enabled
 * only for changed file
 */
gulp.task('watch:ngmin', function() {
	return gulp.src(['src/sys/**/*.js', 'src/app/**/*.js'], {
			base: 'src'
		})
		.pipe(watch(['src/sys/**/*.js', 'src/app/**/*.js'], {
			base: 'src'
		}))
		.pipe(ngmin({
			dynamic: false
		})).pipe(gulp.dest('dist'));
});

module.exports = gulp;