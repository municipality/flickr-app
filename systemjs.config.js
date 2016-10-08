System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  paths: {},

  packages: {
    "app": {
      "main": "main.js",
      "defaultExtension": "js"
    },
    "rxjs": {
      "defaultExtension": "js"
    },
    "angular2-in-memory-web-api": {
      "main": "index.js",
      "defaultExtension": "js"
    },
    "@angular/common": {
      "main": "bundles/common.umd.js",
      "defaultExtension": "js"
    },
    "@angular/compiler": {
      "main": "bundles/compiler.umd.js",
      "defaultExtension": "js"
    },
    "@angular/core": {
      "main": "bundles/core.umd.js",
      "defaultExtension": "js"
    },
    "@angular/forms": {
      "main": "bundles/forms.umd.js",
      "defaultExtension": "js"
    },
    "@angular/http": {
      "main": "bundles/http.umd.js",
      "defaultExtension": "js"
    },
    "@angular/platform-browser": {
      "main": "bundles/platform-browser.umd.js",
      "defaultExtension": "js"
    },
    "@angular/platform-browser-dynamic": {
      "main": "bundles/platform-browser-dynamic.umd.js",
      "defaultExtension": "js"
    },
    "@angular/router": {
      "main": "bundles/router.umd.js",
      "defaultExtension": "js"
    },
    "@angular/router-deprecated": {
      "main": "bundles/router-deprecated.umd.js",
      "defaultExtension": "js"
    },
    "@angular/upgrade": {
      "main": "bundles/upgrade.umd.js",
      "defaultExtension": "js"
    }
  },

  map: {
    "@angular": "node_modules/@angular",
    "angular2-in-memory-web-api": "node_modules/angular2-in-memory-web-api",
    "app": "dist/app",
    "rxjs": "node_modules/rxjs"
  }
});
