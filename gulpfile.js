var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('rebuild', shell.task([
  'ember build',
  'touch tmp/restart.txt'
]));

//-- Watch our paths and run our tasks
gulp.task('watch', function() {
  gulp.watch('app/**/*', ['rebuild']);
  gulp.watch('tests/**/*', ['rebuild']);
});

gulp.task('default', ['rebuild', 'watch']);
