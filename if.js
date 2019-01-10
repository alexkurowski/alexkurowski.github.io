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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/if/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/if/game.ts":
/*!********************************!*\
  !*** ./src/scripts/if/game.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var log_1 = __webpack_require__(/*! ./log */ "./src/scripts/if/log.ts");
var Game;
(function (Game) {
    function init() {
        log_1.Log.add("ZORK I: The Great Underground Empire");
    }
    Game.init = init;
    function update(command) {
        log_1.Log.clear();
        log_1.Log.add("ZORK I: The Great Underground Empire", true);
        log_1.Log.add("Your command: " + command.join(' ') + ".");
    }
    Game.update = update;
})(Game = exports.Game || (exports.Game = {}));


/***/ }),

/***/ "./src/scripts/if/index.ts":
/*!*********************************!*\
  !*** ./src/scripts/if/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var input_1 = __webpack_require__(/*! ./input */ "./src/scripts/if/input.ts");
var log_1 = __webpack_require__(/*! ./log */ "./src/scripts/if/log.ts");
var game_1 = __webpack_require__(/*! ./game */ "./src/scripts/if/game.ts");
input_1.Input.init();
log_1.Log.init();
game_1.Game.init();
input_1.Input.focus();
log_1.Log.scrollDown();


/***/ }),

/***/ "./src/scripts/if/input.ts":
/*!*********************************!*\
  !*** ./src/scripts/if/input.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = __webpack_require__(/*! ./game */ "./src/scripts/if/game.ts");
var Input;
(function (Input) {
    var element;
    function init() {
        element = document.getElementById('input');
        document.addEventListener('keyup', function (event) {
            switch (event.keyCode) {
                case 13:
                    {
                        submit();
                        focus();
                    }
                    break;
                case 27:
                    {
                        clear();
                        focus();
                    }
                    break;
            }
        });
        element.addEventListener('blur', function () {
            focus();
        });
        document.addEventListener('click', function () {
            focus();
        });
    }
    Input.init = init;
    function focus() {
        element.focus();
    }
    Input.focus = focus;
    function submit() {
        var command = parse();
        game_1.Game.update(command);
        clear();
    }
    function clear() {
        element.value = "";
    }
    function parse() {
        return element
            .value
            .toLowerCase()
            .split(' ')
            .filter(function (s) { return s; });
    }
})(Input = exports.Input || (exports.Input = {}));


/***/ }),

/***/ "./src/scripts/if/log.ts":
/*!*******************************!*\
  !*** ./src/scripts/if/log.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Log;
(function (Log) {
    var element;
    function init() {
        element = document.getElementById('log');
    }
    Log.init = init;
    function scrollDown() {
        window.scrollTo(0, document.body.scrollHeight);
    }
    Log.scrollDown = scrollDown;
    function add(text, immediate) {
        if (immediate === void 0) { immediate = false; }
        var paragraph = document.createElement('p');
        element.appendChild(paragraph);
        if (immediate) {
            lineImmediateReveal(paragraph, text);
        }
        else {
            paragraph.setAttribute('role', 'alert');
            lineReveal(paragraph, text);
        }
    }
    Log.add = add;
    function lineRevealSpeed(length) {
        if (length < 100)
            return 10;
        if (length < 300)
            return 7;
        if (length < 500)
            return 3;
        else
            return 1;
    }
    function lineImmediateReveal(paragraph, text) {
        paragraph.textContent = text;
        scrollDown();
    }
    function lineReveal(paragraph, text) {
        var index = 0, speed = lineRevealSpeed(text.length), interval;
        interval = setInterval(function () {
            paragraph.textContent += text[index];
            index++;
            scrollDown();
            if (index >= text.length) {
                clearInterval(interval);
            }
        }, speed);
    }
    function clear() {
        while (element.lastChild) {
            element.removeChild(element.lastChild);
        }
    }
    Log.clear = clear;
})(Log = exports.Log || (exports.Log = {}));


/***/ })

/******/ });
//# sourceMappingURL=if.js.map