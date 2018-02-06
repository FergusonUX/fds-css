var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var http = require('http');
var st = require('st');
var rename = require('gulp-rename');

gulp.task('compile-sass', function() {
  var pkg = require('./package.json')
    gulp.src('fds.sass')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) // Note: outputStyle in gulp-sass has four options: nested, expanded, compact, compressed
        .pipe(rename('fds.min.css'))
        .pipe(gulp.dest('css/'+pkg.version+'/'))
        .pipe(livereload());
    gulp.src('fds.sass')
        .pipe(sass().on('error', sass.logError)) // Note: outputStyle in gulp-sass has four options: nested, expanded, compact, compressed
        .pipe(rename('fds.css'))
        .pipe(gulp.dest('css/'+pkg.version+'/'))
        .pipe(livereload());
    gulp.src('fds.sass')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) // Note: outputStyle in gulp-sass has four options: nested, expanded, compact, compressed
        .pipe(rename('fds.min.css'))
        .pipe(gulp.dest('css/latest/'))
        .pipe(livereload());
    gulp.src('fds.sass')
        .pipe(sass().on('error', sass.logError)) // Note: outputStyle in gulp-sass has four options: nested, expanded, compact, compressed
        .pipe(rename('fds.css'))
        .pipe(gulp.dest('css/latest/'))
        .pipe(livereload());

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
