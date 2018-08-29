var gulp = require('gulp');
var sass = require('gulp-sass');
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var pkg = require('./package.json');
var browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', function() {

  // Bootstrap
  gulp.src([
    './node_modules/bootstrap/dist/**/*',
    '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
    '!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
    ])
  .pipe(gulp.dest('./vendor/bootstrap'))

  // Font Awesome
  gulp.src([
    './node_modules/font-awesome/**/*',
    '!./node_modules/font-awesome/{less,less/*}',
    '!./node_modules/font-awesome/{scss,scss/*}',
    '!./node_modules/font-awesome/.*',
    '!./node_modules/font-awesome/*.{txt,json,md}'
    ])
  .pipe(gulp.dest('./vendor/font-awesome'))

  // jQuery
  gulp.src([
    './node_modules/jquery/dist/*',
    '!./node_modules/jquery/dist/core.js'
    ])
  .pipe(gulp.dest('./vendor/jquery'))

  // jQuery Easing
  gulp.src([
    './node_modules/jquery.easing/*.js'
    ])
  .pipe(gulp.dest('./vendor/jquery-easing'))

    // ChartJS
  gulp.src([
    './node_modules/chart.js/dist/*.js'
    ])
  .pipe(gulp.dest('./vendor/chartJS/'))

  // Simple Line Icons
  gulp.src([
    './node_modules/simple-line-icons/fonts/**',
    ])
  .pipe(gulp.dest('./vendor/simple-line-icons/fonts'))

  gulp.src([
    './node_modules/simple-line-icons/css/**',
    ])
  .pipe(gulp.dest('./vendor/simple-line-icons/css'))

  // Data aos
  gulp.src([
    './node_modules/aos/dist/**',
    ])
  .pipe(gulp.dest('./vendor/aos/'))

   // SLICK
  gulp.src([
    './node_modules/slick-carousel/slick/**',
    ])
  .pipe(gulp.dest('./vendor/slick-carousel/'))

 

  // jquery-parallax
  gulp.src([
    './node_modules/jquery-parallax.js/*.js',
    ])
  .pipe(gulp.dest('./vendor/jquery-parallax/'))

  // SweetAlert2
  gulp.src([
    './node_modules/sweetalert2/**',
    ])
  .pipe(gulp.dest('./vendor/sweetalert2/'))

  // modaal
  gulp.src([
    './node_modules/modaal/**',
    ])
  .pipe(gulp.dest('./vendor/modaal/'))


  // Animate.css
  gulp.src([
    './node_modules/animate.css/*.css',
    ])
  .pipe(gulp.dest('./vendor/animate/'))


});

// Compile SCSS
gulp.task('css:compile', function() {
  return gulp.src('./scss/**/*.scss')
  .pipe(sass.sync({
    outputStyle: 'expanded'
  }).on('error', sass.logError))
  .pipe(gulp.dest('./css'))
});

// Minify CSS
gulp.task('css:minify', ['css:compile'], function() {
  return gulp.src([
    './css/*.css',
    '!./css/*.min.css'
    ])
  .pipe(cleanCSS())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream());
});

// CSS
gulp.task('css', ['css:compile', 'css:minify']);

// IMAGEMIN
gulp.task('imagemin', function(){
    gulp.src(['img/*.jpg', 'img/*.svg' ,'img/Galeria-Imagem/*.jpg'])
    .pipe(imagemin({
        progressive: true,
        optimizationLevel: 5,
        svgoPlugins: [{removeViewBox: true}]
    }))
    .pipe(gulp.dest('img/'))
});

// Minify JavaScript
gulp.task('js:minify', function() {
  return gulp.src([
  	'!./js/*.min.js',
    './js/*.js'
    ])
  .pipe(uglify())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('./js'))
  .pipe(browserSync.stream());
});

gulp.task('concatCSS', function() {
  return gulp.src(
    [
    'vendor/device-mockups/device-mockups.min.css',
    'vendor/aos/aos.css',
    'vendor/sweetalert2/sweetalert2.min.css',
    'vendor/animate/animate.min.css',
    'vendor/modaal/dist/css/modaal.min.css',
    'vendor/slick-carousel/slick.css',
    'vendor/slick-carousel/slick-theme.css'
   ])
    .pipe(concat('vendorConcatenado.css'))
    .pipe(gulp.dest('./css'));
});

// JS
gulp.task('js', ['js:minify']);

// Default task
gulp.task('default', ['css','concatCSS','imagemin', 'vendor']);

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// Dev task
gulp.task('dev', ['css','browserSync'], function() {
  gulp.watch('./scss/*.scss', ['css']);
  gulp.watch('./js/*.js', ['js']);
  gulp.watch('./*.html', browserSync.reload);
});
