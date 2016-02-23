const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', () => {
	gulp.src('./frontend/styles/main.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./public/stylesheets/'));
});

function handleErrors() {
	notify.onError({
		title: 'Compile Error',
		message: '<%= error %>'
	}).apply(this, arguments);
	this.emit('end'); // Keep gulp from hanging on this task
}

// watch for future changes
gulp.task('watch', ['styles'], () => {
	gulp.watch('./frontend/styles/**/*', ['styles']); // gulp watch for stylus changes
});

gulp.task('assets', ['styles']);
gulp.task('default', ['watch']);
