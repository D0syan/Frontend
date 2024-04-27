const { src, dest, series, parallel, watch } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const del = require('del');
const browserSync = require('browser-sync').create();
const svgSprite = require('gulp-svg-sprite');
const sourcemaps = require('gulp-sourcemaps');
const htmlmin = require('gulp-htmlmin');
const notify = require('gulp-notify');
const concat = require('gulp-concat');

const clean = () => {
    return del(['app/*']);
};

const devStyles = () => {
    return src('./src/css/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            cascade: false,
        }))
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./app/css/'))
        .pipe(browserSync.stream());
};

const devScripts = () => {
    return src(['./src/js/components/**.js', './src/js/main.js'])
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./app/js'))
        .pipe(browserSync.stream());
};

const devHtml = () => {
    return src('src/**/*.html')
        .pipe(dest('app'))
        .pipe(browserSync.stream());
};

const buildStyles = () => {
    return src('./src/css/**/*.css')
        .pipe(autoprefixer({
            cascade: false,
        }))
        .pipe(cleanCSS({ level: 2 }))
        .pipe(concat('main.css'))
        .pipe(dest('./app/css/'));
};

const buildScripts = () => {
    return src(['./src/js/components/**.js', './src/js/main.js'])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('main.js'))
        .pipe(uglify().on("error", notify.onError()))
        .pipe(dest('./app/js'));
};

const buildHtml = () => {
    return src('src/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(dest('app'));
};

const images = () => {
    return src([
        './src/img/**.jpg',
        './src/img/**.png',
        './src/img/**.jpeg',
        './src/img/*.svg',
        './src/img/**/*.jpg',
        './src/img/**/*.png',
        './src/img/**/*.jpeg'
    ])
    .pipe(dest('./app/img'));
};

const svgSprites = () => {
    return src('./src/img/svg/**.svg')
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: "../sprite.svg" //sprite file name
                }
            },
        }))
        .pipe(dest('./app/img'));
};

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: "./app"
        },
    });

    watch('./src/css/**/*.css', devStyles);
    watch('./src/js/**/*.js', devScripts);
    watch('./src/**/*.html', devHtml);
    watch([
        './src/img/**.jpg',
        './src/img/**.png',
        './src/img/**.jpeg',
        './src/img/*.svg',
        './src/img/**/*.jpg',
        './src/img/**/*.png',
        './src/img/**/*.jpeg'
    ], images);
    watch('./src/img/svg/**.svg', svgSprites);
};

exports.dev = series(
    clean,
    parallel(devStyles, devScripts, devHtml, images, svgSprites),
    watchFiles
);

exports.build = series(
    clean,
    parallel(buildStyles, buildScripts, buildHtml, images, svgSprites)
);

exports.default = exports.dev; // По умолчанию запускается dev версия
