const gulp = require('gulp');
const {spawn} = require('child-process-promise');
const webdriver = require('gulp-webdriver');
const runSequence = require('run-sequence');
const util = require('gulp-util');

const environment = util.env.environment || 'local';

gulp.task('server:start', function (callback) {
    dockerCompose(['up', '-d'], callback);
});

gulp.task('pipeline', function(callback) {
    runSequence('server:start', 'test:e2e', 'server:stop', callback)
});

gulp.task('test:e2e', function () {
    return gulp.src(`config/${environment}.conf.js`).pipe(webdriver());
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