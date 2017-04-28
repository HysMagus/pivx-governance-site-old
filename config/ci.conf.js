const browserstack = require('browserstack-local');
const {config} = require('./base.conf.js');

config.capabilities = [{
    maxInstances: 5,
    browserName: 'firefox',
    'browserstack.local': true
}];

config.baseUrl='http://localhost:7777';

config.onPrepare = function () {
    return startBrowserStackTunnel()
};

config.onComplete = function () {
    stopBrowserStackTunnel()
};

function startBrowserStackTunnel() {
    console.log("Connecting local");
    return new Promise(function (resolve, reject) {
        config.bs_local = new browserstack.Local();
        config.bs_local.start({'key': config.key}, function (error) {
            if (error) return reject(error);
            console.log('Connected. Now testing...');

            resolve();
        });
    });
}

function stopBrowserStackTunnel() {
    config.bs_local.stop(function () {
    });
}

exports.config = config;