var gulp = require('gulp');
var webpack = require('webpack');

// passing callback into maintask function signature, 
// is to makesure that gulp is aware when webpack completes.
// and within webpack callback function
// after we logout this success text into the console
// let's simply run the callback function
// so gulp can be certain that webpack completed

gulp.task('scripts', ['modernizr'], function(callback) {
    webpack(require('../../webpack.config.js'), function(err, stats) {
        if (err) {
            console.log(err.toString());
        }

        console.log(stats.toString());
        callback();
    });
});