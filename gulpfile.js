/**
 * Created by sergiy on 14/12/14.
 */
var gulp = require("gulp");
var jshint = require("gulp-jshint");

gulp.task("default", function () {
    return gulp.src("./public/js/**/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});