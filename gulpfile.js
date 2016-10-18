var gulp = require('gulp');
var uglify = require('gulp-uglify');
var debug = require('gulp-debug');
const del = require('del');
const typescript = ts = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

inlineNg2Template = require('gulp-inline-ng2-template');

//Process : clean -> compile -> copy:libs

// clean the contents of the distribution directory
gulp.task('clean:app', function () {
  return del('dist/app/**/*');
});


gulp.task('clean:libs', function () {
  return del('dist/lib/**/*');
});
/**
    UGLIFYING GENERATED JAVASCRIPT BREAKS SOME FUNCTIONALITY
    DO NOT UGLIFY
*/
// TypeScript compile
//Sourcemaps are used to de-reference uglified code in production code
gulp.task('compile', ['clean'], function () {
  return gulp.src(tscConfig.files)
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(gulp.dest('dist/app'));
    // .pipe(sourcemaps.init())          // <--- sourcemaps
    // .pipe(typescript(tscConfig.compilerOptions))
    // .pipe(sourcemaps.write('.'))      // <--- sourcemaps
    // .pipe(gulp.dest('dist/app'));
});

// copy dependencies
gulp.task('copy:libs', ['clean:libs'], function() {
  return gulp.src([
      "node_modules/core-js/client/shim.min.js",
      "node_modules/zone.js/dist/zone.js",
      "node_modules/reflect-metadata/Reflect.js",
      "node_modules/systemjs/dist/system.src.js"
    ])
    .pipe(gulp.dest('dist/lib'));
});

gulp.task('uglify', ["compile"], function() {
    return gulp.src("dist/app/**/*.js")
        .pipe(uglify())
        .pipe(gulp.dest('dist/app'));
});

gulp.task('uglify:only', function() {
    return gulp.src("dist/app/**/*.js")
        .pipe(uglify())
        .pipe(gulp.dest('dist/app'));
})

gulp.task('copy:assets', function() {
  return gulp.src(['app/**/*', 'index.html', 'public/app/*.css', '!app/**/*.ts'], { base : './' })
    .pipe(gulp.dest('dist'))
});

gulp.task('tsconfig-glob', function () {
  return tsconfig({
    configPath: '.',
    indent: 2
  });
});

gulp.task('clean', ['clean:app', 'clean:libs']);
gulp.task('build', ['compile']);
gulp.task('default', ['build']);

gulp.task('tscompile', function () {
  var tsResult = gulp.src('./app/**/*.ts')
                     .pipe(ts(tsProject));

  return tsResult.js.pipe(gulp.dest('./dist'));
});

gulp.task('app-bundle', function () {
  var tsProject = ts.createProject('tsconfig.json', {
    typescript: require('typescript'),
    outFile: 'app.js'
  });

  var tsResult = gulp.src('app/**/*.ts')
                   .pipe(ts(tsProject));

  return tsResult.js.pipe(concat('app.min.js'))
                .pipe(uglify())
                .pipe(gulp.dest('./dist'));
});

gulp.task('vendor-bundle', function() {
  gulp.src([
      "node_modules/core-js/client/shim.min.js",
      "node_modules/zone.js/dist/zone.js",
      "node_modules/reflect-metadata/Reflect.js",
      "node_modules/systemjs/dist/system.src.js"
  ])
  .pipe(concat('vendors.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./dist'));
});
/**
    UGLIFYING GENERATED JAVASCRIPT BREAKS SOME FUNCTIONALITY
    DO NOT UGLIFY
*/
gulp.task('minify-appjs', function(){
    return gulp.src("dist/app.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist"));
});


gulp.task('bundle', ["app-bundle", "vendor-bundle"]);
