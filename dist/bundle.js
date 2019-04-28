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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_devLogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/devLogger */ \"./utils/devLogger.js\");\n/* harmony import */ var _router_noteRouter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router/noteRouter */ \"./router/noteRouter.js\");\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(morgan__WEBPACK_IMPORTED_MODULE_1___default()('dev'));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({ extended: false }));\n\napp.use('/api/v1', _router_noteRouter__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n\nconst PORT = process.env.PORT || 3000;\n\napp.use((req, res) => {\n  res.status(404).json({\n    status: 404,\n    error: 'Incorrect URL'\n  });\n});\n\napp.listen(PORT, () => {\n  Object(_utils_devLogger__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(`Note+ started on port ${PORT}`);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./middlewares/noteValidation.js":
/*!***************************************!*\
  !*** ./middlewares/noteValidation.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass NoteValidation {\n  static createNoteValidation(req, res, next) {\n    if (!req.body.title || !req.body.note || /^\\s*$/.test(req.body.title) || /^\\s*$/.test(req.body.note)) {\n      return res.status(400).json({\n        status: 400,\n        message: 'Please provide a title and note body'\n      });\n    }\n\n    next();\n  }\n\n  static deleteNote(req, res, next) {\n    if (!(/^[123456789]+$/.test(req.params.id))) {\n      return res.status(400).json({\n        status: 400,\n        message: 'Request parameter must be an integer'\n      });\n    }\n\n    next();\n  }\n\n  static editNoteValidation(req, res, next) {\n    if (!req.body.title || !req.body.note || /^\\s*$/.test(req.body.title) || /^\\s*$/.test(req.body.note)) {\n      return res.status(400).json({\n        status: 400,\n        message: 'Please provide a title and note body'\n      });\n    }\n\n    if (!(/^[123456789]+$/.test(req.params.id))) {\n      return res.status(400).json({\n        status: 400,\n        message: 'Request parameter must be an integer'\n      });\n    }\n\n    next();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NoteValidation);\n\n\n//# sourceURL=webpack:///./middlewares/noteValidation.js?");

/***/ }),

/***/ "./models/db_store/db.js":
/*!*******************************!*\
  !*** ./models/db_store/db.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nObject(dotenv__WEBPACK_IMPORTED_MODULE_0__[\"config\"])();\n\nconst db = new pg__WEBPACK_IMPORTED_MODULE_1__[\"Pool\"]();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (db);\n\n\n//# sourceURL=webpack:///./models/db_store/db.js?");

/***/ }),

/***/ "./models/noteQueries.js":
/*!*******************************!*\
  !*** ./models/noteQueries.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _db_store_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db_store/db */ \"./models/db_store/db.js\");\n/* harmony import */ var _utils_trim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/trim */ \"./utils/trim.js\");\n\n\n\nclass NoteController {\n  static createNote(req, res) {\n    const { title, note } = req.body;\n\n    const text = 'INSERT INTO note(title, note) VALUES($1, $2) RETURNING *';\n    const values = [Object(_utils_trim__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(title), Object(_utils_trim__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(note)];\n\n    _db_store_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(text, values)\n      .then(results => res.status(201).json({\n        status: 201,\n        data: results.rows[0]\n      }))\n      .catch(error => res.status(500).json({\n        status: 501,\n        error,\n      }));\n  }\n\n  static getNote(req, res) {\n    const values = 'SELECT * FROM note';\n\n    _db_store_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(values)\n      .then(results => res.status(200).json({\n        status: 200,\n        data: results.rows\n      }))\n      .catch(error => res.status(500).json({\n        status: 500,\n        error\n      }));\n  }\n\n  static deleteNote(req, res) {\n    const { id } = req.params;\n\n    const text = 'DELETE FROM note where id=$1 RETURNING *';\n    const values = [id];\n\n    _db_store_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(text, values)\n      .then(results => res.status(200).json({\n        status: 200,\n        message: `${results.rows[0].title} deleted`\n      }))\n      .catch(error => res.status(500).json({\n        status: 500,\n        error\n      }));\n  }\n\n  static editNote(req, res) {\n    const { id } = req.params;\n    const { title, note } = req.body;\n\n    const text = 'UPDATE note SET title=$1, note=$2 WHERE id=$3 RETURNING *';\n    const values = [Object(_utils_trim__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(title), Object(_utils_trim__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(note), id];\n\n    _db_store_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(text, values)\n      .then(results => res.status(202).json({\n        status: 202,\n        data: results.rows[0]\n      }))\n      .catch(error => res.status(500).json({\n        status: 500,\n        error\n      }));\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NoteController);\n\n\n//# sourceURL=webpack:///./models/noteQueries.js?");

/***/ }),

/***/ "./router/noteRouter.js":
/*!******************************!*\
  !*** ./router/noteRouter.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_noteQueries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/noteQueries */ \"./models/noteQueries.js\");\n/* harmony import */ var _middlewares_noteValidation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middlewares/noteValidation */ \"./middlewares/noteValidation.js\");\n\n\n\n\n\nconst noteRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nnoteRouter.post('/note', _middlewares_noteValidation__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createNoteValidation, _models_noteQueries__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createNote);\nnoteRouter.get('/note', _models_noteQueries__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getNote);\nnoteRouter.delete('/note/:id', _middlewares_noteValidation__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deleteNote, _models_noteQueries__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteNote);\nnoteRouter.patch('/note/:id', _middlewares_noteValidation__WEBPACK_IMPORTED_MODULE_2__[\"default\"].editNoteValidation, _models_noteQueries__WEBPACK_IMPORTED_MODULE_1__[\"default\"].editNote);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (noteRouter);\n\n\n//# sourceURL=webpack:///./router/noteRouter.js?");

/***/ }),

/***/ "./utils/devLogger.js":
/*!****************************!*\
  !*** ./utils/devLogger.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst devLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('OUTPUT LOG:');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (devLogger);\n\n\n//# sourceURL=webpack:///./utils/devLogger.js?");

/***/ }),

/***/ "./utils/trim.js":
/*!***********************!*\
  !*** ./utils/trim.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst trim = (str) => {\n  const newStr = str.trim();\n  return newStr.replace(/\\s+/g, ' ');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (trim);\n\n\n//# sourceURL=webpack:///./utils/trim.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"debug\");\n\n//# sourceURL=webpack:///external_%22debug%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pg\");\n\n//# sourceURL=webpack:///external_%22pg%22?");

/***/ })

/******/ });