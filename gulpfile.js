var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
gulp.task('start-server',function(){
	 connect.server({
	 	port:8080,
	 	livreload:true
	 });
});

gulp.task('concat-js',function(){
	    return gulp.src(['./Source/js/index-app.js', './Source/js/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});

gulp.task('watch',function(){
	gulp.watch('./Source/js/*.js',['concat-js']);
});

gulp.task('default',['start-server','watch']);
