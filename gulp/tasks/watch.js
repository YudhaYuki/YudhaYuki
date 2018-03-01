var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch', function(){
    
        browserSync.init({
            server: {
                baseDir: "app"
            }
        });
    
        watch('./app/index.html', function(){
            browserSync.reload();
        });
    
        watch('./app/assets/styles/**/*.css', function() {
            gulp.start('cssInject')
        });

        watch('./app/assets/scripts/**/*.js', function() {
            gulp.start('scriptsRefresh');
        })

    });

// In this function, we want to take the content of our compiled CSS file
// And we want to hand that over to browser sync
// So it can inject those styles into the page on the fly
gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh',['scripts'], function() {
    browserSync.reload()
})