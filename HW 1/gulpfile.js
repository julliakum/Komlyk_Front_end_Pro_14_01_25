const { task, src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
const babel = require("gulp-babel");
const minify = require("gulp-minify");

// JS task -> concat + babel + minify
task("js", () => {
  return src("src/*.js")
    .pipe(concat("main.js"))          // объединяем
    .pipe(babel({
      presets: ["@babel/preset-env"]  // транспиляция в ES5
    }))
    .pipe(minify({
      ext: {
        min: ".min.js"                // имя файла после минификации -> main.min.js
      },
      noSource: true                  // не оставлять обычный main.js (если хочешь оставить - убери эту строку)
    }))
    .pipe(dest("dist"));
});

// SCSS task -> sass + concat + minify
task("scss", () => {
  return src("src/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("style.css"))
    .pipe(cleanCSS())
    .pipe(dest("dist"));
});

// Watch task -> следим за файлами
task("watch", () => {
  watch("src/*.js", series("js"));
  watch("src/*.scss", series("scss"));
});

// Default -> build + watch
task("default", series("js", "scss", "watch"));
