var gulp = require('gulp');
var webserver = require('gulp-webserver'); // 웹서버처럼 동작하게 하는 플러그인
var concat = require('gulp-concat'); // js 파일 병합을 위한 플러그인
var uglify = require('gulp-uglify'); // js 파일 압축을 위한 플러그인
var minifyhtml = require('gulp-minify-html'); // html 파일 minify를 위한 플러그인
var sass = require('gulp-sass'); // sass 파일을 컴파일하기 위한 플러그인
var livereload = require('gulp-livereload'); // 웹 브라우저를 리로드하기 위한 플러그인

gulp.task('combine-js', ['lint-js'], function () {
	return gulp.src('/public/js/**/*.js')
	.pipe(concat('all.js'))
	.pipe(gulp.dest('public/dist/js'));
});

gulp.task('default', ['combine-js']);
