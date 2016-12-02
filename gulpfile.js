/**
 * gulp任务文件
 */
const gulp = require('gulp');
const sequence = require('gulp-sequence');
const htmlify = require('./gulp/htmlify');
const minify = require('./gulp/minify');
const imgmin = require('./gulp/imgmin');
const less = require('./gulp/less');
const server = require('gulp-server');

//构建生成文件
gulp.task('build', ['htmlify', 'ngmin', 'less', 'imagemin']);
//watch服务
gulp.task('watch', ['watch:htmlify', 'watch:ngmin', 'watch:less', 'watch:imagemin']);
