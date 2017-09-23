var gulp = require('gulp');
const shell = require('gulp-shell')

gulp.task('setup', shell.task([
  'docker build . -t jekyllbuilder:1.0'
]))

// gulp.task('run', shell.task([
//   'docker build . --no-cache -t ghost-dev:1.0'
// ]))