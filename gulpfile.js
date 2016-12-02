/**
 * gulp任务文件
 */
const gulp = require('gulp');
const sequence = require('gulp-sequence');
const htmlify = require('gulp-angular-htmlify');
const minify = require('./gulp/minify');
const less = require('./gulp/less');

//构建生成文件
gulp.task('build', sequence('htmlify', 'ngmin', 'less'));
//watch服务
gulp.task();
