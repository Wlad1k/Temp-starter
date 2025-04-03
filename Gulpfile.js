const { src, dest, watch, series, parallel } = require('gulp');
const gulpSass = require('gulp-dart-sass'); // Обновленный импорт
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const del = require('del');
const imagemin = require('gulp-imagemin');
const rename = require('gulp-rename');

// Пути к файлам
const paths = {
    scss: { src: 'src/scss/**/*.scss', dest: 'dist/css' },
    html: { src: 'src/*.html', dest: 'dist' },
    js: { src: 'src/js/**/*.js', dest: 'dist/js' },
    images: { src: 'src/images/**/*', dest: 'dist/images' }
};

// Очистка директории dist
function clean() {
    return del(['dist']);
}

// Компиляция SCSS в CSS
function styles() {
    const isProd = process.argv.includes('--prod');

    const plugins = [autoprefixer()];
    if (isProd) plugins.push(cssnano());

    let stream = src(paths.scss.src);
    if (!isProd) stream = stream.pipe(sourcemaps.init());

    stream = stream
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(postcss(plugins));

    if (isProd) {
        stream = stream.pipe(rename({ suffix: '.min' }));
    } else {
        stream = stream.pipe(sourcemaps.write('.'));
    }

    return stream
        .pipe(dest(paths.scss.dest))
        .pipe(browserSync.stream());
}


// Копирование HTML файлов
function html() {
    return src(paths.html.src)
        .pipe(dest(paths.html.dest))
        .pipe(browserSync.stream());
}

// Копирование JS файлов
function scripts() {
    return src(paths.js.src)
        .pipe(dest(paths.js.dest))
        .pipe(browserSync.stream());
}

// Оптимизация изображений
function images() {
    return src(paths.images.src)
        .pipe(imagemin([
            imagemin.mozjpeg({ quality: 80, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: false },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(dest(paths.images.dest));
}

// Локальный сервер и отслеживание изменений
function serve() {
    browserSync.init({
        server: {
            baseDir: './dist'
        },
        notify: false
    });

    watch(paths.scss.src, styles);
    watch(paths.html.src, html);
    watch(paths.js.src, scripts);
    watch(paths.images.src, images);
}

// Определение задач Gulp
const dev = series(clean, parallel(styles, html, scripts, images), serve);
const build = series(clean, parallel(styles, html, scripts, images));

exports.clean = clean;
exports.styles = styles;
exports.html = html;
exports.scripts = scripts;
exports.images = images;
exports.build = build;
exports.default = dev;