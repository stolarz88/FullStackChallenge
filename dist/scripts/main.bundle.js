/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist/scripts";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/JS/AppConfig.jsx":
/*!******************************!*\
  !*** ./src/JS/AppConfig.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"./node_modules/node-libs-browser/node_modules/path-browserify/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\nvar AppConfig = function AppConfig() {\n  _classCallCheck(this, AppConfig);\n\n  // Add Env variable to change from Localhost/ Dev/ QA\n  // Local\n  this.appBasePath = document.querySelector('#appUrl').value;\n  this.barstoolDevAPI = {\n    ApiBasePath: document.querySelector('#apiUrl').value\n  };\n  console.log('test');\n} // getAppBasePath = () => this.appBasePath;\n;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new AppConfig());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvSlMvQXBwQ29uZmlnLmpzeD84MjY2Il0sIm5hbWVzIjpbIkFwcENvbmZpZyIsImFwcEJhc2VQYXRoIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJiYXJzdG9vbERldkFQSSIsIkFwaUJhc2VQYXRoIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLFMsR0FDTCxxQkFBYztBQUFBOztBQUNiO0FBQ0E7QUFDTSxPQUFLQyxXQUFMLEdBQW1CQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0NDLEtBQXJEO0FBRU4sT0FBS0MsY0FBTCxHQUFzQjtBQUNyQkMsZUFBVyxFQUFFSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0NDO0FBRDFCLEdBQXRCO0FBR01HLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFFTixDLENBQ0Q7OztBQUdjLG1FQUFJUixTQUFKLEVBQWYiLCJmaWxlIjoiLi9zcmMvSlMvQXBwQ29uZmlnLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuY2xhc3MgQXBwQ29uZmlnIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0Ly8gQWRkIEVudiB2YXJpYWJsZSB0byBjaGFuZ2UgZnJvbSBMb2NhbGhvc3QvIERldi8gUUFcblx0XHQvLyBMb2NhbFxuICAgICAgICB0aGlzLmFwcEJhc2VQYXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcFVybCcpLnZhbHVlO1xuICAgICAgICBcblx0XHR0aGlzLmJhcnN0b29sRGV2QVBJID0ge1xuXHRcdFx0QXBpQmFzZVBhdGg6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcGlVcmwnKS52YWx1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKVxuXG5cdH1cblx0Ly8gZ2V0QXBwQmFzZVBhdGggPSAoKSA9PiB0aGlzLmFwcEJhc2VQYXRoO1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQXBwQ29uZmlnKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/JS/AppConfig.jsx\n");

/***/ }),

/***/ "./src/JS/ClientApp.jsx":
/*!******************************!*\
  !*** ./src/JS/ClientApp.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _AppConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppConfig */ \"./src/JS/AppConfig.jsx\");\n\n\n // import '../SASS/style.scss';\n// import AppWrapper from './Components/DomHelpers/AppWrapper';\n// import App from './App';\n\n\nvar appBasePath = _AppConfig__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getAppBasePath();\n\nvar renderApp = function renderApp() {\n  Object(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"BrowserRouter\"], {\n    basename: appBasePath\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"test\"))), document.getElementById('app__root'));\n};\n\nrenderApp(); // It works well\n\nif (false) {}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvSlMvQ2xpZW50QXBwLmpzeD80YzA4Il0sIm5hbWVzIjpbImFwcEJhc2VQYXRoIiwiQXBwQ29uZmlnIiwiZ2V0QXBwQmFzZVBhdGgiLCJyZW5kZXJBcHAiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibW9kdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLGtEQUFTLENBQUNDLGNBQVYsRUFBcEI7O0FBRUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN2QkMsMERBQU0sQ0FDTCwyREFBQyxVQUFELFFBQ0MsMkRBQUMsOERBQUQ7QUFBZSxZQUFRLEVBQUVKO0FBQXpCLEtBRWEsK0VBRmIsQ0FERCxDQURLLEVBT0xLLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQVBLLENBQU47QUFTQSxDQVZEOztBQVlBSCxTQUFTLEcsQ0FFVDs7QUFDQSxJQUFJSSxLQUFKLEVBQWdCIiwiZmlsZSI6Ii4vc3JjL0pTL0NsaWVudEFwcC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbi8vIGltcG9ydCAnLi4vU0FTUy9zdHlsZS5zY3NzJztcbi8vIGltcG9ydCBBcHBXcmFwcGVyIGZyb20gJy4vQ29tcG9uZW50cy9Eb21IZWxwZXJzL0FwcFdyYXBwZXInO1xuLy8gaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XG5pbXBvcnQgQXBwQ29uZmlnIGZyb20gJy4vQXBwQ29uZmlnJztcblxuY29uc3QgYXBwQmFzZVBhdGggPSBBcHBDb25maWcuZ2V0QXBwQmFzZVBhdGgoKTtcblxuY29uc3QgcmVuZGVyQXBwID0gKCkgPT4ge1xuXHRyZW5kZXIoXG5cdFx0PEFwcFdyYXBwZXI+XG5cdFx0XHQ8QnJvd3NlclJvdXRlciBiYXNlbmFtZT17YXBwQmFzZVBhdGh9PlxuICAgICAgICAgICAgICAgIHsvKiA8QXBwIC8+ICovfVxuICAgICAgICAgICAgICAgIDxkaXY+dGVzdDwvZGl2PlxuXHRcdFx0PC9Ccm93c2VyUm91dGVyPlxuXHRcdDwvQXBwV3JhcHBlcj4sXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcF9fcm9vdCcpXG5cdCk7XG59O1xuXG5yZW5kZXJBcHAoKTtcblxuLy8gSXQgd29ya3Mgd2VsbFxuaWYgKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/JS/ClientApp.jsx\n");

/***/ }),

/***/ 0:
/*!****************************************************************!*\
  !*** multi ./src/JS/ClientApp.jsx webpack/hot/only-dev-server ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/JS/ClientApp.jsx */"./src/JS/ClientApp.jsx");
module.exports = __webpack_require__(/*! webpack/hot/only-dev-server */"./node_modules/webpack/hot/only-dev-server.js");


/***/ })

/******/ });