// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2014-06-09 using
// generator-karma 0.8.2

module.exports = function (config) {
    config.set({
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // base path, that will be used to resolve files and exclude
        basePath: '.',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/bower_components/angular-ui-bootstrap-bower/ui-bootstrap-tpls.js',
            'app/js/**/*.js',
            'app/js/**/*-test.js'
        ],

        // list of files / patterns to exclude
        exclude: [],

        // web server port
        port: 7777,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: [
            'PhantomJS'
        ],

        // Which plugins to enable
        plugins: [
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-coverage'
        ],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // coverage reporter generates the coverage
        reporters: ['progress', 'coverage'],

        preprocessors: {
            'app/js/**/!(*test).js': ['coverage']
        },

        // optionally, configure the reporter
        coverageReporter: {
            type : 'html',
            dir : 'test/coverage'
        }
    });
};
