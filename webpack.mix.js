const mix = require("laravel-mix");

mix
  .js("Vue/js/app.js", "public/js")
  .postCss("Vue/css/main.css", "public/css", [
    require("tailwindcss"),
    require("autoprefixer")
  ])
  .webpackConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "Vue/src")
      }
    },
    output: {
      path: path.resolve(__dirname, "public"),
      chunkFilename: "bundle/[name].lincoln.js"
    }
  });
