const gulp = require('gulp');
const {spawn} = require('child-process-promise');
const webdriver = require('gulp-webdriver');
const runSequence = require('run-sequence');

gulp.task('server:start', function (callback) {
    dockerCompose(['up', '-d'], callback);
});

gulp.task('pipeline:local', function(callback) {
    runSequence('server:start', 'test:e2e:local', 'server:stop', callback)
});

gulp.task('test:e2e:local', function () {
    return gulp.src('webdriver.io.local.conf.js').pipe(webdriver());
});

gulp.task('server:stop', function (callback) {
    dockerCompose(['down'], callback)
});

function dockerCompose(args, callback){
    const promise = spawn('docker-compose', args);
    promise
        .then(() => callback())
        .catch((error) => {
            console.log(error);
            process.exit(1);
        })
}