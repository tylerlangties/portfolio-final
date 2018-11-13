((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/work.js"],{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_menu_button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/menu-button.scss */ "./styles/menu-button.scss");
/* harmony import */ var _styles_menu_button_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_menu_button_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_nav_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/nav.scss */ "./styles/nav.scss");
/* harmony import */ var _styles_nav_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_nav_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/tylerlangties/projects/portfolio-final/components/Nav.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var HomeIcon = function HomeIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "currentColor",
    d: "M488 312.7V456c0 13.3-10.7 24-24 24H348c-6.6 0-12-5.4-12-12V356c0-6.6-5.4-12-12-12h-72c-6.6 0-12 5.4-12 12v112c0 6.6-5.4 12-12 12H112c-13.3 0-24-10.7-24-24V312.7c0-3.6 1.6-7 4.4-9.3l188-154.8c4.4-3.6 10.8-3.6 15.3 0l188 154.8c2.7 2.3 4.3 5.7 4.3 9.3zm83.6-60.9L488 182.9V44.4c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12V117l-89.5-73.7c-17.7-14.6-43.3-14.6-61 0L4.4 251.8c-5.1 4.2-5.8 11.8-1.6 16.9l25.5 31c4.2 5.1 11.8 5.8 16.9 1.6l235.2-193.7c4.4-3.6 10.8-3.6 15.3 0l235.2 193.7c5.1 4.2 12.7 3.5 16.9-1.6l25.5-31c4.2-5.2 3.4-12.7-1.7-16.9z",
    __self: this
  }));
};

HomeIcon.defaultProps = {
  'data-prefix': "fas",
  'data-icon': "home",
  className: "home-icon",
  viewBox: "0 0 576 512"
};

var ProfileIcon = function ProfileIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "currentColor",
    d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",
    __self: this
  }));
};

ProfileIcon.defaultProps = {
  'data-prefix': "fas",
  'data-icon': "info-circle",
  className: "profile-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
};

var WorkIcon = function WorkIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "currentColor",
    d: "M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z",
    __self: this
  }));
};

WorkIcon.defaultProps = {
  'data-prefix': "fas",
  'data-icon': "cogs",
  className: "work-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512"
};

var MailIcon = function MailIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "currentColor",
    d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z",
    __self: this
  }));
};

MailIcon.defaultProps = {
  'data-prefix': "fas",
  'data-icon': "envelope",
  className: "mail-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
};



var Nav =
/*#__PURE__*/
function (_Component) {
  _inherits(Nav, _Component);

  function Nav() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Nav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Nav)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      navIsOpen: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "navToggleClickHandler", function () {
      _this.setState(function (prevState) {
        return {
          navIsOpen: !prevState.navIsOpen
        };
      });
    });

    return _this;
  }

  _createClass(Nav, [{
    key: "render",
    value: function render() {
      var buttonToggle = "";
      var navigation__list = "navigation__list";

      if (this.state.navIsOpen) {
        buttonToggle = "open";
        navigation__list = "navigation__list open";
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navigation__icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.navToggleClickHandler,
        id: "nav-icon",
        className: buttonToggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: navigation__list,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "navigation__list--item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HomeIcon, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "navigation__list--item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProfileIcon, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "navigation__list--item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Work"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/work",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WorkIcon, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "navigation__list--item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Connect"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "mailto:tylerlangties@gmail.com?Subject=Hello,%20Tyler!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MailIcon, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }))))));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


;

/***/ }),

