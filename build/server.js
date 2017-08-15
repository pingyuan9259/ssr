module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'starter',
        meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#3B8070' },
    env: {
        // baseUrl:
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLINT on save
         */
        // extend (config, ctx) {
        //   if (ctx.isClient) {
        //     config.module.rules.push({
        //       enforce: 'pre',
        //       test: /\.(js|vue)$/,
        //       loader: 'eslint-loader',
        //       exclude: /(node_modules)/
        //     })
        //   }
        // }
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _koa = __webpack_require__(1);

var _koa2 = _interopRequireDefault(_koa);

var _nuxt = __webpack_require__(2);

var _nuxt2 = _interopRequireDefault(_nuxt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3001;

// Start nuxt.js
async function start() {
    // Import and Set Nuxt.js options
    var config = __webpack_require__(0);
    config.dev = !(app.env === 'production');
    // Instanciate nuxt.js
    var nuxt = await new _nuxt2.default(config);
    // Build in development
    if (config.dev) {
        try {
            await nuxt.build();
        } catch (e) {
            console.error(e); // eslint-disable-line no-console
            process.exit(1);
        }
    }
    app.use(async function (ctx, next) {
        if (ctx.url === '/test') {
            console.log(' ---> test');
        }
        await next();
    });
    app.use(async function (ctx, next) {
        ctx.status = 200; // koa defaults to 404 when it sees that status is unset
        await nuxt.render(ctx.req, ctx.res);
    });

    app.listen(port, host);
    console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console
}

start();

/***/ })
/******/ ]);