var gulp = require('gulp')
var pug = require('gulp-pug')
var watch = require('gulp-watch')
var sass = require('gulp-sass')
var connect = require('gulp-connect')


// gulp.task('pug', function () {
//     return gulp.src('layout/index.pug')
//         .pipe(pug({
//             doctype: 'html',
//             pretty: true,
//             data: {
//                 config: {
//                     title: 'پیش نمایش قالب',
//                     language: 'fa',
//                     description: 'این یک تم است که توسط من ایچاد شده است'
//                 }
//             }
//     }))
//         .pipe(gulp.dest('source/'))
        
// })

gulp.task('assets', function () {
    return gulp.src('assets/**/**')
        .pipe(gulp.dest('source/'))
})

// gulp.task('webserver', function () {
//     connect.server ({
//         root: ['dist/'],
//         livereload: true,
//         port: 8000,
//         host: '127.0.0.1'
//     })
// })

gulp.task('sass', function () {
	return gulp.src('sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('source/css/'))
})


gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['sass'])
    gulp.watch('pug/**/*.pug', ['pug'])
})

gulp.task('default', ['sass', 'assets'])
gulp.task('dev', ['default', 'watch'])
