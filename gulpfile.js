var gulp = require('gulp'),
    unitTestFiles = './tests/unit/*.spec.js',
    e2eTestFiles = './tests/e2e/*.spec.js',
    jsFile = './js/**/*.js',
    nwPath = __dirname + '/node_modules/.bin/nw',
    jshint = require('gulp-jshint'),
    karma = require('karma').server,
    shell = require('gulp-shell'),
    protractor = require("gulp-protractor").protractor;

gulp.task('test', function (done) {
  process.env.NODEWEBKIT_BIN = nwPath;

  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true,
    autoWatch: false
  }, done);

  gulp.on('error', function (e) {
    console.log(e.message);
  });
});

gulp.task('lint', function (done) {
  return gulp.src(jsFile)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('e2e', function (done) {
  gulp.src([e2eTestFiles])
    .pipe(protractor({
        configFile: "./protractor.conf.js",
        args: []
    }))
    .on('error', function (e) {
        throw e
    });
});

gulp.task('run', shell.task(['echo starting nw...', nwPath]));

gulp.task('dev-watch', function () {
  gulp.watch([unitTestFiles, jsFile], ['lint', 'test']);
});

gulp.task('default', ['run', 'dev-watch']);
