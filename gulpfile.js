process.env.NODE_ENV = 'dev';
env = process.env.NODE_ENV || 'dev';
if (env === 'dev') {
  outputDir = 'dist/development/';
} else {
  outputDir = 'dist/production/';
}

const { notify } = require('browser-sync');
const { src, dest, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const gulpif = require('gulp-if');
const htmlMin = require('gulp-htmlmin');
const del = require('del');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const notifyjs = require('gulp-notify');
const image = require('gulp-image');
const svgSprite = require('gulp-svg-sprite');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');

const clean = () => {
  return del(['dist']);
};
const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: outputDir,
    },
    notify: false,
  });
};

const htmlMinify = () => {
  return src('src/**/*.html')
    .pipe(
      gulpif(
        env !== 'dev',
        htmlMin({
          collapseWhitespace: true,
        })
      )
    )
    .pipe(dest(outputDir))
    .pipe(browserSync.stream());
};

const stylesMain = () => {
  return src(['src/scss/general/**.scss', 'src/scss/main/**.scss'])
    .pipe(concat('main.scss'))
    .pipe(sass())
    .pipe(
      gulpif(
        env !== 'dev',
        autoprefixer({
          cascade: false,
        })
      )
    )
    .pipe(
      gulpif(
        env !== 'dev',
        cleanCSS({
          level: 2,
        })
      )
    )
    .pipe(dest(outputDir))
    .pipe(browserSync.stream());
};
const stylesCooperation = () => {
  return src(['src/scss/general/**.scss', 'src/scss/cooperation/**.scss'])
    .pipe(concat('cooperation.scss'))
    .pipe(sass())
    .pipe(
      gulpif(
        env !== 'dev',
        autoprefixer({
          cascade: false,
        })
      )
    )
    .pipe(
      gulpif(
        env !== 'dev',
        cleanCSS({
          level: 2,
        })
      )
    )
    .pipe(dest(outputDir))
    .pipe(browserSync.stream());
};
const stylesContact = () => {
  return src(['src/scss/general/**.scss', 'src/scss/contact/**.scss'])
    .pipe(concat('contact.scss'))
    .pipe(sass())
    .pipe(
      gulpif(
        env !== 'dev',
        autoprefixer({
          cascade: false,
        })
      )
    )
    .pipe(
      gulpif(
        env !== 'dev',
        cleanCSS({
          level: 2,
        })
      )
    )
    .pipe(dest(outputDir))
    .pipe(browserSync.stream());
};
const stylesCatalog = () => {
  return src(['src/scss/general/**.scss', 'src/scss/catalog/**.scss'])
    .pipe(concat('catalog.scss'))
    .pipe(sass())
    .pipe(
      gulpif(
        env !== 'dev',
        autoprefixer({
          cascade: false,
        })
      )
    )
    .pipe(
      gulpif(
        env !== 'dev',
        cleanCSS({
          level: 2,
        })
      )
    )
    .pipe(dest(outputDir))
    .pipe(browserSync.stream());
};
const stylesProduct = () => {
  return src(['src/scss/general/**.scss', 'src/scss/product/**.scss'])
    .pipe(concat('product.scss'))
    .pipe(sass())
    .pipe(
      gulpif(
        env !== 'dev',
        autoprefixer({
          cascade: false,
        })
      )
    )
    .pipe(
      gulpif(
        env !== 'dev',
        cleanCSS({
          level: 2,
        })
      )
    )
    .pipe(dest(outputDir))
    .pipe(browserSync.stream());
};

const scripts = () => {
  return src('src/js/*.js')
    .pipe(
      gulpif(
        env !== 'dev',
        babel({
          presets: ['@babel/env'],
        })
      )
    )

    .pipe(
      gulpif(
        env !== 'dev',
        uglify({
          toplevel: true,
        }).on('error', notifyjs.onError())
      )
    )
    .pipe(dest(outputDir + 'js/'))
    .pipe(browserSync.stream());
};
const copyingPluginsJs = () => {
  return src('src/js/plugins/**/*.js').pipe(dest(outputDir + 'js/plugins/'));
};
const copyingPluginsCss = () => {
  return src('src/css/**/*.css').pipe(dest(outputDir + 'css/plugins/'));
};
const images = () => {
  return src([
    'src/img/**/*.jpg',
    'src/img/**/*.jpeg',
    'src/img/**/*.png',
    'src/img/**/*.svg',
  ])
    .pipe(gulpif(env !== 'dev', image()))
    .pipe(dest(outputDir + 'img/'));
};

const svgSprites = () => {
  return src('src/svg/**/*.svg')
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: '../sprite.svg',
          },
        },
      })
    )
    .pipe(dest(outputDir + 'svg/'));
};

const fonts = () => {
  src('src/fonts/**/*.ttf')
    .pipe(ttf2woff())
    .pipe(dest(outputDir + 'fonts/'));
  return src('src/fonts/**/*.ttf')
    .pipe(ttf2woff2())
    .pipe(dest(outputDir + 'fonts/'));
};
watch('src/**/*.html', htmlMinify);
watch(['src/scss/general/**.scss', 'src/scss/main/**.scss'], stylesMain);
watch(['src/scss/general/**.scss', 'src/scss/catalog/**.scss'], stylesCatalog);
watch(['src/scss/general/**.scss', 'src/scss/product/**.scss'], stylesProduct);
watch(['src/scss/general/**.scss', 'src/scss/contact/**.scss'], stylesContact);
watch(
  ['src/scss/general/**.scss', 'src/scss/cooperation/**.scss'],
  stylesCooperation
);
watch('src/js/**/*.js', scripts);
exports.default = series(clean, htmlMinify, stylesMain, stylesCatalog, stylesCooperation, stylesProduct, stylesContact, scripts, copyingPluginsJs, copyingPluginsCss, images, svgSprites, fonts, watchFiles);
