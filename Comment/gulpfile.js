/**
 * Created by a_wav on 2017/1/12.
 */
var fs      = require('fs');
var gulp    = require('gulp');
var replace = require('gulp-replace');

var reg_COMMENT = /<!--replace\:css\s([\w.]+)-->/ig;

gulp.task('default',function () {
    gulp.src('./Comment.html')
        .pipe(replace(reg_COMMENT,function (match, p1) {
            var text = fs.readFileSync(p1,'utf8');

            return '<style>' + text + '</style>';
    })).pipe(gulp.dest('./dist'));
});