/***/ "./components/Particles/ParticlesOptions.js":
/*!**************************************************!*\
  !*** ./components/Particles/ParticlesOptions.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var particlesOptions = {
  "particles": {
    "number": {
      "value": 28,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#34275C"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#11082b"
      },
      "image": {
        "src": "img/github.svg",
        "width": 50,
        "height": 50
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#201542",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "right",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "retina_detect": true
};
/* harmony default export */ __webpack_exports__["default"] = (particlesOptions);

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/lib/particles.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
/* harmony import */ var _Particles_ParticlesOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Particles/ParticlesOptions */ "./components/Particles/ParticlesOptions.js");
/* harmony import */ var _styles_layout_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/layout.scss */ "./styles/layout.scss");
/* harmony import */ var _styles_layout_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/tylerlangties/projects/portfolio-final/components/layout.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Layout =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, _getPrototypeOf(Layout).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "layout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }), this.props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_particles_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "particles",
        params: _Particles_ParticlesOptions__WEBPACK_IMPORTED_MODULE_3__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./node_modules/react-particles-js/lib/particles.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-particles-js/lib/particles.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e, t) {
     true ? module.exports = t(__webpack_require__(/*! react */ "./node_modules/react/index.js")) : undefined;
}("undefined" != typeof self ? self : this, function(e) {
    return function(e) {
        function t(i) {
            if (a[i]) return a[i].exports;
            var r = a[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
        }
        var a = {};
        return t.m = e, t.c = a, t.d = function(e, a, i) {
            t.o(e, a) || Object.defineProperty(e, a, {
                configurable: !1,
                enumerable: !0,
                get: i
            });
        }, t.n = function(e) {
            var a = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return t.d(a, "a", a), a;
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, t.p = "", t(t.s = 2);
    }([ function(e, t, a) {
        "use strict";
        function i(e) {
            for (var a in e) t.hasOwnProperty(a) || (t[a] = e[a]);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a(7);
        t.Interact = r.default;
        var n = a(8);
        t.Modes = n.default;
        var s = a(9);
        t.Particle = s.default;
        var o = a(10);
        t.ParticleManager = o.default;
        var c = a(11);
        t.ParticlesLibrary = c.default;
        var l = a(12);
        t.Vendors = l.default, i(a(13)), i(a(14));
    }, function(t, a) {
        t.exports = e;
    }, function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = a(3);
        t.Particles = i.default, t.default = i.default;
    }, function(e, t, a) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function n(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        var s = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }(), o = function e(t, a, i) {
            null === t && (t = Function.prototype);
            var r = Object.getOwnPropertyDescriptor(t, a);
            if (void 0 === r) {
                var n = Object.getPrototypeOf(t);
                return null === n ? void 0 : e(n, a, i);
            }
            if ("value" in r) return r.value;
            var s = r.get;
            if (void 0 !== s) return s.call(i);
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = a(1), l = a(1), u = a(4), p = a(0), h = function(e) {
            function t(e) {
                i(this, t);
                var a = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return a.state = {
                    canvas: void 0,
                    library: void 0
                }, a.loadCanvas = a.loadCanvas.bind(a), a;
            }
            return n(t, e), s(t, [ {
                key: "refresh",
                value: function(e) {
                    var t = this;
                    this.state.canvas && (this.destroy(), this.setState({
                        library: new p.ParticlesLibrary(e.params)
                    }, function() {
                        t.loadCanvas(t.state.canvas);
                    }));
                }
            }, {
                key: "destroy",
                value: function() {
                    this.state.library.destroy();
                }
            }, {
                key: "loadCanvas",
                value: function(e) {
                    var t = this;
                    e && this.setState({
                        canvas: e
                    }, function() {
                        t.state.library.loadCanvas(t.state.canvas), t.state.library.start();
                    });
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e) {
                    return e !== this.props;
                }
            }, {
                key: "componentWillUpdate",
                value: function(e) {
                    this.refresh(e);
                }
            }, {
                key: "forceUpdate",
                value: function() {
                    this.refresh(this.props), o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "forceUpdate", this).call(this);
                }
            }, {
                key: "componentWillMount",
                value: function() {
                    this.setState({
                        library: new p.ParticlesLibrary(this.props.params)
                    });
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.destroy(), this.setState({
                        library: void 0
                    });
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props, t = e.width, a = e.height, i = e.className, r = e.canvasClassName;
                    return c.createElement("div", {
                        className: i
                    }, c.createElement("canvas", {
                        ref: this.loadCanvas,
                        className: r,
                        style: p.deepExtend(u(this.props.style), {
                            width: t,
                            height: a
                        })
                    }));
                }
            } ]), t;
        }(l.Component);
        h.defaultProps = {
            width: "100%",
            height: "100%",
            params: {},
            style: {}
        }, t.default = h;
    }, function(e, t, a) {
        (function(e, a) {
            function i(e, t) {
                return e.set(t[0], t[1]), e;
            }
            function r(e, t) {
                return e.add(t), e;
            }
            function n(e, t) {
                for (var a = -1, i = e ? e.length : 0; ++a < i && !1 !== t(e[a], a, e); ) ;
                return e;
            }
            function s(e, t) {
                for (var a = -1, i = t.length, r = e.length; ++a < i; ) e[r + a] = t[a];
                return e;
            }
            function o(e, t, a, i) {
                var r = -1, n = e ? e.length : 0;
                for (i && n && (a = e[++r]); ++r < n; ) a = t(a, e[r], r, e);
                return a;
            }
            function c(e, t) {
                for (var a = -1, i = Array(e); ++a < e; ) i[a] = t(a);
                return i;
            }
            function l(e, t) {
                return null == e ? void 0 : e[t];
            }
            function u(e) {
                var t = !1;
                if (null != e && "function" != typeof e.toString) try {
                    t = !!(e + "");
                } catch (e) {}
                return t;
            }
            function p(e) {
                var t = -1, a = Array(e.size);
                return e.forEach(function(e, i) {
                    a[++t] = [ i, e ];
                }), a;
            }
            function h(e, t) {
                return function(a) {
                    return e(t(a));
                };
            }
            function v(e) {
                var t = -1, a = Array(e.size);
                return e.forEach(function(e) {
                    a[++t] = e;
                }), a;
            }
            function m(e) {
                var t = -1, a = e ? e.length : 0;
                for (this.clear(); ++t < a; ) {
                    var i = e[t];
                    this.set(i[0], i[1]);
                }
            }
            function d() {
                this.__data__ = Lt ? Lt(null) : {};
            }
            function y(e) {
                return this.has(e) && delete this.__data__[e];
            }
            function f(e) {
                var t = this.__data__;
                if (Lt) {
                    var a = t[e];
                    return a === ze ? void 0 : a;
                }
                return ft.call(t, e) ? t[e] : void 0;
            }
            function b(e) {
                var t = this.__data__;
                return Lt ? void 0 !== t[e] : ft.call(t, e);
            }
            function _(e, t) {
                return this.__data__[e] = Lt && void 0 === t ? ze : t, this;
            }
            function g(e) {
                var t = -1, a = e ? e.length : 0;
                for (this.clear(); ++t < a; ) {
                    var i = e[t];
                    this.set(i[0], i[1]);
                }
            }
            function x() {
                this.__data__ = [];
            }
            function w(e) {
                var t = this.__data__, a = q(t, e);
                return !(a < 0) && (a == t.length - 1 ? t.pop() : Mt.call(t, a, 1), !0);
            }
            function k(e) {
                var t = this.__data__, a = q(t, e);
                return a < 0 ? void 0 : t[a][1];
            }
            function j(e) {
                return q(this.__data__, e) > -1;
            }
            function P(e, t) {
                var a = this.__data__, i = q(a, e);
                return i < 0 ? a.push([ e, t ]) : a[i][1] = t, this;
            }
            function M(e) {
                var t = -1, a = e ? e.length : 0;
                for (this.clear(); ++t < a; ) {
                    var i = e[t];
                    this.set(i[0], i[1]);
                }
            }
            function O() {
                this.__data__ = {
                    hash: new m(),
                    map: new (St || g)(),
                    string: new m()
                };
            }
            function A(e) {
                return se(this, e).delete(e);
            }
            function z(e) {
                return se(this, e).get(e);
            }
            function F(e) {
                return se(this, e).has(e);
            }
            function S(e, t) {
                return se(this, e).set(e, t), this;
            }
            function E(e) {
                this.__data__ = new g(e);
            }
            function I() {
                this.__data__ = new g();
            }
            function C(e) {
                return this.__data__.delete(e);
            }
            function L(e) {
                return this.__data__.get(e);
            }
            function T(e) {
                return this.__data__.has(e);
            }
            function D(e, t) {
                var a = this.__data__;
                if (a instanceof g) {
                    var i = a.__data__;
                    if (!St || i.length < Ae - 1) return i.push([ e, t ]), this;
                    a = this.__data__ = new M(i);
                }
                return a.set(e, t), this;
            }
            function R(e, t) {
                var a = Nt(e) || be(e) ? c(e.length, String) : [], i = a.length, r = !!i;
                for (var n in e) !t && !ft.call(e, n) || r && ("length" == n || pe(n, i)) || a.push(n);
                return a;
            }
            function W(e, t, a) {
                var i = e[t];
                ft.call(e, t) && fe(i, a) && (void 0 !== a || t in e) || (e[t] = a);
            }
            function q(e, t) {
                for (var a = e.length; a--; ) if (fe(e[a][0], t)) return a;
                return -1;
            }
            function U(e, t) {
                return e && ie(t, Pe(t), e);
            }
            function $(e, t, a, i, r, s, o) {
                var c;
                if (i && (c = s ? i(e, r, s, o) : i(e)), void 0 !== c) return c;
                if (!ke(e)) return e;
                var l = Nt(e);
                if (l) {
                    if (c = ce(e), !t) return ae(e, c);
                } else {
                    var p = Xt(e), h = p == Ce || p == Le;
                    if (Yt(e)) return V(e, t);
                    if (p == Re || p == Se || h && !s) {
                        if (u(e)) return s ? e : {};
                        if (c = le(h ? {} : e), !t) return re(e, U(c, e));
                    } else {
                        if (!rt[p]) return s ? e : {};
                        c = ue(e, p, $, t);
                    }
                }
                o || (o = new E());
                var v = o.get(e);
                if (v) return v;
                if (o.set(e, c), !l) var m = a ? ne(e) : Pe(e);
                return n(m || e, function(r, n) {
                    m && (n = r, r = e[n]), W(c, n, $(r, t, a, i, n, e, o));
                }), c;
            }
            function B(e) {
                return ke(e) ? jt(e) : {};
            }
            function X(e, t, a) {
                var i = t(e);
                return Nt(e) ? i : s(i, a(e));
            }
            function N(e) {
                return bt.call(e);
            }
            function Y(e) {
                return !(!ke(e) || ve(e)) && (xe(e) || u(e) ? _t : at).test(de(e));
            }
            function H(e) {
                if (!me(e)) return zt(e);
                var t = [];
                for (var a in Object(e)) ft.call(e, a) && "constructor" != a && t.push(a);
                return t;
            }
            function V(e, t) {
                if (t) return e.slice();
                var a = new e.constructor(e.length);
                return e.copy(a), a;
            }
            function G(e) {
                var t = new e.constructor(e.byteLength);
                return new wt(t).set(new wt(e)), t;
            }
            function J(e, t) {
                var a = t ? G(e.buffer) : e.buffer;
                return new e.constructor(a, e.byteOffset, e.byteLength);
            }
            function K(e, t, a) {
                return o(t ? a(p(e), !0) : p(e), i, new e.constructor());
            }
            function Q(e) {
                var t = new e.constructor(e.source, tt.exec(e));
                return t.lastIndex = e.lastIndex, t;
            }
            function Z(e, t, a) {
                return o(t ? a(v(e), !0) : v(e), r, new e.constructor());
            }
            function ee(e) {
                return $t ? Object($t.call(e)) : {};
            }
            function te(e, t) {
                var a = t ? G(e.buffer) : e.buffer;
                return new e.constructor(a, e.byteOffset, e.length);
            }
            function ae(e, t) {
                var a = -1, i = e.length;
                for (t || (t = Array(i)); ++a < i; ) t[a] = e[a];
                return t;
            }
            function ie(e, t, a, i) {
                a || (a = {});
                for (var r = -1, n = t.length; ++r < n; ) {
                    var s = t[r], o = i ? i(a[s], e[s], s, a, e) : void 0;
                    W(a, s, void 0 === o ? e[s] : o);
                }
                return a;
            }
            function re(e, t) {
                return ie(e, Bt(e), t);
            }
            function ne(e) {
                return X(e, Pe, Bt);
            }
            function se(e, t) {
                var a = e.__data__;
                return he(t) ? a["string" == typeof t ? "string" : "hash"] : a.map;
            }
            function oe(e, t) {
                var a = l(e, t);
                return Y(a) ? a : void 0;
            }
            function ce(e) {
                var t = e.length, a = e.constructor(t);
                return t && "string" == typeof e[0] && ft.call(e, "index") && (a.index = e.index, 
                a.input = e.input), a;
            }
            function le(e) {
                return "function" != typeof e.constructor || me(e) ? {} : B(kt(e));
            }
            function ue(e, t, a, i) {
                var r = e.constructor;
                switch (t) {
                  case Be:
                    return G(e);

                  case Ee:
                  case Ie:
                    return new r(+e);

                  case Xe:
                    return J(e, i);

                  case Ne:
                  case Ye:
                  case He:
                  case Ve:
                  case Ge:
                  case Je:
                  case Ke:
                  case Qe:
                  case Ze:
                    return te(e, i);

                  case Te:
                    return K(e, i, a);

                  case De:
                  case Ue:
                    return new r(e);

                  case We:
                    return Q(e);

                  case qe:
                    return Z(e, i, a);

                  case $e:
                    return ee(e);
                }
            }
            function pe(e, t) {
                return !!(t = null == t ? Fe : t) && ("number" == typeof e || it.test(e)) && e > -1 && e % 1 == 0 && e < t;
            }
            function he(e) {
                var t = typeof e;
                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
            }
            function ve(e) {
                return !!dt && dt in e;
            }
            function me(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || vt);
            }
            function de(e) {
                if (null != e) {
                    try {
                        return yt.call(e);
                    } catch (e) {}
                    try {
                        return e + "";
                    } catch (e) {}
                }
                return "";
            }
            function ye(e) {
                return $(e, !0, !0);
            }
            function fe(e, t) {
                return e === t || e !== e && t !== t;
            }
            function be(e) {
                return ge(e) && ft.call(e, "callee") && (!Pt.call(e, "callee") || bt.call(e) == Se);
            }
            function _e(e) {
                return null != e && we(e.length) && !xe(e);
            }
            function ge(e) {
                return je(e) && _e(e);
            }
            function xe(e) {
                var t = ke(e) ? bt.call(e) : "";
                return t == Ce || t == Le;
            }
            function we(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= Fe;
            }
            function ke(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t);
            }
            function je(e) {
                return !!e && "object" == typeof e;
            }
            function Pe(e) {
                return _e(e) ? R(e) : H(e);
            }
            function Me() {
                return [];
            }
            function Oe() {
                return !1;
            }
            var Ae = 200, ze = "__lodash_hash_undefined__", Fe = 9007199254740991, Se = "[object Arguments]", Ee = "[object Boolean]", Ie = "[object Date]", Ce = "[object Function]", Le = "[object GeneratorFunction]", Te = "[object Map]", De = "[object Number]", Re = "[object Object]", We = "[object RegExp]", qe = "[object Set]", Ue = "[object String]", $e = "[object Symbol]", Be = "[object ArrayBuffer]", Xe = "[object DataView]", Ne = "[object Float32Array]", Ye = "[object Float64Array]", He = "[object Int8Array]", Ve = "[object Int16Array]", Ge = "[object Int32Array]", Je = "[object Uint8Array]", Ke = "[object Uint8ClampedArray]", Qe = "[object Uint16Array]", Ze = "[object Uint32Array]", et = /[\\^$.*+?()[\]{}|]/g, tt = /\w*$/, at = /^\[object .+?Constructor\]$/, it = /^(?:0|[1-9]\d*)$/, rt = {};
            rt[Se] = rt["[object Array]"] = rt[Be] = rt[Xe] = rt[Ee] = rt[Ie] = rt[Ne] = rt[Ye] = rt[He] = rt[Ve] = rt[Ge] = rt[Te] = rt[De] = rt[Re] = rt[We] = rt[qe] = rt[Ue] = rt[$e] = rt[Je] = rt[Ke] = rt[Qe] = rt[Ze] = !0, 
            rt["[object Error]"] = rt[Ce] = rt["[object WeakMap]"] = !1;
            var nt = "object" == typeof e && e && e.Object === Object && e, st = "object" == typeof self && self && self.Object === Object && self, ot = nt || st || Function("return this")(), ct = "object" == typeof t && t && !t.nodeType && t, lt = ct && "object" == typeof a && a && !a.nodeType && a, ut = lt && lt.exports === ct, pt = Array.prototype, ht = Function.prototype, vt = Object.prototype, mt = ot["__core-js_shared__"], dt = function() {
                var e = /[^.]+$/.exec(mt && mt.keys && mt.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : "";
            }(), yt = ht.toString, ft = vt.hasOwnProperty, bt = vt.toString, _t = RegExp("^" + yt.call(ft).replace(et, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), gt = ut ? ot.Buffer : void 0, xt = ot.Symbol, wt = ot.Uint8Array, kt = h(Object.getPrototypeOf, Object), jt = Object.create, Pt = vt.propertyIsEnumerable, Mt = pt.splice, Ot = Object.getOwnPropertySymbols, At = gt ? gt.isBuffer : void 0, zt = h(Object.keys, Object), Ft = oe(ot, "DataView"), St = oe(ot, "Map"), Et = oe(ot, "Promise"), It = oe(ot, "Set"), Ct = oe(ot, "WeakMap"), Lt = oe(Object, "create"), Tt = de(Ft), Dt = de(St), Rt = de(Et), Wt = de(It), qt = de(Ct), Ut = xt ? xt.prototype : void 0, $t = Ut ? Ut.valueOf : void 0;
            m.prototype.clear = d, m.prototype.delete = y, m.prototype.get = f, m.prototype.has = b, 
            m.prototype.set = _, g.prototype.clear = x, g.prototype.delete = w, g.prototype.get = k, 
            g.prototype.has = j, g.prototype.set = P, M.prototype.clear = O, M.prototype.delete = A, 
            M.prototype.get = z, M.prototype.has = F, M.prototype.set = S, E.prototype.clear = I, 
            E.prototype.delete = C, E.prototype.get = L, E.prototype.has = T, E.prototype.set = D;
            var Bt = Ot ? h(Ot, Object) : Me, Xt = N;
            (Ft && Xt(new Ft(new ArrayBuffer(1))) != Xe || St && Xt(new St()) != Te || Et && "[object Promise]" != Xt(Et.resolve()) || It && Xt(new It()) != qe || Ct && "[object WeakMap]" != Xt(new Ct())) && (Xt = function(e) {
                var t = bt.call(e), a = t == Re ? e.constructor : void 0, i = a ? de(a) : void 0;
                if (i) switch (i) {
                  case Tt:
                    return Xe;

                  case Dt:
                    return Te;

                  case Rt:
                    return "[object Promise]";

                  case Wt:
                    return qe;

                  case qt:
                    return "[object WeakMap]";
                }
                return t;
            });
            var Nt = Array.isArray, Yt = At || Oe;
            a.exports = ye;
        }).call(t, a(5), a(6)(e));
    }, function(e, t) {
        var a;
        a = function() {
            return this;
        }();
        try {
            a = a || Function("return this")() || (0, eval)("this");
        } catch (e) {
            "object" == typeof window && (a = window);
        }
        e.exports = a;
    }, function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), 
            Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l;
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i;
                }
            }), e.webpackPolyfill = 1), e;
        };
    }, function(e, t, a) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        var r = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }();
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(t, a) {
                i(this, e), this.params = t, this.library = a;
            }
            return r(e, [ {
                key: "linkParticles",
                value: function(e, t) {
                    var a = e.x - t.x, i = e.y - t.y, r = Math.sqrt(a * a + i * i), n = this.library.canvas, s = this.params.particles.line_linked;
                    if (r <= this.params.particles.line_linked.distance) {
                        var o = this.params.particles.line_linked.opacity - r / (1 / this.params.particles.line_linked.opacity) / this.params.particles.line_linked.distance;
                        if (o > 0) {
                            var c = this.params.particles.line_linked.color_rgb_line, l = c.r, u = c.g, p = c.b;
                            n.ctx.save(), n.ctx.strokeStyle = "rgba( " + l + ", " + u + ", " + p + ", " + o + " )", 
                            n.ctx.lineWidth = this.params.particles.line_linked.width, n.ctx.beginPath(), s.shadow.enable && (n.ctx.shadowBlur = s.shadow.blur, 
                            n.ctx.shadowColor = s.shadow.color), n.ctx.moveTo(e.x, e.y), n.ctx.lineTo(t.x, t.y), 
                            n.ctx.stroke(), n.ctx.closePath(), n.ctx.restore();
                        }
                    }
                }
            }, {
                key: "attractParticles",
                value: function(e, t) {
                    var a = e.x - t.x, i = e.y - t.y;
                    if (Math.sqrt(a * a + i * i) <= this.params.particles.line_linked.distance) {
                        var r = a / (1e3 * this.params.particles.move.attract.rotateX), n = i / (1e3 * this.params.particles.move.attract.rotateY);
                        e.vx -= r, e.vy -= n, t.vx += r, t.vy += n;
                    }
                }
            }, {
                key: "bounceParticles",
                value: function(e, t) {
                    var a = e.x - t.x, i = e.y - t.y;
                    Math.sqrt(a * a + i * i) <= e.radius + t.radius && (e.vx = -e.vx, e.vy = -e.vy, 
                    t.vx = -t.vx, t.vy = -t.vy);
                }
            } ]), e;
        }();
        t.default = n;
    }, function(e, t, a) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        var r = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }();
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a(0), s = function() {
            function e(t, a) {
                i(this, e), this.params = t, this.library = a;
            }
            return r(e, [ {
                key: "pushParticles",
                value: function(e, t) {
                    var a = this.library, i = a.canvas, r = a.tmp, s = a.manager;
                    r.pushing = !0;
                    for (var o = 0; o < e; o++) this.params.particles.array.push(new n.Particle(this.params, this.library, this.params.particles.color, this.params.particles.opacity.value, {
                        x: t ? t.pos_x : Math.random() * i.width,
                        y: t ? t.pos_y : Math.random() * i.height
                    })), o == e - 1 && (this.params.particles.move.enable || s.particlesDraw(), r.pushing = !1);
                }
            }, {
                key: "removeParticles",
                value: function(e) {
                    var t = this.library.manager;
                    this.params.particles.array.splice(0, e), this.params.particles.move.enable || t.particlesDraw();
                }
            }, {
                key: "bubbleParticle",
                value: function(e) {
                    var t = this, a = this.library.tmp;
                    if (this.params.interactivity.events.onhover.enable && n.isInArray("bubble", this.params.interactivity.events.onhover.mode)) {
                        var i = e.x - this.params.interactivity.mouse.pos_x, r = e.y - this.params.interactivity.mouse.pos_y, s = Math.sqrt(i * i + r * r), o = 1 - s / this.params.interactivity.modes.bubble.distance, c = function() {
                            e.opacity_bubble = e.opacity, e.radius_bubble = e.radius;
                        };
                        if (s <= this.params.interactivity.modes.bubble.distance) {
                            if (o >= 0 && "mousemove" == this.params.interactivity.status) {
                                if (this.params.interactivity.modes.bubble.size != this.params.particles.size.value) if (this.params.interactivity.modes.bubble.size > this.params.particles.size.value) {
                                    var l = e.radius + this.params.interactivity.modes.bubble.size * o;
                                    l >= 0 && (e.radius_bubble = l);
                                } else {
                                    var u = e.radius - this.params.interactivity.modes.bubble.size, p = e.radius - u * o;
                                    e.radius_bubble = p > 0 ? p : 0;
                                }
                                if (this.params.interactivity.modes.bubble.opacity != this.params.particles.opacity.value) if (this.params.interactivity.modes.bubble.opacity > this.params.particles.opacity.value) {
                                    var h = this.params.interactivity.modes.bubble.opacity * o;
                                    h > e.opacity && h <= this.params.interactivity.modes.bubble.opacity && (e.opacity_bubble = h);
                                } else {
                                    var v = e.opacity - (this.params.particles.opacity.value - this.params.interactivity.modes.bubble.opacity) * o;
                                    v < e.opacity && v >= this.params.interactivity.modes.bubble.opacity && (e.opacity_bubble = v);
                                }
                            }
                        } else c();
                        "mouseleave" == this.params.interactivity.status && c();
                    } else if (this.params.interactivity.events.onclick.enable && n.isInArray("bubble", this.params.interactivity.events.onclick.mode) && a.bubble_clicking) {
                        var m = e.x - this.params.interactivity.mouse.click_pos_x, d = e.y - this.params.interactivity.mouse.click_pos_y, y = Math.sqrt(m * m + d * d), f = (new Date().getTime() - this.params.interactivity.mouse.click_time) / 1e3;
                        f > this.params.interactivity.modes.bubble.duration && (a.bubble_duration_end = !0), 
                        f > 2 * this.params.interactivity.modes.bubble.duration && (a.bubble_clicking = !1, 
                        a.bubble_duration_end = !1);
                        var b = function(i, r, n, s, o) {
                            if (i != r) if (a.bubble_duration_end) {
                                if (void 0 != n) {
                                    var c = s - f * (s - i) / t.params.interactivity.modes.bubble.duration, l = i - c, u = i + l;
                                    "size" == o && (e.radius_bubble = u), "opacity" == o && (e.opacity_bubble = u);
                                }
                            } else if (y <= t.params.interactivity.modes.bubble.distance) {
                                if ((void 0 != n ? n : s) != i) {
                                    var p = s - f * (s - i) / t.params.interactivity.modes.bubble.duration;
                                    "size" == o && (e.radius_bubble = p), "opacity" == o && (e.opacity_bubble = p);
                                }
                            } else "size" == o && (e.radius_bubble = void 0), "opacity" == o && (e.opacity_bubble = void 0);
                        };
                        a.bubble_clicking && (b(this.params.interactivity.modes.bubble.size, this.params.particles.size.value, e.radius_bubble, e.radius, "size"), 
                        b(this.params.interactivity.modes.bubble.opacity, this.params.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"));
                    }
                }
            }, {
                key: "repulseParticle",
                value: function(e) {
                    var t = this, a = this.library, i = a.canvas, r = a.tmp;
                    if (this.params.interactivity.events.onhover.enable && n.isInArray("repulse", this.params.interactivity.events.onhover.mode) && "mousemove" == this.params.interactivity.status) {
                        var s = e.x - this.params.interactivity.mouse.pos_x, o = e.y - this.params.interactivity.mouse.pos_y, c = Math.sqrt(s * s + o * o), l = {
                            x: s / c,
                            y: o / c
                        }, u = this.params.interactivity.modes.repulse.distance, p = n.clamp(1 / u * (-1 * Math.pow(c / u, 2) + 1) * u * 100, 0, 50), h = {
                            x: e.x + l.x * p,
                            y: e.y + l.y * p
                        };
                        "bounce" == this.params.particles.move.out_mode ? (h.x - e.radius > 0 && h.x + e.radius < i.width && (e.x = h.x), 
                        h.y - e.radius > 0 && h.y + e.radius < i.height && (e.y = h.y)) : (e.x = h.x, e.y = h.y);
                    } else if (this.params.interactivity.events.onclick.enable && n.isInArray("repulse", this.params.interactivity.events.onclick.mode)) if (r.repulse_finish || ++r.repulse_count == this.params.particles.array.length && (r.repulse_finish = !0), 
                    r.repulse_clicking) {
                        var v = Math.pow(this.params.interactivity.modes.repulse.distance / 6, 3), m = this.params.interactivity.mouse.click_pos_x - e.x, d = this.params.interactivity.mouse.click_pos_y - e.y, y = m * m + d * d, f = -v / y * 1;
                        y <= v && function() {
                            var a = Math.atan2(d, m);
                            if (e.vx = f * Math.cos(a), e.vy = f * Math.sin(a), "bounce" == t.params.particles.move.out_mode) {
                                var r = {
                                    x: e.x + e.vx,
                                    y: e.y + e.vy
                                };
                                r.x + e.radius > i.width ? e.vx = -e.vx : r.x - e.radius < 0 && (e.vx = -e.vx), 
                                r.y + e.radius > i.height ? e.vy = -e.vy : r.y - e.radius < 0 && (e.vy = -e.vy);
                            }
                        }();
                    } else 0 == r.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i);
                }
            }, {
                key: "grabParticle",
                value: function(e) {
                    var t = this.library.canvas, a = this.params, i = a.interactivity, r = a.particles;
                    if (i.events.onhover.enable && "mousemove" == i.status) {
                        var n = e.x - i.mouse.pos_x, s = e.y - i.mouse.pos_y, o = Math.sqrt(n * n + s * s);
                        if (o <= i.modes.grab.distance) {
                            var c = i.modes.grab, l = c.line_linked.opacity - o / (1 / c.line_linked.opacity) / c.distance;
                            if (l > 0) {
                                var u = r.line_linked.color_rgb_line, p = u.r, h = u.g, v = u.b;
                                t.ctx.strokeStyle = "rgba( " + p + ", " + h + ", " + v + ", " + l + " )", t.ctx.lineWidth = r.line_linked.width, 
                                t.ctx.beginPath(), t.ctx.moveTo(e.x, e.y), t.ctx.lineTo(i.mouse.pos_x, i.mouse.pos_y), 
                                t.ctx.stroke(), t.ctx.closePath();
                            }
                        }
                    }
                }
            } ]), e;
        }();
        t.default = s;
    }, function(e, t, a) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, n = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }();
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = a(0), o = function() {
            function e(t, a, r, n, s) {
                i(this, e), this.params = t, this.library = a, this.setupSize(), this.setupPosition(s), 
                this.setupColor(r), this.setupOpacity(), this.setupAnimation();
            }
            return n(e, [ {
                key: "setupSize",
                value: function() {
                    this.radius = (this.params.particles.size.random ? Math.random() : 1) * this.params.particles.size.value, 
                    this.params.particles.size.anim.enable && (this.size_status = !1, this.vs = this.params.particles.size.anim.speed / 100, 
                    this.params.particles.size.anim.sync || (this.vs = this.vs * Math.random()));
                }
            }, {
                key: "setupPosition",
                value: function(e) {
                    var t = this.library, a = t.canvas, i = t.vendors;
                    this.x = e ? e.x : Math.random() * a.width, this.y = e ? e.y : Math.random() * a.height, 
                    this.x > a.width - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), 
                    this.y > a.height - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), 
                    this.params.particles.move.bounce && i.checkOverlap(this, e);
                }
            }, {
                key: "setupColor",
                value: function(e) {
                    this.color = s.getColor(e.value);
                }
            }, {
                key: "setupOpacity",
                value: function() {
                    this.opacity = (this.params.particles.opacity.random ? Math.random() : 1) * this.params.particles.opacity.value, 
                    this.params.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = this.params.particles.opacity.anim.speed / 100, 
                    this.params.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
                }
            }, {
                key: "setupAnimation",
                value: function() {
                    var e = this.library, t = e.tmp, a = e.vendors, i = null;
                    switch (this.params.particles.move.direction) {
                      case "top":
                        i = {
                            x: 0,
                            y: -1
                        };
                        break;

                      case "top-right":
                        i = {
                            x: .5,
                            y: -.5
                        };
                        break;

                      case "right":
                        i = {
                            x: 1,
                            y: 0
                        };
                        break;

                      case "bottom-right":
                        i = {
                            x: .5,
                            y: .5
                        };
                        break;

                      case "bottom":
                        i = {
                            x: 0,
                            y: 1
                        };
                        break;

                      case "bottom-left":
                        i = {
                            x: -.5,
                            y: 1
                        };
                        break;

                      case "left":
                        i = {
                            x: -1,
                            y: 0
                        };
                        break;

                      case "top-left":
                        i = {
                            x: -.5,
                            y: -.5
                        };
                        break;

                      default:
                        i = {
                            x: 0,
                            y: 0
                        };
                    }
                    this.params.particles.move.straight ? (this.vx = i.x, this.vy = i.y, this.params.particles.move.random && (this.vx = this.vx * Math.random(), 
                    this.vy = this.vy * Math.random())) : (this.vx = i.x + Math.random() - .5, this.vy = i.y + Math.random() - .5), 
                    this.vx_i = this.vx, this.vy_i = this.vy;
                    var n = this.params.particles.shape.type;
                    if ("object" == (void 0 === n ? "undefined" : r(n))) {
                        if (n instanceof Array) {
                            var s = n[Math.floor(Math.random() * n.length)];
                            this.shape = s;
                        }
                    } else this.shape = n;
                    if ("image" == this.shape) {
                        var o = this.params.particles.shape;
                        this.img = {
                            src: o.image.src,
                            ratio: o.image.width / o.image.height
                        }, this.img.ratio || (this.img.ratio = 1), "svg" == t.img_type && void 0 != o.image.data && (a.createSvgImg(this, o.image.data), 
                        t.pushing && (this.img.loaded = !1));
                    }
                    if ("images" == this.shape) {
                        var c = this.params.particles.shape;
                        t.img_index++;
                        var l = c.images[t.img_index % c.images.length];
                        this.img = {
                            src: l.src,
                            ratio: l.width / l.height
                        }, this.img.ratio || (this.img.ratio = 1), "svg" == t.img_type && void 0 != l.data && (a.createSvgImg(this, l.data), 
                        t.pushing && (this.img.loaded = !1));
                    }
                }
            }, {
                key: "draw",
                value: function() {
                    var e = this, t = this.library, a = t.canvas, i = t.tmp, r = t.vendors, n = (this.params.particles, 
                    void 0);
                    n = void 0 != this.radius_bubble ? this.radius_bubble : this.radius;
                    var s = void 0;
                    s = void 0 != this.opacity_bubble ? this.opacity_bubble : this.opacity;
                    var o = void 0;
                    if (this.color.rgb) {
                        var c = this.color.rgb;
                        o = "rgba( " + c.r + ", " + c.g + ", " + c.b + ", " + s + " )";
                    } else {
                        var l = this.color.hsl;
                        o = "hsla( " + l.h + ", " + l.s + ", " + l.l + ", " + s + " )";
                    }
                    switch (a.ctx.fillStyle = o, a.ctx.beginPath(), this.shape) {
                      case "circle":
                        a.ctx.arc(this.x, this.y, n, 0, 2 * Math.PI, !1);
                        break;

                      case "edge":
                        a.ctx.rect(this.x - n, this.y - n, 2 * n, 2 * n);
                        break;

                      case "triangle":
                        r.drawShape(a.ctx, this.x - n, this.y + n / 1.66, 2 * n, 3, 2);
                        break;

                      case "polygon":
                        r.drawShape(a.ctx, this.x - n / (this.params.particles.shape.polygon.nb_sides / 3.5), this.y - n / .76, 2.66 * n / (this.params.particles.shape.polygon.nb_sides / 3), this.params.particles.shape.polygon.nb_sides, 1);
                        break;

                      case "star":
                        r.drawShape(a.ctx, this.x - 2 * n / (this.params.particles.shape.polygon.nb_sides / 4), this.y - n / 1.52, 2 * n * 2.66 / (this.params.particles.shape.polygon.nb_sides / 3), this.params.particles.shape.polygon.nb_sides, 2);
                        break;

                      case "images":
                      case "image":
                        var u = void 0;
                        u = "svg" == i.img_type ? this.img.obj : i.img_obj, u && function(t) {
                            a.ctx.drawImage(t, e.x - n, e.y - n, 2 * n, 2 * n / e.img.ratio);
                        }(u);
                    }
                    a.ctx.closePath(), this.params.particles.shape.stroke.width > 0 && (a.ctx.strokeStyle = this.params.particles.shape.stroke.color, 
                    a.ctx.lineWidth = this.params.particles.shape.stroke.width, a.ctx.stroke()), a.ctx.fill();
                }
            } ]), e;
        }();
        t.default = o;
    }, function(e, t, a) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        var r = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }();
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a(0), s = function() {
            function e(t, a, r, n, s) {
                i(this, e), this.params = t, this.interact = a, this.modes = r, this.vendors = n, 
                this.library = s;
            }
            return r(e, [ {
                key: "particlesCreate",
                value: function() {
                    for (var e = this.params.particles, t = e.color, a = e.opacity, i = 0; i < this.params.particles.number.value; i++) this.params.particles.array.push(new n.Particle(this.params, this.library, t, a.value));
                }
            }, {
                key: "particlesUpdate",
                value: function() {
                    var e = this, t = this.library, a = t.canvas, i = t.interact, r = t.modes;
                    this.params.particles.array.forEach(function(t, s) {
                        if (e.params.particles.move.enable) {
                            var o = e.params.particles.move.speed / 2;
                            t.x += t.vx * o, t.y += t.vy * o;
                        }
                        e.params.particles.opacity.anim.enable && (1 == t.opacity_status ? (t.opacity >= e.params.particles.opacity.value && (t.opacity_status = !1), 
                        t.opacity += t.vo) : (t.opacity <= e.params.particles.opacity.anim.opacity_min && (t.opacity_status = !0), 
                        t.opacity -= t.vo), t.opacity < 0 && (t.opacity = 0)), e.params.particles.size.anim.enable && (1 == t.size_status ? (t.radius >= e.params.particles.size.value && (t.size_status = !1), 
                        t.radius += t.vs) : (t.radius <= e.params.particles.size.anim.size_min && (t.size_status = !0), 
                        t.radius -= t.vs), t.radius < 0 && (t.radius = 0));
                        var c = void 0;
                        switch (c = "bounce" == e.params.particles.move.out_mode ? {
                            x_left: t.radius,
                            x_right: a.width,
                            y_top: t.radius,
                            y_bottom: a.height
                        } : {
                            x_left: -t.radius,
                            x_right: a.width + t.radius,
                            y_top: -t.radius,
                            y_bottom: a.height + t.radius
                        }, t.x - t.radius > a.width ? (t.x = c.x_left, t.y = Math.random() * a.height) : t.x + t.radius < 0 && (t.x = c.x_right, 
                        t.y = Math.random() * a.height), t.y - t.radius > a.height ? (t.y = c.y_top, t.x = Math.random() * a.width) : t.y + t.radius < 0 && (t.y = c.y_bottom, 
                        t.x = Math.random() * a.width), e.params.particles.move.out_mode) {
                          case "bounce":
                            t.x + t.radius > a.width ? t.vx = -t.vx : t.x - t.radius < 0 && (t.vx = -t.vx), 
                            t.y + t.radius > a.height ? t.vy = -t.vy : t.y - t.radius < 0 && (t.vy = -t.vy);
                        }
                        if (n.isInArray("grab", e.params.interactivity.events.onhover.mode) && r.grabParticle(t), 
                        (n.isInArray("bubble", e.params.interactivity.events.onhover.mode) || n.isInArray("bubble", e.params.interactivity.events.onclick.mode)) && r.bubbleParticle(t), 
                        (n.isInArray("repulse", e.params.interactivity.events.onhover.mode) || n.isInArray("repulse", e.params.interactivity.events.onclick.mode)) && r.repulseParticle(t), 
                        e.params.particles.line_linked.enable || e.params.particles.move.attract.enable) for (var l = s + 1; l < e.params.particles.array.length; l++) {
                            var u = e.params.particles.array[l];
                            e.params.particles.line_linked.enable && i.linkParticles(t, u), e.params.particles.move.attract.enable && i.attractParticles(t, u), 
                            e.params.particles.move.bounce && i.bounceParticles(t, u);
                        }
                    });
                }
            }, {
                key: "particlesDraw",
                value: function() {
                    var e = this.library, t = e.canvas, a = e.manager;
                    t.ctx.clearRect(0, 0, t.width, t.height), a.particlesUpdate(), this.params.particles.array.forEach(function(e) {
                        e.draw();
                    });
                }
            }, {
                key: "particlesEmpty",
                value: function() {
                    this.params.particles.array = [];
                }
            }, {
                key: "particlesRefresh",
                value: function() {
                    var e = this.library, t = e.tmp;
                    e.vendors;
                    cancelAnimationFrame(t.checkAnimFrame), cancelAnimationFrame(t.drawAnimFrame), t.img_obj = void 0, 
                    t.count_svg = 0, this.particlesEmpty(), this.library.canvasClear(), this.library.start();
                }
            } ]), e;
        }();
        t.default = s;
    }, function(e, t, a) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        var r = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }();
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a(0), s = function() {
            function e(t) {
                i(this, e), this.tmp = {}, this.tmp = {}, this.loadParameters(t), this.extendParams(), 
                this.interact = new n.Interact(this.params, this), this.modes = new n.Modes(this.params, this), 
                this.vendors = new n.Vendors(this.params, this), this.manager = new n.ParticleManager(this.params, this.interact, this.modes, this.vendors, this);
            }
            return r(e, [ {
                key: "loadParameters",
                value: function(e) {
                    var t = n.getDefaultParams(), a = n.deepExtend(t, e);
                    this.params = a;
                }
            }, {
                key: "loadCanvas",
                value: function(e) {
                    this.canvas = {
                        element: e,
                        width: e.offsetWidth,
                        height: e.offsetHeight
                    };
                }
            }, {
                key: "start",
                value: function() {
                    var e = this.vendors;
                    e.eventsListeners(), e.start();
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this.tmp;
                    this.detachListeners(), this.vendors.detachListeners(), cancelAnimationFrame(e.drawAnimFrame), 
                    this.canvasClear();
                }
            }, {
                key: "detachListeners",
                value: function() {
                    window.removeEventListener("resize", this.onWindowResize);
                }
            }, {
                key: "extendParams",
                value: function() {
                    this.extendTmpDefinition(), this.onWindowResize = this.onWindowResize.bind(this);
                }
            }, {
                key: "extendTmpDefinition",
                value: function() {
                    var e = this.tmp;
                    e.obj = {
                        size_value: this.params.particles.size.value,
                        size_anim_speed: this.params.particles.size.anim.speed,
                        move_speed: this.params.particles.move.speed,
                        line_linked_distance: this.params.particles.line_linked.distance,
                        line_linked_width: this.params.particles.line_linked.width,
                        mode_grab_distance: this.params.interactivity.modes.grab.distance,
                        mode_bubble_distance: this.params.interactivity.modes.bubble.distance,
                        mode_bubble_size: this.params.interactivity.modes.bubble.size,
                        mode_repulse_distance: this.params.interactivity.modes.repulse.distance
                    }, e.count_svg = 0, e.img_index = 0;
                }
            }, {
                key: "retinaInit",
                value: function() {
                    var e = this.canvas, t = this.tmp;
                    this.params.retina_detect && window.devicePixelRatio > 1 ? (e.pxratio = window.devicePixelRatio, 
                    t.retina = !0, e.width = e.element.offsetWidth * e.pxratio, e.height = e.element.offsetHeight * e.pxratio, 
                    this.params.particles.size.value = t.obj.size_value * e.pxratio, this.params.particles.size.anim.speed = t.obj.size_anim_speed * e.pxratio, 
                    this.params.particles.move.speed = t.obj.move_speed * e.pxratio, this.params.particles.line_linked.distance = t.obj.line_linked_distance * e.pxratio, 
                    this.params.interactivity.modes.grab.distance = t.obj.mode_grab_distance * e.pxratio, 
                    this.params.interactivity.modes.bubble.distance = t.obj.mode_bubble_distance * e.pxratio, 
                    this.params.particles.line_linked.width = t.obj.line_linked_width * e.pxratio, this.params.interactivity.modes.bubble.size = t.obj.mode_bubble_size * e.pxratio, 
                    this.params.interactivity.modes.repulse.distance = t.obj.mode_repulse_distance * e.pxratio) : (e.pxratio = 1, 
                    t.retina = !1);
                }
            }, {
                key: "canvasInit",
                value: function() {
                    var e = this.canvas;
                    e.ctx = e.element.getContext("2d");
                }
            }, {
                key: "canvasSize",
                value: function() {
                    var e = this.canvas;
                    e.element.width = e.width, e.element.height = e.height, this.params && this.params.interactivity.events.resize && window.addEventListener("resize", this.onWindowResize);
                }
            }, {
                key: "canvasPaint",
                value: function() {
                    var e = this.canvas;
                    if (e && e.ctx) try {
                        e.ctx.fillRect(0, 0, e.width, e.height);
                    } catch (e) {
                        console.warn(e);
                    }
                }
            }, {
                key: "canvasClear",
                value: function() {
                    var e = this.canvas;
                    if (e && e.ctx) try {
                        e.ctx.clearRect(0, 0, e.width, e.height);
                    } catch (e) {
                        console.warn(e);
                    }
                }
            }, {
                key: "onWindowResize",
                value: function() {
                    var e = this.canvas, t = this.manager, a = this.tmp, i = this.vendors;
                    e.width = e.element.offsetWidth, e.height = e.element.offsetHeight, a.retina && (e.width *= e.pxratio, 
                    e.height *= e.pxratio), e.element.width = e.width, e.element.height = e.height, 
                    this.params.particles.move.enable || (t.particlesEmpty(), t.particlesCreate(), t.particlesDraw(), 
                    i.densityAutoParticles()), i.densityAutoParticles();
                }
            } ]), e;
        }();
        t.default = s;
    }, function(e, t, a) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        var r = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, a, i) {
                return a && e(t.prototype, a), i && e(t, i), t;
            };
        }();
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a(0), s = function() {
            function e(t, a) {
                i(this, e), this.params = t, this.library = a, "undefined" != typeof performance && (this.lastDraw = performance.now()), 
                this.onMouseMove = this.onMouseMove.bind(this), this.onMouseLeave = this.onMouseLeave.bind(this), 
                this.onClick = this.onClick.bind(this), this.draw = this.draw.bind(this);
            }
            return r(e, [ {
                key: "eventsListeners",
                value: function() {
                    var e = this.params.interactivity, t = this.library.canvas;
                    "window" == e.detect_on ? e.el = window : e.el = t.element, (e.events.onhover.enable || e.events.onclick.enable) && (e.el.addEventListener("mousemove", this.onMouseMove), 
                    e.el.addEventListener("mouseleave", this.onMouseLeave)), e.events.onclick.enable && e.el.addEventListener("click", this.onClick);
                }
            }, {
                key: "detachListeners",
                value: function() {
                    var e = this.params.interactivity, t = this.library.tmp;
                    e.el && ((e.events.onhover.enable || e.events.onclick.enable) && (e.el.removeEventListener("mousemove", this.onMouseMove), 
                    e.el.addEventListener("mouseleave", this.onMouseLeave)), e.events.onclick.enable && e.el.addEventListener("click", this.onClick)), 
                    window.cancelAnimationFrame(t.drawAnimFrame);
                }
            }, {
                key: "onMouseMove",
                value: function(e) {
                    var t = this.library, a = t.canvas, i = t.tmp, r = this.params.interactivity, n = void 0;
                    n = r.el == window ? {
                        x: e.clientX,
                        y: e.clientY
                    } : {
                        x: e.offsetX || e.clientX,
                        y: e.offsetY || e.clientY
                    }, r.mouse.pos_x = n.x, r.mouse.pos_y = n.y, i.retina && (r.mouse.pos_x *= a.pxratio, 
                    r.mouse.pos_y *= a.pxratio), r.status = "mousemove";
                }
            }, {
                key: "onMouseLeave",
                value: function(e) {
                    var t = this.params.interactivity;
                    t.mouse.pos_x = null, t.mouse.pos_y = null, t.status = "mouseleave";
                }
            }, {
                key: "onClick",
                value: function() {
                    var e = this.library, t = e.modes, a = e.tmp, i = this.params, r = i.interactivity, n = i.particles;
                    if (r.mouse.click_pos_x = r.mouse.pos_x, r.mouse.click_pos_y = r.mouse.pos_y, r.mouse.click_time = new Date().getTime(), 
                    r.events.onclick.enable) switch (r.events.onclick.mode) {
                      case "push":
                        n.move.enable ? t.pushParticles(r.modes.push.particles_nb, r.mouse) : 1 == r.modes.push.particles_nb ? t.pushParticles(r.modes.push.particles_nb, r.mouse) : r.modes.push.particles_nb > 1 && t.pushParticles(r.modes.push.particles_nb);
                        break;

                      case "remove":
                        t.removeParticles(r.modes.remove.particles_nb);
                        break;

                      case "bubble":
                        a.bubble_clicking = !0;
                        break;

                      case "repulse":
                        a.repulse_clicking = !0, a.repulse_count = 0, a.repulse_finish = !1, setTimeout(function() {
                            a.repulse_clicking = !1;
                        }, 1e3 * r.modes.repulse.duration);
                    }
                }
            }, {
                key: "densityAutoParticles",
                value: function() {
                    var e = this.library, t = e.canvas, a = e.modes, i = e.tmp, r = this.params.particles;
                    if (r.number.density.enable) {
                        var n = t.element.width * t.element.height / 1e3;
                        i.retina && (n = n / t.pxratio * 2);
                        var s = n * r.number.value / r.number.density.value_area, o = r.array.length - s;
                        o < 0 ? a.pushParticles(Math.abs(o)) : a.removeParticles(o);
                    }
                }
            }, {
                key: "checkOverlap",
                value: function(e, t) {
                    var a = this.library, i = a.canvas, r = a.vendors;
                    if (i.width && i.height) {
                        this.params.particles.array.forEach(function(a) {
                            var n = a, s = e.x - n.x, o = e.y - n.y;
                            Math.sqrt(s * s + o * o) <= e.radius + n.radius && (e.x = t ? t.x : Math.random() * i.width, 
                            e.y = t ? t.y : Math.random() * i.height, r.checkOverlap(e));
                        });
                    }
                }
            }, {
                key: "createSvgImg",
                value: function(e, t) {
                    var a = this.library.tmp, i = /#([0-9A-F]{3,6})|rgb\([0-9,]+\)/gi, r = t.replace(i, function(t, a, i, r) {
                        var n = void 0;
                        if (e.color.rgb) {
                            var s = e.color.rgb;
                            n = "rgba( " + s.r + ", " + s.g + ", " + s.b + ", " + e.opacity + " )";
                        } else {
                            var o = e.color.hsl;
                            n = "rgba( " + o.h + ", " + o.s + ", " + o.l + ", " + e.opacity + " )";
                        }
                        return n;
                    }), n = new Blob([ r ], {
                        type: "image/svg+xml;charset=utf-8"
                    }), s = window.URL || window, o = s.createObjectURL(n), c = new Image();
                    c.addEventListener("load", function() {
                        e.img.obj = c, e.img.loaded = !0, s.revokeObjectURL(o), a.count_svg++;
                    }), c.src = o;
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this.library, t = e.canvas, a = e.tmp;
                    cancelAnimationFrame(a.drawAnimFrame), t.element.remove();
                }
            }, {
                key: "drawShape",
                value: function(e, t, a, i, r, n) {
                    var s = r * n, o = r / n, c = 180 * (o - 2) / o, l = Math.PI - Math.PI * c / 180;
                    e.save(), e.beginPath(), e.translate(t, a), e.moveTo(0, 0);
                    for (var u = 0; u < s; u++) e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
                    e.fill(), e.restore();
                }
            }, {
                key: "exportImg",
                value: function() {
                    var e = this.library.canvas;
                    window.open(e.element.toDataURL("image/png"), "_blank");
                }
            }, {
                key: "loadImg",
                value: function(e, t) {
                    var a = this.library, i = a.tmp, r = a.vendors;
                    if (i.img_error = void 0, "" != t.src) if ("svg" == e) if (t.data) r.checkBeforeDraw(); else {
                        var n = new XMLHttpRequest();
                        n.open("GET", t.src), n.onreadystatechange = function(e) {
                            4 == n.readyState && (200 == n.status ? (t.data = e.currentTarget.response, r.checkBeforeDraw()) : (console.log("Error react-particles-js - image not found"), 
                            i.img_error = !0));
                        }, n.send();
                    } else {
                        var s = new Image();
                        s.addEventListener("load", function() {
                            i.img_obj = s, r.checkBeforeDraw();
                        }), s.src = t.src;
                    } else console.log("Error react-particles-js - no image.src"), i.img_error = !0;
                }
            }, {
                key: "draw",
                value: function() {
                    var e = !0, t = this.library, a = t.tmp, i = t.manager, r = t.vendors, n = this.params.particles;
                    if (void 0 !== performance) {
                        performance.now() - this.lastDraw < 1e3 / this.params.fps_limit ? e = !1 : this.lastDraw = performance.now();
                    }
                    "image" == n.shape.type || "images" == n.shape.type ? "svg" == a.img_type ? a.count_svg >= n.number.value ? (e && i.particlesDraw(), 
                    n.move.enable ? a.drawAnimFrame = requestAnimationFrame(r.draw) : cancelAnimationFrame(a.drawAnimFrame)) : a.img_error || (a.drawAnimFrame = requestAnimationFrame(r.draw)) : void 0 != a.img_obj ? (e && i.particlesDraw(), 
                    n.move.enable ? a.drawAnimFrame = requestAnimationFrame(r.draw) : cancelAnimationFrame(a.drawAnimFrame)) : a.img_error || (a.drawAnimFrame = requestAnimationFrame(r.draw)) : (e && i.particlesDraw(), 
                    n.move.enable ? a.drawAnimFrame = requestAnimationFrame(r.draw) : cancelAnimationFrame(a.drawAnimFrame));
                }
            }, {
                key: "checkBeforeDraw",
                value: function() {
                    var e = this.library, t = e.tmp, a = e.vendors, i = this.params.particles;
                    "image" == i.shape.type || "images" == i.shape.type ? (cancelAnimationFrame(t.checkAnimFrame), 
                    t.img_error || (a.init(), a.draw())) : (a.init(), a.draw());
                }
            }, {
                key: "init",
                value: function() {
                    var e = this.library, t = e.manager, a = e.vendors, i = this.params.particles;
                    e.retinaInit(), e.canvasInit(), e.canvasSize(), t.particlesCreate(), a.densityAutoParticles(), 
                    i.line_linked.color_rgb_line = n.hexToRgb(i.line_linked.color);
                }
            }, {
                key: "start",
                value: function() {
                    var e = this.library, t = e.tmp, a = e.vendors, i = this.params.particles;
                    if ("image" == i.shape.type) {
                        var r = void 0;
                        (r = /^data:image\/(\w{3})\+xml;base64,(.*)$/.exec(i.shape.image.src)) ? (t.img_type = r[1], 
                        i.shape.image.data = atob(r[2])) : (r = /^.*(\w{3})$/.exec(i.shape.image.src)) && (t.img_type = r[1]), 
                        a.loadImg(t.img_type, i.shape.image);
                    } else if ("images" == i.shape.type) {
                        var n = !0, s = !1, o = void 0;
                        try {
                            for (var c, l = i.shape.images[Symbol.iterator](); !(n = (c = l.next()).done); n = !0) {
                                var u = c.value, p = void 0;
                                (p = /^data:image\/(\w{3})\+xml;base64,(.*)$/.exec(u.src)) ? (t.img_type = p[1], 
                                u.data = atob(p[2])) : (p = /^.*(\w{3})$/.exec(u.src)) && (t.img_type = p[1]), a.loadImg(t.img_type, u);
                            }
                        } catch (e) {
                            s = !0, o = e;
                        } finally {
                            try {
                                !n && l.return && l.return();
                            } finally {
                                if (s) throw o;
                            }
                        }
                    } else a.checkBeforeDraw();
                }
            } ]), e;
        }();
        t.default = s;
    }, function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getDefaultParams = function() {
            return {
                particles: {
                    number: {
                        value: 40,
                        density: {
                            enable: !1,
                            value_area: 1200
                        }
                    },
                    color: {
                        value: "#FFF"
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#000000"
                        },
                        polygon: {
                            nb_sides: 5
                        },
                        image: {
                            src: "",
                            data: null,
                            width: 100,
                            height: 100
                        },
                        images: []
                    },
                    opacity: {
                        value: .5,
                        random: !1,
                        anim: {
                            enable: !0,
                            speed: 1,
                            opacity_min: .1,
                            sync: !1
                        }
                    },
                    size: {
                        value: 1,
                        random: !1,
                        anim: {
                            enable: !1,
                            speed: 40,
                            size_min: 0,
                            sync: !1
                        }
                    },
                    line_linked: {
                        enable: !0,
                        distance: 150,
                        color: "#FFF",
                        opacity: .6,
                        width: 1,
                        shadow: {
                            enable: !1,
                            blur: 5,
                            color: "lime"
                        }
                    },
                    move: {
                        enable: !0,
                        speed: 3,
                        direction: "none",
                        random: !1,
                        straight: !1,
                        out_mode: "bounce",
                        bounce: !0,
                        attract: {
                            enable: !1,
                            rotateX: 3e3,
                            rotateY: 3e3
                        }
                    },
                    array: []
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: !1,
                            mode: "grab"
                        },
                        onclick: {
                            enable: !1,
                            mode: "repulse"
                        },
                        resize: !0
                    },
                    modes: {
                        grab: {
                            distance: 180,
                            line_linked: {
                                opacity: .35
                            }
                        },
                        bubble: {
                            distance: 200,
                            size: 80,
                            duration: .4
                        },
                        repulse: {
                            distance: 100,
                            duration: 5
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    },
                    mouse: {}
                },
                retina_detect: !0,
                fps_limit: 60
            };
        };
    }, function(e, t, a) {
        "use strict";
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.hexToRgb = function(e) {
            var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            e = e.replace(t, function(e, t, a, i) {
                return t + t + a + a + i + i;
            });
            var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return a ? {
                r: parseInt(a[1], 16),
                g: parseInt(a[2], 16),
                b: parseInt(a[3], 16)
            } : null;
        }, t.clamp = function(e, t, a) {
            return Math.min(Math.max(e, t), a);
        }, t.isInArray = function(e, t) {
            return t.indexOf(e) > -1;
        }, t.deepExtend = function(e, a) {
            for (var i in a) a[i] && a[i].constructor && a[i].constructor === Object ? (e[i] = e[i] || {}, 
            t.deepExtend(e[i], a[i])) : e[i] = a[i];
            return e;
        }, t.getColor = function(e) {
            var a = {};
            if ("object" == (void 0 === e ? "undefined" : i(e))) if (e instanceof Array) {
                var r = e[Math.floor(Math.random() * e.length)];
                a.rgb = t.hexToRgb(r);
            } else {
                var n = e.r, s = e.g, o = e.b;
                if (void 0 !== n && void 0 !== s && void 0 !== o) a.rgb = {
                    r: n,
                    g: s,
                    b: o
                }; else {
                    var c = e.h, l = e.s, u = e.l;
                    void 0 !== c && void 0 !== s && void 0 !== o && (a.hsl = {
                        h: c,
                        s: l,
                        l: u
                    });
                }
            } else "random" == e ? a.rgb = {
                r: Math.floor(255 * Math.random()) + 1,
                g: Math.floor(255 * Math.random()) + 1,
                b: Math.floor(255 * Math.random()) + 1
            } : "string" == typeof e && (a.rgb = t.hexToRgb(e));
            return a;
        };
    } ]);
});

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_10edf27d814a728d21af ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_10edf27d814a728d21af */ "dll-reference dll_10edf27d814a728d21af"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/work.js":
/*!***********************!*\
  !*** ./pages/work.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Work; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _styles_work_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/work.scss */ "./styles/work.scss");
