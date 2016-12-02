/**
 * gulp任务文件
 */
const gulp = require('gulp');
const sequence = require('gulp-sequence');
const htmlify = require('gulp-angular-htmlify');
const minify = require('./gulp/minify');

//构建生成文件
gulp.task('build', sequence('htmlify', 'ngmin'));
//watch服务
gulp.task();
