var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var http = require('http');
var st = require('st');

gulp.task('compile-sass', function() {
    gulp.src('fds.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'))
        .pipe(livereload());;
});

// gulp.task('watch2', function() {
    // livereload.listen({ start: true, port: 3000, basePath: 'tests', reloadPage: 'test.html' });
    // gulp.watch('./sass/**/*.sass', ['compile-sass']);
// });

gulp.task('watch', ['server'], function() {
  // livereload.listen({ basePath: '' });
  gulp.watch('./sass/**/*.sass', ['compile-sass']);
});

gulp.task('server', function(done) {
  http.createServer(
    st({ path: __dirname + '', index: 'test.html', cache: false })
  ).listen(8090, done);
});