/* harmony import */ var _styles_work_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_work_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/tylerlangties/projects/portfolio-final/pages/work.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var MailIcon = function MailIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "currentColor",
    d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z",
    __self: this
  }));
};

MailIcon.defaultProps = {
  'data-prefix': "fas",
  'data-icon': "envelope",
  className: "mail-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
};


var Work =
/*#__PURE__*/
function (_Component) {
  _inherits(Work, _Component);

  function Work() {
    _classCallCheck(this, Work);

    return _possibleConstructorReturn(this, _getPrototypeOf(Work).apply(this, arguments));
  }

  _createClass(Work, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "work-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "page-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "Work"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rich-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "proj-1",
        src: "../static/proj-imgone.jpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "proj-2",
        src: "../static/proj-imgtwo.jpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "proj-3",
        src: "../static/proj-imgthree.jpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "proj-4",
        src: "../static/proj-imgfour.jpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "mailto:tylerlangties@gmail.com?Subject=Hello,%20Tyler!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Get in touch"))))));
    }
  }]);

  return Work;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/work")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 14:
/*!*****************************!*\
  !*** multi ./pages/work.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/work', function() {
module.exports = __webpack_require__(/*! ./pages/work.js */"./pages/work.js");

return { page: module.exports.default }});

/***/ }),

/***/ "dll-reference dll_10edf27d814a728d21af":
/*!*******************************************!*\
  !*** external "dll_10edf27d814a728d21af" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_10edf27d814a728d21af;

/***/ })

},[[14,"static/runtime/webpack.js","styles"]]]));;
//# sourceMappingURL=work.js.map