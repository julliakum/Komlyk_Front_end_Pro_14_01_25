const { task, src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
const babel = require("gulp-babel");
const minify = require("gulp-minify");

task("js", () => {
  return src("src/*.js")
    .pipe(concat("main.js")) 
    .pipe(babel({
      presets: ["@babel/preset-env"]
    }))
    .pipe(minify({
      ext: {
        min: ".min.js"
      },
      noSource: true
    }))
    .pipe(dest("dist"));
});

task("scss", () => {
  return src("src/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("style.css"))
    .pipe(cleanCSS())
    .pipe(dest("dist"));
});

task("watch", () => {
  watch("src/*.js", series("js"));
  watch("src/*.scss", series("scss"));
});

task("default", series("js", "scss", "watch"));
