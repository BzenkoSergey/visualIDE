var NwBuilder = require('nw-builder');
var nw = new NwBuilder({
    files: './dist/**/**', // use the glob format
    buildDir: './program/',
    platforms: ['win64'],
    version: '0.14.6',
    run: true
});

//Log stuff you want
nw.on('log',  console.log);


var webpack = require("webpack");
var config = require('./webpack.config.js');
var compiler = webpack(config);

var runned = false;
compiler.watch({ // watch options:
    aggregateTimeout: 300, // wait so long for more changes
    poll: true // use polling instead of native watchers
    // pass a number to set the polling interval
}, function(err, stats) {
    if(err) {
        return console.log(err);
    }
    var jsonStats = stats.toJson();


    console.log('// ERRORS');
    for(var i = 0; jsonStats.errors.length > i; i++) {
        console.log(jsonStats.errors[i]);
    }

    if(jsonStats.errors.length) {
        return;
    }

    if(runned) {
        return;
    }

    runned = true;
    // Build returns a promise
    nw.run().then(function () {
        console.log('all done!');
    }).catch(function (error) {
        console.error(error);
    });
    return console.log('build: done');
});