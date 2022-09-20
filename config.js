module.exports = {
  beautify: true,
  prefix: "//some-cdn",
  relative: true,
  basePath: false,
  scripts: {
      bundle: [
          "scripts/*.js",
          "!**/main.js",
      ],
      main: "scripts/main.js"
  },
  styles: {
      bundle: [
          "css/libs.css",
          "css/dev.css"
      ],
      test: "css/inline.css"
  },
  sections: {
      views: "views/**/*.html",
      templates: "templates/**/*.html",
      layout: {
          header: "layout/header.html",
          footer: "layout/footer.html"
      }
  },
  data: {
      // Data to pass to templates
      version: "0.1.0",
      title: "test",
  }
};