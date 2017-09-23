var gulp = require('gulp');
const shell = require('gulp-shell')

gulp.task('setup', shell.task([
  'docker build . -t jekyllbuilder:1.0'
]))

gulp.task('build', shell.task([
  'docker run --rm -it --mount type=bind,source="%cd%/src",target=/app --mount type=bind,source="%cd%/scripts",target=/scripts --entrypoint /bin/bash jekyllbuilder:1.0'
]))

gulp.task('manual', shell.task([
  'docker run --rm -it --mount type=bind,source="%cd%/src",target=/app --entrypoint /bin/bash jekyllbuilder:1.0'
]))

gulp.task('deploy', shell.task([
  'now src/sharedchristianity.com/_site/.'
]))