var gulp = require('gulp');
const shell = require('gulp-shell')

//
// Creates and prepares the docker image on which this will run
//
gulp.task('setup', shell.task([
  'docker build . -t jekyllbuilder:1.0'
]))

//
// Builds the /app/sharedchristinity.com site
//
gulp.task('build', shell.task([
  'docker run --rm -it --mount type=bind,source="%cd%/src",target=/app --mount type=bind,source="%cd%/scripts",target=/scripts --entrypoint /scripts/build.sh jekyllbuilder:1.0'
]))

//
//watchablebuild
//
gulp.task('buildwatch', shell.task([
  'docker run --rm -it --mount type=bind,source="%cd%/src",target=/app --mount type=bind,source="%cd%/scripts",target=/scripts --entrypoint /scripts/build-watch.sh jekyllbuilder:1.0'
]))

//
// Launches a new instance of the container connected to the terminal.
//
gulp.task('manual', shell.task([
  'docker run --rm -it --mount type=bind,source="%cd%/src",target=/app --mount type=bind,source="%cd%/scripts",target=/scripts --entrypoint /bin/bash jekyllbuilder:1.0'
]))


//
// Launches a new instance of the container connected to the terminal.
//
gulp.task('livewatch', shell.task([
  'node ..\\..\\..\\node_modules\\live-server\\live-server.js'
], {cwd: "./src/sharedchristianity.com/_site"}))


//
// Deploys to zeit.co
//
gulp.task('deploy', shell.task([
  'now src/sharedchristianity.com/.'
]))

gulp.task('watch', ['buildwatch', 'livewatch']);