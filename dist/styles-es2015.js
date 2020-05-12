(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\r\n\r\n/**\r\n * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.\r\n * This file is licensed under the terms of the MIT License (see LICENSE.md).\r\n */\r\n\r\n:root {\r\n  --ck-sample-base-spacing: 2em;\r\n  --ck-sample-color-white: #fff;\r\n  --ck-sample-color-green: #279863;\r\n  --ck-sample-container-width: 1285px;\r\n  --ck-sample-sidebar-width: 290px;\r\n  --ck-sample-editor-min-height: 200px;\r\n}\r\n\r\nbody, html {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: sans-serif, Arial, Verdana, \"Trebuchet MS\", \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n  font-size: 16px;\r\n  line-height: 1.5;\r\n}\r\n\r\nbody {\r\n  height: 100%;\r\n  color: #2D3A4A;\r\n}\r\n\r\nbody * {\r\n  box-sizing: border-box;\r\n}\r\n\r\na {\r\n  color: #38A5EE;\r\n}\r\n\r\n.ck-heading-dropdown {\r\n    width: 105px !important;\r\n}\r\n\r\n/* --------- STYLES TO DISPLAY THE EDITOR BEFORE LOAD ---------------------------------------------------------------------------- */\r\n\r\n.row-editor>ckeditor>div:first-child {\r\n  border: 1px solid hsl(0, 0%, 70%);\r\n}\r\n\r\n.row-editor>ckeditor>div:first-child,\r\n.row-editor>ckeditor {\r\n  background: #fff;\r\n  width: 100%;\r\n  min-height: var(--ck-sample-editor-min-height);\r\n}\r\n\r\n.ck.ck-editor {\r\n  /* Because of sidebar `position: relative`, Edge is overriding the outline of a focused editor. */\r\n  position: relative;\r\n  z-index: 10;\r\n}\r\n\r\n.row-editor .image.image-style-side {\r\n  float: right;\r\n  width: 50%;\r\n}\r\n\r\n.row-editor .image img {\r\n  width: 100%;\r\n  max-width: 100%;\r\n}\r\n\r\n.centered {\r\n  /* Hide overlapping comments. */\r\n  overflow: hidden;\r\n  max-width: var(--ck-sample-container-width);\r\n  margin: 0 auto;\r\n  padding: 0 var(--ck-sample-base-spacing);\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  position: relative;\r\n}\r\n\r\n.sidebar {\r\n\tpadding: 0 10px;\r\n\tposition: relative;\r\n\tmin-width: var(--ck-sample-sidebar-width);\r\n\tfont-size: 20px;\r\n\tbackground: hsl(0, 0%, 98%);\r\n\tborder: 1px solid hsl(0, 0%, 77%);\r\n\tborder-left: 0;\r\n\tborder-top: 0;\r\n\toverflow: hidden;\r\n\tmin-height: 100%;\r\n\r\n\t/* #2733. Do not overlap the left border if the sidebar is longer than content. */\r\n\tbox-shadow: -1px 0 0 0 hsl(0, 0%, 77%);\r\n}\r\n\r\n.sidebar.narrow {\r\n\tmin-width: 60px;\r\n}\r\n\r\n.sidebar.hidden {\r\n\tdisplay: none;\r\n}\r\n\r\n.row-presence {\r\n\twidth: 100%;\r\n\tborder: 1px solid hsl(0, 0%, 77%);\r\n\tborder-bottom: 0;\r\n\tbackground: hsl(0, 0%, 98%);\r\n\tpadding: var(--ck-spacing-small);\r\n\r\n\t/* Make `border-bottom` as `box-shadow` to not overlap with the editor border. */\r\n\tbox-shadow: 0 1px 0 0 hsl(0, 0%, 77%);\r\n\r\n\t/* Make `z-index` bigger than `.editor` to properly display tooltips. */\r\n\tz-index: 20;\r\n}\r\n\r\n.presence .ck.ck-presence-list__counter {\r\n\torder: 2;\r\n\tmargin-left: var(--ck-spacing-large)\r\n}\r\n\r\n.row-editor>div:first-child,\r\n/* Classic demo. */\r\n\r\nmain .ck-editor[role='application'] .ck.ck-content {\r\n  background: #fff;\r\n  font-size: 1em;\r\n  line-height: 1.6em;\r\n  min-height: var(--ck-sample-editor-min-height);\r\n  padding: 1.5em 2em;\r\n}\r\n\r\n/* --------- SAMPLE GENERIC STYLES ---------------------------------------------------------------------------- */\r\n\r\nheader .centered {\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  min-height: 8em;\r\n}\r\n\r\nheader h1 a {\r\n  font-size: 20px;\r\n  display: flex;\r\n  align-items: center;\r\n  color: #2D3A4A;\r\n  text-decoration: none;\r\n}\r\n\r\nheader h1 img {\r\n  display: block;\r\n  height: 64px;\r\n}\r\n\r\nheader nav ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style-type: none;\r\n}\r\n\r\nheader nav ul li {\r\n  display: inline-block;\r\n}\r\n\r\nheader nav ul li+li {\r\n  margin-left: 1em;\r\n}\r\n\r\nheader nav ul li a {\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n  color: #2D3A4A;\r\n}\r\n\r\nheader nav ul li a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\nmain .message {\r\n  padding: 0 0 var(--ck-sample-base-spacing);\r\n  background: var(--ck-sample-color-green);\r\n  color: var(--ck-sample-color-white);\r\n}\r\n\r\nmain .message::after {\r\n  content: \"\";\r\n  z-index: -1;\r\n  display: block;\r\n  height: 10em;\r\n  width: 100%;\r\n  background: var(--ck-sample-color-green);\r\n  position: absolute;\r\n  left: 0;\r\n}\r\n\r\nmain .message h1 {\r\n  position: relative;\r\n  padding-top: 1em;\r\n  font-size: 2em;\r\n}\r\n\r\nfooter {\r\n  margin: calc(2*var(--ck-sample-base-spacing)) var(--ck-sample-base-spacing);\r\n  font-size: .8em;\r\n  text-align: center;\r\n  color: rgba(0, 0, 0, .4);\r\n}\r\n\r\n/* --------- RWD ---------- */\r\n\r\n@media screen and ( max-width: 800px ) {\r\n\t:root {\r\n\t\t--ck-sample-base-spacing: 1em;\r\n\t}\r\n\r\n\theader h1 {\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\theader h1 img {\r\n\t\theight: 40px;\r\n\t}\r\n\r\n\theader nav ul {\r\n\t\ttext-align: right;\r\n\t}\r\n\r\n\tmain .message h2 {\r\n\t\tfont-size: 1.5em;\r\n\t}\r\n\r\n\tmain .row .ck.ck-editor__editable[ role='textbox' ] {\r\n\t\tpadding: 0.5em 1em 1em;\r\n\t}\r\n}\r\n", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Hp\Desktop\ckeditor\ckeditor5-collaboration-samples\real-time-collaboration-for-angular\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);