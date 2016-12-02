/**
 * gulp任务文件
 */
const gulp = require('gulp');
const sequence = require('gulp-sequence');
const htmlify = require('./gulp/htmlify');
const minify = require('./gulp/minify');
const imgmin = require('./gulp/imgmin');
const less = require('./gulp/less');

//构建生成文件
gulp.task('build', sequence('htmlify', 'ngmin', 'less', 'imagemin'));
//watch服务
//gulp.task();
