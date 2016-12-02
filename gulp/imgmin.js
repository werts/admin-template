/**
 * 图片压缩
 */
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const gulp = require('gulp');

gulp.task('imagemin', function() {
	return gulp.src('src/img/**/*.+(jpg|png)', {base: 'src'})
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