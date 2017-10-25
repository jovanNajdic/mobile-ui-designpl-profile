const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.sass')
          .pipe(sass().on('error', sass.logError))
          .pipe(gulp.dest('./css'))
          .pipe(browserSync.stream());
});

gulp.task('watch', ['sass'], function() {
  browserSync.init({
    server: '.'
  });

  gulp.watch('./sass/**/*.sass', ['sass'], browserSync.reload);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js', browserSync.reload);
});

gulp.task('default', ['watch']);
