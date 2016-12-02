/**
 * minify
 */
const gulp = require('gulp');
const ngmin = require('gulp-ngmin');

gulp.task('ngmin', function() {
	return gulp.src(['src/sys/**/*.js', 'src/app/**/*.js'], {base: 'src'})
		.pipe(ngmin({
			dynamic: false
		})).pipe(gulp.dest('dist'));
});

module.exports = gulp;