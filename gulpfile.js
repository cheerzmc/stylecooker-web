//Load core
var gulp = require('gulp');

//Load modules
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
//var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('lint', function(){
	return gulp.src('webapp/public/javascripts/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));	
});

gulp.task('scripts', function(){
	return gulp.src('webapp/public/javascripts/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist/js'))
		.pipe(rename('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function(){
	gulp.watch('webapp/public/javascripts/*.js', ['lint', 'scripts']);
});

gulp.task('default', ['lint','scripts','watch']);
