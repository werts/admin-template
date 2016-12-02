/**
 * 图片压缩
 */
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const gulp = require('gulp');
const watch = require('gulp-watch');

gulp.task('imagemin', function() {
	return gulp.src('src/img/**/*.+(jpg|png)', {
			base: 'src'
		})
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{
				removeViewBox: false
			}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('dist'));
});

/**
 * watch enabled
 * only for changed file
 */
gulp.task('watch:imagemin', function() {
	return gulp.src('src/img/**/*.+(jpg|png)', {
			base: 'src'
		})
		.pipe(watch('src/img/**/*.+(jpg|png)', {
			base: 'src'
		}))
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{
				removeViewBox: false
			}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('dist'));
});

module.exports = gulp;