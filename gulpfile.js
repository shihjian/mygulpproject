var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');



gulp.task('copyHTML',function(){
    return gulp.src('./source/**/*.html')
    .pipe(gulp.dest('./public/'))
});

gulp.task('jade', function() {
    // var YOUR_LOCALS = {};
   
    gulp.src('./source/**/*.jade')
      .pipe(jade({
        // pretty: true
        // locals: YOUR_LOCALS
      }))
      .pipe(gulp.dest('./public/'))
  });

  gulp.task('sass', function () {
    return gulp.src('./source/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./public/css'));
  });

  gulp.task('watch', function () {
    gulp.watch('./source/scss/**/*.scss', ['sass']);
  });
