const mix  = require('laravel-mix');
const fs   = require('fs');

const getFiles = function (dir) {
   // get all 'files' in this directory
   // filter directories
   return fs.readdirSync(dir).filter(file => {
      if (file != 'bootstrap.js') {
        return fs.statSync(`${dir}/${file}`).isFile();
      }
   });
};

const resourcesJsPath  = 'resources/js/';
const resourcesCssPath = 'resources/sass/';

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
getFiles(resourcesJsPath).forEach(function (filepath) {
   mix.js(resourcesJsPath + filepath, 'public/js');
});
getFiles(resourcesCssPath).forEach(function (filepath) {
   mix.sass(resourcesCssPath + filepath, 'public/css');
});
mix.options({
   processCssUrls: false
}).version();
