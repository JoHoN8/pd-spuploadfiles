(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("pd-spserverajax"), require("pd-sputil"));
	else if(typeof define === 'function' && define.amd)
		define(["pd-spserverajax", "pd-sputil"], factory);
	else if(typeof exports === 'object')
		exports["pdspuploadfiles"] = factory(require("pd-spserverajax"), require("pd-sputil"));
	else
		root["pdspuploadfiles"] = factory(root["pdspserverajax"], root["pdsputil"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var bind = __webpack_require__(2);
var isBuffer = __webpack_require__(16);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (_typeof(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(18);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(4);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(4);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {/* Ignore */}
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(19);
var buildURL = __webpack_require__(21);
var parseHeaders = __webpack_require__(22);
var isURLSameOrigin = __webpack_require__(23);
var createError = __webpack_require__(5);
var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__(24);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || request.readyState !== 4 && !xDomain) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(25);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(20);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["uploadFilesToLibrary"] = uploadFilesToLibrary;
/* harmony export (immutable) */ __webpack_exports__["uploadFilesToList"] = uploadFilesToList;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(9);
/**
    pd-spuploadfiles is a module to upload files into sharepoint. 
    *
    * The only files it will accept are from the file input of the dom (filelist). 
    * This module will upload as many files as you pass it.
    * The max file size support at this time is 2gb. If a user passes a file that is larger than 2gb the process promise will be rejected and the catch block will receive a object with a filesToBig property. The filesToBig property will contain an array of all file names that were to big. You are responsible for displaying the files to big message to the user. 
    *
    * This module depends on
    * 1. pd-spUtil
    * 2. pd-spserverajax
    * 3. axios
    *
    @module pdspuploadfiles
 */

/**
 * The index and itemData to process will be passed to this function
 * the order number is your id to locate elements (dom or whatever) based on the specific item processing
 * for creating a front end this is where to create the dom element to update with progress data
 *
 * @callback itemPreProcessing
 * @param {any} itemData
 * @param {number} index
 */
/**
 * The itemProgressProcessing will be passed the progress number and the index to trigger any side effects
 * Index is your id to locate elements (dom or whatever) based on the specific item processing
 * There is a small gap in time once the 100% is recieved and when the server sends the completed event (fyi)
 *
 * @callback itemProgressProcessing
 * @param {number} percentUploaded
 * @param {number} index
 */
/**
 * The processingCompletedCallback will be passed the order number and the process status (success or fail) to trigger any completed side effects
 * The order number is your id to locate elements (dom or whatever) based on the specific item processing
 * This is where you would pass the actions to show item completed uploading
 *
 * @callback itemCompletedProcessing
 * @param {string} status
 * @param {number} index
 */
/**
 * Uploads files to a SharePoint Library. 
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url 
 * @param {string} props.folder - folder to save file in, ex SharedDocuments/folder1
 * @param {filelist} props.files - files in the file input element to be uploaded
 * @param {itemPreProcessing} [props.itemCreatedCB] - this call back is called when an item is added to be processed
 * @param {itemProgressProcessing} [props.itemUploadProgressCB] - this call back is called when the progress event is fired
 * @param {itemCompletedProcessing} [props.itemCompletedCB] - this call back is called when item is completed
 */
function uploadFilesToLibrary(props) {

    props.type = __WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* library */];
    return Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["d" /* startUploadProcess */])(props);
}

/**
 * Uploads files to a list item. Will accept multiple items
 * @param {object} props 
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url 
 * @param {number[]} props.itemIds - array of item ids to upload files to 
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @param {filelist} props.files - files in the file input element to be uploaded
 * @param {itemPreProcessing} [props.itemCreatedCB] - this call back is called when an item is added to be processed
 * @param {itemProgressProcessing} [props.itemUploadProgressCB] - this call back is called when the progress event is fired
 * @param {itemCompletedProcessing} [props.itemCompletedCB] - this call back is called when item is completed
 */
function uploadFilesToList(props) {
    //only one item and one file
    //set up loop to handle multiple item ids
    if (!Array.isArray(props.itemIds)) {
        props.itemIds = [props.itemIds];
    }
    //check all numbers and setup results object
    if (!props.verified) {
        Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["c" /* listIdTypeChecker */])(props.itemIds);
        props.allResults = {};
        props.allResults.length = 0;
        props.verified = true;
    }

    props.type = __WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* list */];
    props.processingItem = props.processingItem >= 0 ? props.processingItem + 1 : 0;
    props.itemId = props.itemIds[props.processingItem];

    return Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["d" /* startUploadProcess */])(props).then(function (items) {
        props.allResults[props.itemId] = items;
        props.allResults.length++;

        if (props.allResults.length < props.itemIds.length) {
            return uploadFilesToList(props);
        }
        return props.allResults;
    });
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return library; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return list; });
/* harmony export (immutable) */ __webpack_exports__["c"] = listIdTypeChecker;
/* harmony export (immutable) */ __webpack_exports__["d"] = startUploadProcess;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pd_spserverajax__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pd_spserverajax___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pd_spserverajax__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pd_sputil__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pd_sputil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pd_sputil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pd_meteredrequestprocessor__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);





var invalidFileList = "files passed to function are not the correct datatype, the files property must be a instance of FileList";
var noUploadType = "a type must be specified to start the upload process";
var invalidListItemId = "list item ids must be a number";
var maxFileSize = 2147483648;
var library = 'library';
var list = 'list';
var uploadProperties = null;

function getFileBuffer(file) {
	return new Promise(function (resolve, reject) {
		var reader = new FileReader();
		reader.onloadend = function (e) {
			resolve(e.target.result);
		};
		reader.onerror = function (e) {
			reject(e.target.error);
		};
		reader.readAsArrayBuffer(file);
	});
}
function getUploadContext(props) {
	return Object(__WEBPACK_IMPORTED_MODULE_0_pd_spserverajax__["getContext"])(props).then(function (response) {
		return response.data.FormDigestValue;
	});
}
function createUploadObjects(files, uploadUrl, context) {
	var totalFiles = files.length,
	    toUpload = [],
	    filesToBig = [];

	for (var ii = 0; ii < totalFiles; ii++) {
		var singleFile = files.item(ii);

		if (singleFile.size > maxFileSize) {
			filesToBig.push(singleFile.name);
			continue;
		}
		toUpload.push({
			url: uploadUrl,
			file: singleFile,
			context: context
		});
	}
	return {
		toUpload: toUpload,
		filesToBig: filesToBig
	};
}
function uploadUrlBase(props) {
	var origin = props.origin || Object(__WEBPACK_IMPORTED_MODULE_1_pd_sputil__["getURLOrigin"])();
	return '' + origin + props.url + '/_api/web';
}
function createLibraryUrl(props) {
	var url = uploadUrlBase(props);
	return url + '/GetFolderByServerRelativeUrl(\'' + props.folder + '\')/Files/add(url=\'{fileName}\',overwrite=true)';
}
function createListUrl(props) {
	var url = uploadUrlBase(props);
	if (props.listGUID) {
		return url + '/lists(guid\'' + props.listGUID + '\')/items(' + props.itemId + ')/AttachmentFiles/add(FileName=\'{fileName}\')';
	} else {
		return url + '/lists/getbytitle(\'' + props.listTitle + '\')/items(' + props.itemId + ')/AttachmentFiles/add(FileName=\'{fileName}\')';
	}
}
function setupUpload(props) {
	if (props.type === library) {
		uploadProperties = {
			totalToUpload: 3,
			url: createLibraryUrl(props)
		};
	} else if (props.type === list) {
		uploadProperties = {
			totalToUpload: 1,
			url: createListUrl(props)
		};
	} else {
		throw new Error(noUploadType);
	}
}
function listIdTypeChecker(ids) {
	var allNumbers = true;

	ids.some(function (id) {
		if (typeof id !== 'number') {
			allNumbers = false;
			return true;
		}
	});

	if (!allNumbers) {
		throw new Error(invalidListItemId);
	}
}
function startUploadProcess(props) {
	if (!(props.files instanceof FileList)) {
		throw new Error(invalidFileList);
	}
	setupUpload(props);

	//get context
	return getUploadContext(props).then(function (ctx) {

		//create objects
		var itemsToProcess = createUploadObjects(props.files, uploadProperties.url, ctx),
		    processor = null;

		if (itemsToProcess.filesToBig.length > 0) {
			//user passed a file that was to big to be uploaded
			itemsToProcess.toUpload = null;
			Promise.reject({
				filesToBig: itemsToProcess.filesToBig
			});
		}
		processor = new __WEBPACK_IMPORTED_MODULE_2_pd_meteredrequestprocessor__["a" /* MeteredRequestProcessor */]();

		processor.changeConcurrentProcessing(uploadProperties.totalToUpload);

		processor.setPreProcessingCB(function (itemData, index) {

			var config = {
				method: 'POST',
				headers: null
			};
			if (props.itemCreatedCB) {
				props.itemCreatedCB(itemData, index);
			}
			return getFileBuffer(itemData.file).then(function (buffer) {
				config.url = itemData.url.replace("{fileName}", itemData.file.name);
				config.data = buffer;
				config.headers = {
					"accept": "application/json;odata=verbose",
					"X-RequestDigest": itemData.context,
					"content-length": buffer.byteLength
				};
				if (props.itemUploadProgressCB) {
					config.onUploadProgress = function (progressEvent) {
						var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
						props.itemUploadProgressCB(percentCompleted, index);
					};
				}
				return __WEBPACK_IMPORTED_MODULE_3_axios___default()(config);
			});
		});
		processor.setItemProcessedCB(props.itemCompletedCB);
		return processor.init(itemsToProcess.toUpload);
	});
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeteredRequestProcessor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(13);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * meteredRequestProcessor is a class that allows you to pass in multiple items to process
 * and controls how many requests will be sent to the server at a time
 * when all items are finished processing they will be passed to the .then of the init.
 */
var MeteredRequestProcessor = function () {
    function MeteredRequestProcessor() {
        _classCallCheck(this, MeteredRequestProcessor);

        this._processingItems = [];
        this._totalToProcess = 3;
    }

    _createClass(MeteredRequestProcessor, [{
        key: '_totalProcessingItems',
        value: function _totalProcessingItems() {
            var totalProcessing = 0;
            this._processingItems.forEach(function (item) {
                if (!item.completed) {
                    totalProcessing++;
                }
            });
            return totalProcessing;
        }
    }, {
        key: '_finshProcessor',
        value: function _finshProcessor() {

            this._mainResolve(this._processingItems);
        }
    }, {
        key: '_promiseDoneHelper',
        value: function _promiseDoneHelper(obj, data, status) {
            obj.response = data;
            obj.status = status;
            obj.completed = true;

            if (this._postProcessingCB) {
                this._postProcessingCB(obj.status, obj.place);
            }
        }
    }, {
        key: '_addToProcessor',
        value: function _addToProcessor(index, promise) {
            var _this = this;

            var obj = {
                place: index,
                completed: false,
                status: 'processing'
            };

            promise.then(function (data) {
                _this._promiseDoneHelper(obj, data, __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* completedSuccess */]);
                _this._postProcessing();
            }).catch(function (error) {
                _this._promiseDoneHelper(obj, error, __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* completedFail */]);
                _this._postProcessing();
            });
            this._processingItems.push(obj);
        }
    }, {
        key: '_preProcessing',
        value: function _preProcessing() {
            //this function needs to be recursive, and keep totalToProcess in the array
            //check length of processing items if total to process then stop
            var totalProcessing = this._totalProcessingItems();

            if (this.addedItems.length === 0 || totalProcessing === this._totalToProcess) {
                //items are not done processing but there is no more to add or
                //processing array has compacity so just get out
                return;
            }
            //if not call addToProcessingCallBack, store in var and tack on a then
            var nextAvailableIndex = this._processingItems.length,
                nextItemToProcess = this.addedItems.shift(),
                cbProcessed = this._toProcessingCB(nextItemToProcess, nextAvailableIndex);

            if (!(cbProcessed instanceof Promise)) {
                //function passed in by user is not setup correctly, it must return a promise
                throw new Error(__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* incorrectAddToProcessingReturnType */]);
            }
            //create object and add to processing array
            this._addToProcessor(nextAvailableIndex, cbProcessed);
            this._preProcessing();
        }
    }, {
        key: '_postProcessing',
        value: function _postProcessing() {
            //check if this is last call if yes then finish process
            var totalProcessing = this._totalProcessingItems();
            if (totalProcessing === 0 && this.addedItems.length === 0) {
                //process finished call finishing function and get out
                this._finshProcessor();
                return;
            }
            //else call preProcessing
            this._preProcessing();
        }
    }, {
        key: '_toProcessingCB',
        value: function _toProcessingCB() {
            throw new Error(__WEBPACK_IMPORTED_MODULE_0__constants__["e" /* noPreProcssorCB */]);
        }
        /**
         * Sets the callback that will be called when an item is finished processing
         * @param {itemCompleted} cb 
         * @returns {void}
         */

    }, {
        key: 'setItemProcessedCB',
        value: function setItemProcessedCB(cb) {
            /**
             * The processingCompletedCallback will be passed the order number and the process status (success or fail) to trigger any completed side effects
             * The order number is your id to locate elements (dom or whatever) based on the specific item processing
             *
             * @callback itemCompleted
             * @param {string} status
             * @param {number} index
             */
            this._postProcessingCB = cb;
        }
        /**
         * Sets the callback that will be called to add items to be processed
         * 
         * @param {preProcessor} cb
         * @returns {promise} 
         */

    }, {
        key: 'setPreProcessingCB',
        value: function setPreProcessingCB(cb) {
            /**
             * The index and itemData to process will be passed to this function
             * it MUST return a native promise.
             * the order number is your id to locate elements (dom or whatever) based on the specific item processing
             *
             * @callback preProcessor
             * @param {*} itemData
             * @param {number} index
             */
            this._toProcessingCB = cb;
        }
        /**
         * Allows you to change the total amount of simultaneous items to be procesed. 
         * @param {number} count 
         */

    }, {
        key: 'changeConcurrentProcessing',
        value: function changeConcurrentProcessing(count) {
            this._totalToProcess = count;
        }
        /**
         * Starts the processing process.
         * ItemsToProcess is an array of anything you want, but each item in this array
         * Returns a native promise to .then off of, no need to catch, all item (success or fail) will be processed and passed to the .then
         * the items passed to the .then will be and array of objects with the following structure
         *  {
         *      place: number,
         *      completed: boolean,
         *      status: string (success or fail)
         *      response: the data returned from the server
         *  }
         * @param {array} itemsToProcess 
         * @returns {promise}
         */

    }, {
        key: 'init',
        value: function init(itemsToProcess) {
            var _this2 = this;

            if (!Array.isArray(itemsToProcess)) {
                throw new Error(__WEBPACK_IMPORTED_MODULE_0__constants__["d" /* incorrectDataTypeForItems */]);
            }
            this.addedItems = itemsToProcess;

            return new Promise(function (resolve, reject) {
                _this2._mainResolve = resolve;
                _this2._mainReject = reject;

                _this2._preProcessing();
            });
        }
    }]);

    return MeteredRequestProcessor;
}();

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return incorrectAddToProcessingReturnType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return completedSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return completedFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return noPreProcssorCB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return incorrectDataTypeForItems; });
var incorrectAddToProcessingReturnType = "The addToProcessingCallback you passed is not returning the correct data type. The function must return a native Promise";
var completedSuccess = "success";
var completedFail = "fail";
var noPreProcssorCB = "A callback must be provided to process the items and should return a native promise.";
var incorrectDataTypeForItems = "The data type passed to init must be an array.";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(2);
var Axios = __webpack_require__(17);
var defaults = __webpack_require__(1);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(7);
axios.CancelToken = __webpack_require__(31);
axios.isCancel = __webpack_require__(6);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(32);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
};

function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(1);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(26);
var dispatchRequest = __webpack_require__(27);
var isAbsoluteURL = __webpack_require__(29);
var combineURLs = __webpack_require__(30);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(5);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */
  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);

  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */
  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :

// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error();
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
  // initialize result and counter
  var block, charCode, idx = 0, map = chars;
  // if the next str index does not exist:
  //   change the mapping table to "="
  //   check if d has no fractional digits
  str.charAt(idx | 0) || (map = '=', idx % 1);
  // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
  output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },

    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },

    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() :

// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(28);
var isCancel = __webpack_require__(6);
var defaults = __webpack_require__(1);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(config.data, config.headers, config.transformRequest);

  // Flatten headers
  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(response.data, response.headers, config.transformResponse);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
  );
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(7);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlNzJiNzZkM2JlMDcxMjI4MGVhMyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwicGQtc3BzZXJ2ZXJhamF4XCIsXCJjb21tb25qczJcIjpcInBkLXNwc2VydmVyYWpheFwiLFwiYW1kXCI6XCJwZC1zcHNlcnZlcmFqYXhcIixcInJvb3RcIjpcInBkc3BzZXJ2ZXJhamF4XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwicGQtc3B1dGlsXCIsXCJjb21tb25qczJcIjpcInBkLXNwdXRpbFwiLFwiYW1kXCI6XCJwZC1zcHV0aWxcIixcInJvb3RcIjpcInBkc3B1dGlsXCJ9Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wZC1tZXRlcmVkcmVxdWVzdHByb2Nlc3Nvci9zcmMvbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGQtbWV0ZXJlZHJlcXVlc3Rwcm9jZXNzb3Ivc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiXSwibmFtZXMiOlsiYmluZCIsInJlcXVpcmUiLCJpc0J1ZmZlciIsInRvU3RyaW5nIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaXNBcnJheSIsInZhbCIsImNhbGwiLCJpc0FycmF5QnVmZmVyIiwiaXNGb3JtRGF0YSIsIkZvcm1EYXRhIiwiaXNBcnJheUJ1ZmZlclZpZXciLCJyZXN1bHQiLCJBcnJheUJ1ZmZlciIsImlzVmlldyIsImJ1ZmZlciIsImlzU3RyaW5nIiwiaXNOdW1iZXIiLCJpc1VuZGVmaW5lZCIsImlzT2JqZWN0IiwiaXNEYXRlIiwiaXNGaWxlIiwiaXNCbG9iIiwiaXNGdW5jdGlvbiIsImlzU3RyZWFtIiwicGlwZSIsImlzVVJMU2VhcmNoUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwidHJpbSIsInN0ciIsInJlcGxhY2UiLCJpc1N0YW5kYXJkQnJvd3NlckVudiIsIm5hdmlnYXRvciIsInByb2R1Y3QiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImZvckVhY2giLCJvYmoiLCJmbiIsImkiLCJsIiwibGVuZ3RoIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJtZXJnZSIsImFzc2lnblZhbHVlIiwiYXJndW1lbnRzIiwiZXh0ZW5kIiwiYSIsImIiLCJ0aGlzQXJnIiwibW9kdWxlIiwiZXhwb3J0cyIsInV0aWxzIiwibm9ybWFsaXplSGVhZGVyTmFtZSIsIkRFRkFVTFRfQ09OVEVOVF9UWVBFIiwic2V0Q29udGVudFR5cGVJZlVuc2V0IiwiaGVhZGVycyIsInZhbHVlIiwiZ2V0RGVmYXVsdEFkYXB0ZXIiLCJhZGFwdGVyIiwiWE1MSHR0cFJlcXVlc3QiLCJwcm9jZXNzIiwiZGVmYXVsdHMiLCJ0cmFuc2Zvcm1SZXF1ZXN0IiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0cmFuc2Zvcm1SZXNwb25zZSIsInBhcnNlIiwiZSIsInRpbWVvdXQiLCJ4c3JmQ29va2llTmFtZSIsInhzcmZIZWFkZXJOYW1lIiwibWF4Q29udGVudExlbmd0aCIsInZhbGlkYXRlU3RhdHVzIiwic3RhdHVzIiwiY29tbW9uIiwiZm9yRWFjaE1ldGhvZE5vRGF0YSIsIm1ldGhvZCIsImZvckVhY2hNZXRob2RXaXRoRGF0YSIsIndyYXAiLCJhcmdzIiwiQXJyYXkiLCJhcHBseSIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiRXJyb3IiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImNvbmNhdCIsImRyYWluUXVldWUiLCJsZW4iLCJydW4iLCJuZXh0VGljayIsInB1c2giLCJJdGVtIiwiYXJyYXkiLCJ0aXRsZSIsImJyb3dzZXIiLCJlbnYiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwibm9vcCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsIm5hbWUiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsInNldHRsZSIsImJ1aWxkVVJMIiwicGFyc2VIZWFkZXJzIiwiaXNVUkxTYW1lT3JpZ2luIiwiY3JlYXRlRXJyb3IiLCJidG9hIiwieGhyQWRhcHRlciIsImNvbmZpZyIsIlByb21pc2UiLCJkaXNwYXRjaFhoclJlcXVlc3QiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdERhdGEiLCJyZXF1ZXN0SGVhZGVycyIsInJlcXVlc3QiLCJsb2FkRXZlbnQiLCJ4RG9tYWluIiwiTk9ERV9FTlYiLCJYRG9tYWluUmVxdWVzdCIsInVybCIsIm9ucHJvZ3Jlc3MiLCJoYW5kbGVQcm9ncmVzcyIsIm9udGltZW91dCIsImhhbmRsZVRpbWVvdXQiLCJhdXRoIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIkF1dGhvcml6YXRpb24iLCJvcGVuIiwidG9VcHBlckNhc2UiLCJwYXJhbXMiLCJwYXJhbXNTZXJpYWxpemVyIiwiaGFuZGxlTG9hZCIsInJlYWR5U3RhdGUiLCJyZXNwb25zZVVSTCIsImluZGV4T2YiLCJyZXNwb25zZUhlYWRlcnMiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJyZXNwb25zZURhdGEiLCJyZXNwb25zZVR5cGUiLCJyZXNwb25zZVRleHQiLCJyZXNwb25zZSIsInN0YXR1c1RleHQiLCJvbmVycm9yIiwiaGFuZGxlRXJyb3IiLCJjb29raWVzIiwieHNyZlZhbHVlIiwid2l0aENyZWRlbnRpYWxzIiwicmVhZCIsInVuZGVmaW5lZCIsInNldFJlcXVlc3RIZWFkZXIiLCJ0b0xvd2VyQ2FzZSIsIm9uRG93bmxvYWRQcm9ncmVzcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvblVwbG9hZFByb2dyZXNzIiwidXBsb2FkIiwiY2FuY2VsVG9rZW4iLCJwcm9taXNlIiwidGhlbiIsIm9uQ2FuY2VsZWQiLCJjYW5jZWwiLCJhYm9ydCIsInNlbmQiLCJlbmhhbmNlRXJyb3IiLCJtZXNzYWdlIiwiY29kZSIsImVycm9yIiwiaXNDYW5jZWwiLCJfX0NBTkNFTF9fIiwiQ2FuY2VsIiwidXBsb2FkRmlsZXNUb0xpYnJhcnkiLCJwcm9wcyIsInR5cGUiLCJzdGFydFVwbG9hZFByb2Nlc3MiLCJ1cGxvYWRGaWxlc1RvTGlzdCIsIml0ZW1JZHMiLCJ2ZXJpZmllZCIsImxpc3RJZFR5cGVDaGVja2VyIiwiYWxsUmVzdWx0cyIsInByb2Nlc3NpbmdJdGVtIiwiaXRlbUlkIiwiaXRlbXMiLCJpbnZhbGlkRmlsZUxpc3QiLCJub1VwbG9hZFR5cGUiLCJpbnZhbGlkTGlzdEl0ZW1JZCIsIm1heEZpbGVTaXplIiwibGlicmFyeSIsImxpc3QiLCJ1cGxvYWRQcm9wZXJ0aWVzIiwiZ2V0RmlsZUJ1ZmZlciIsImZpbGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwidGFyZ2V0IiwicmVhZEFzQXJyYXlCdWZmZXIiLCJnZXRVcGxvYWRDb250ZXh0IiwiZ2V0Q29udGV4dCIsIkZvcm1EaWdlc3RWYWx1ZSIsImNyZWF0ZVVwbG9hZE9iamVjdHMiLCJmaWxlcyIsInVwbG9hZFVybCIsImNvbnRleHQiLCJ0b3RhbEZpbGVzIiwidG9VcGxvYWQiLCJmaWxlc1RvQmlnIiwiaWkiLCJzaW5nbGVGaWxlIiwiaXRlbSIsInNpemUiLCJ1cGxvYWRVcmxCYXNlIiwib3JpZ2luIiwiZ2V0VVJMT3JpZ2luIiwiY3JlYXRlTGlicmFyeVVybCIsImZvbGRlciIsImNyZWF0ZUxpc3RVcmwiLCJsaXN0R1VJRCIsImxpc3RUaXRsZSIsInNldHVwVXBsb2FkIiwidG90YWxUb1VwbG9hZCIsImlkcyIsImFsbE51bWJlcnMiLCJzb21lIiwiaWQiLCJGaWxlTGlzdCIsIml0ZW1zVG9Qcm9jZXNzIiwiY3R4IiwicHJvY2Vzc29yIiwiY2hhbmdlQ29uY3VycmVudFByb2Nlc3NpbmciLCJzZXRQcmVQcm9jZXNzaW5nQ0IiLCJpdGVtRGF0YSIsImluZGV4IiwiaXRlbUNyZWF0ZWRDQiIsImJ5dGVMZW5ndGgiLCJpdGVtVXBsb2FkUHJvZ3Jlc3NDQiIsInByb2dyZXNzRXZlbnQiLCJwZXJjZW50Q29tcGxldGVkIiwiTWF0aCIsInJvdW5kIiwibG9hZGVkIiwidG90YWwiLCJheGlvcyIsInNldEl0ZW1Qcm9jZXNzZWRDQiIsIml0ZW1Db21wbGV0ZWRDQiIsImluaXQiLCJNZXRlcmVkUmVxdWVzdFByb2Nlc3NvciIsIl9wcm9jZXNzaW5nSXRlbXMiLCJfdG90YWxUb1Byb2Nlc3MiLCJ0b3RhbFByb2Nlc3NpbmciLCJjb21wbGV0ZWQiLCJfbWFpblJlc29sdmUiLCJfcG9zdFByb2Nlc3NpbmdDQiIsInBsYWNlIiwiX3Byb21pc2VEb25lSGVscGVyIiwiX3Bvc3RQcm9jZXNzaW5nIiwiY2F0Y2giLCJfdG90YWxQcm9jZXNzaW5nSXRlbXMiLCJhZGRlZEl0ZW1zIiwibmV4dEF2YWlsYWJsZUluZGV4IiwibmV4dEl0ZW1Ub1Byb2Nlc3MiLCJzaGlmdCIsImNiUHJvY2Vzc2VkIiwiX3RvUHJvY2Vzc2luZ0NCIiwiX2FkZFRvUHJvY2Vzc29yIiwiX3ByZVByb2Nlc3NpbmciLCJfZmluc2hQcm9jZXNzb3IiLCJjYiIsImNvdW50IiwiX21haW5SZWplY3QiLCJpbmNvcnJlY3RBZGRUb1Byb2Nlc3NpbmdSZXR1cm5UeXBlIiwiY29tcGxldGVkU3VjY2VzcyIsImNvbXBsZXRlZEZhaWwiLCJub1ByZVByb2Nzc29yQ0IiLCJpbmNvcnJlY3REYXRhVHlwZUZvckl0ZW1zIiwiQXhpb3MiLCJjcmVhdGVJbnN0YW5jZSIsImRlZmF1bHRDb25maWciLCJpbnN0YW5jZSIsImNyZWF0ZSIsImluc3RhbmNlQ29uZmlnIiwiQ2FuY2VsVG9rZW4iLCJhbGwiLCJwcm9taXNlcyIsInNwcmVhZCIsImRlZmF1bHQiLCJpc1Nsb3dCdWZmZXIiLCJfaXNCdWZmZXIiLCJjb25zdHJ1Y3RvciIsInJlYWRGbG9hdExFIiwic2xpY2UiLCJJbnRlcmNlcHRvck1hbmFnZXIiLCJkaXNwYXRjaFJlcXVlc3QiLCJpc0Fic29sdXRlVVJMIiwiY29tYmluZVVSTHMiLCJpbnRlcmNlcHRvcnMiLCJiYXNlVVJMIiwiY2hhaW4iLCJ1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyIsImludGVyY2VwdG9yIiwidW5zaGlmdCIsImZ1bGZpbGxlZCIsInJlamVjdGVkIiwicHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzIiwibm9ybWFsaXplZE5hbWUiLCJwcm9jZXNzSGVhZGVyIiwiZW5jb2RlIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VyaWFsaXplZFBhcmFtcyIsInBhcnRzIiwic2VyaWFsaXplIiwicGFyc2VWYWx1ZSIsInYiLCJ0b0lTT1N0cmluZyIsImpvaW4iLCJwYXJzZWQiLCJzcGxpdCIsInBhcnNlciIsImxpbmUiLCJzdWJzdHIiLCJzdGFuZGFyZEJyb3dzZXJFbnYiLCJtc2llIiwidGVzdCIsInVzZXJBZ2VudCIsInVybFBhcnNpbmdOb2RlIiwiY3JlYXRlRWxlbWVudCIsIm9yaWdpblVSTCIsInJlc29sdmVVUkwiLCJocmVmIiwic2V0QXR0cmlidXRlIiwicHJvdG9jb2wiLCJob3N0Iiwic2VhcmNoIiwiaGFzaCIsImhvc3RuYW1lIiwicG9ydCIsInBhdGhuYW1lIiwiY2hhckF0IiwibG9jYXRpb24iLCJyZXF1ZXN0VVJMIiwibm9uU3RhbmRhcmRCcm93c2VyRW52IiwiY2hhcnMiLCJFIiwiaW5wdXQiLCJTdHJpbmciLCJvdXRwdXQiLCJibG9jayIsImNoYXJDb2RlIiwiaWR4IiwibWFwIiwiY2hhckNvZGVBdCIsIndyaXRlIiwiZXhwaXJlcyIsInBhdGgiLCJkb21haW4iLCJzZWN1cmUiLCJjb29raWUiLCJEYXRlIiwidG9HTVRTdHJpbmciLCJtYXRjaCIsIlJlZ0V4cCIsImRlY29kZVVSSUNvbXBvbmVudCIsInJlbW92ZSIsIm5vdyIsImhhbmRsZXJzIiwidXNlIiwiZWplY3QiLCJmb3JFYWNoSGFuZGxlciIsImgiLCJ0cmFuc2Zvcm1EYXRhIiwidGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZCIsInRocm93SWZSZXF1ZXN0ZWQiLCJjbGVhbkhlYWRlckNvbmZpZyIsIm9uQWRhcHRlclJlc29sdXRpb24iLCJvbkFkYXB0ZXJSZWplY3Rpb24iLCJyZWFzb24iLCJmbnMiLCJ0cmFuc2Zvcm0iLCJyZWxhdGl2ZVVSTCIsImV4ZWN1dG9yIiwiVHlwZUVycm9yIiwicmVzb2x2ZVByb21pc2UiLCJwcm9taXNlRXhlY3V0b3IiLCJ0b2tlbiIsInNvdXJjZSIsImMiLCJjYWxsYmFjayIsImFyciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7Ozs7QUFFQSxJQUFJQSxPQUFPLG1CQUFBQyxDQUFRLENBQVIsQ0FBWDtBQUNBLElBQUlDLFdBQVcsbUJBQUFELENBQVEsRUFBUixDQUFmOztBQUVBOztBQUVBOztBQUVBLElBQUlFLFdBQVdDLE9BQU9DLFNBQVAsQ0FBaUJGLFFBQWhDOztBQUVBOzs7Ozs7QUFNQSxTQUFTRyxPQUFULENBQWlCQyxHQUFqQixFQUFzQjtBQUNwQixTQUFPSixTQUFTSyxJQUFULENBQWNELEdBQWQsTUFBdUIsZ0JBQTlCO0FBQ0Q7O0FBRUQ7Ozs7OztBQU1BLFNBQVNFLGFBQVQsQ0FBdUJGLEdBQXZCLEVBQTRCO0FBQzFCLFNBQU9KLFNBQVNLLElBQVQsQ0FBY0QsR0FBZCxNQUF1QixzQkFBOUI7QUFDRDs7QUFFRDs7Ozs7O0FBTUEsU0FBU0csVUFBVCxDQUFvQkgsR0FBcEIsRUFBeUI7QUFDdkIsU0FBUSxPQUFPSSxRQUFQLEtBQW9CLFdBQXJCLElBQXNDSixlQUFlSSxRQUE1RDtBQUNEOztBQUVEOzs7Ozs7QUFNQSxTQUFTQyxpQkFBVCxDQUEyQkwsR0FBM0IsRUFBZ0M7QUFDOUIsTUFBSU0sTUFBSjtBQUNBLE1BQUssT0FBT0MsV0FBUCxLQUF1QixXQUF4QixJQUF5Q0EsWUFBWUMsTUFBekQsRUFBa0U7QUFDaEVGLGFBQVNDLFlBQVlDLE1BQVosQ0FBbUJSLEdBQW5CLENBQVQ7QUFDRCxHQUZELE1BRU87QUFDTE0sYUFBVU4sR0FBRCxJQUFVQSxJQUFJUyxNQUFkLElBQTBCVCxJQUFJUyxNQUFKLFlBQXNCRixXQUF6RDtBQUNEO0FBQ0QsU0FBT0QsTUFBUDtBQUNEOztBQUVEOzs7Ozs7QUFNQSxTQUFTSSxRQUFULENBQWtCVixHQUFsQixFQUF1QjtBQUNyQixTQUFPLE9BQU9BLEdBQVAsS0FBZSxRQUF0QjtBQUNEOztBQUVEOzs7Ozs7QUFNQSxTQUFTVyxRQUFULENBQWtCWCxHQUFsQixFQUF1QjtBQUNyQixTQUFPLE9BQU9BLEdBQVAsS0FBZSxRQUF0QjtBQUNEOztBQUVEOzs7Ozs7QUFNQSxTQUFTWSxXQUFULENBQXFCWixHQUFyQixFQUEwQjtBQUN4QixTQUFPLE9BQU9BLEdBQVAsS0FBZSxXQUF0QjtBQUNEOztBQUVEOzs7Ozs7QUFNQSxTQUFTYSxRQUFULENBQWtCYixHQUFsQixFQUF1QjtBQUNyQixTQUFPQSxRQUFRLElBQVIsSUFBZ0IsUUFBT0EsR0FBUCx5Q0FBT0EsR0FBUCxPQUFlLFFBQXRDO0FBQ0Q7O0FBRUQ7Ozs7OztBQU1BLFNBQVNjLE1BQVQsQ0FBZ0JkLEdBQWhCLEVBQXFCO0FBQ25CLFNBQU9KLFNBQVNLLElBQVQsQ0FBY0QsR0FBZCxNQUF1QixlQUE5QjtBQUNEOztBQUVEOzs7Ozs7QUFNQSxTQUFTZSxNQUFULENBQWdCZixHQUFoQixFQUFxQjtBQUNuQixTQUFPSixTQUFTSyxJQUFULENBQWNELEdBQWQsTUFBdUIsZUFBOUI7QUFDRDs7QUFFRDs7Ozs7O0FBTUEsU0FBU2dCLE1BQVQsQ0FBZ0JoQixHQUFoQixFQUFxQjtBQUNuQixTQUFPSixTQUFTSyxJQUFULENBQWNELEdBQWQsTUFBdUIsZUFBOUI7QUFDRDs7QUFFRDs7Ozs7O0FBTUEsU0FBU2lCLFVBQVQsQ0FBb0JqQixHQUFwQixFQUF5QjtBQUN2QixTQUFPSixTQUFTSyxJQUFULENBQWNELEdBQWQsTUFBdUIsbUJBQTlCO0FBQ0Q7O0FBRUQ7Ozs7OztBQU1BLFNBQVNrQixRQUFULENBQWtCbEIsR0FBbEIsRUFBdUI7QUFDckIsU0FBT2EsU0FBU2IsR0FBVCxLQUFpQmlCLFdBQVdqQixJQUFJbUIsSUFBZixDQUF4QjtBQUNEOztBQUVEOzs7Ozs7QUFNQSxTQUFTQyxpQkFBVCxDQUEyQnBCLEdBQTNCLEVBQWdDO0FBQzlCLFNBQU8sT0FBT3FCLGVBQVAsS0FBMkIsV0FBM0IsSUFBMENyQixlQUFlcUIsZUFBaEU7QUFDRDs7QUFFRDs7Ozs7O0FBTUEsU0FBU0MsSUFBVCxDQUFjQyxHQUFkLEVBQW1CO0FBQ2pCLFNBQU9BLElBQUlDLE9BQUosQ0FBWSxNQUFaLEVBQW9CLEVBQXBCLEVBQXdCQSxPQUF4QixDQUFnQyxNQUFoQyxFQUF3QyxFQUF4QyxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7QUFhQSxTQUFTQyxvQkFBVCxHQUFnQztBQUM5QixNQUFJLE9BQU9DLFNBQVAsS0FBcUIsV0FBckIsSUFBb0NBLFVBQVVDLE9BQVYsS0FBc0IsYUFBOUQsRUFBNkU7QUFDM0UsV0FBTyxLQUFQO0FBQ0Q7QUFDRCxTQUNFLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEIsSUFDQSxPQUFPQyxRQUFQLEtBQW9CLFdBRnRCO0FBSUQ7O0FBRUQ7Ozs7Ozs7Ozs7OztBQVlBLFNBQVNDLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCQyxFQUF0QixFQUEwQjtBQUN4QjtBQUNBLE1BQUlELFFBQVEsSUFBUixJQUFnQixPQUFPQSxHQUFQLEtBQWUsV0FBbkMsRUFBZ0Q7QUFDOUM7QUFDRDs7QUFFRDtBQUNBLE1BQUksUUFBT0EsR0FBUCx5Q0FBT0EsR0FBUCxPQUFlLFFBQWYsSUFBMkIsQ0FBQ2hDLFFBQVFnQyxHQUFSLENBQWhDLEVBQThDO0FBQzVDO0FBQ0FBLFVBQU0sQ0FBQ0EsR0FBRCxDQUFOO0FBQ0Q7O0FBRUQsTUFBSWhDLFFBQVFnQyxHQUFSLENBQUosRUFBa0I7QUFDaEI7QUFDQSxTQUFLLElBQUlFLElBQUksQ0FBUixFQUFXQyxJQUFJSCxJQUFJSSxNQUF4QixFQUFnQ0YsSUFBSUMsQ0FBcEMsRUFBdUNELEdBQXZDLEVBQTRDO0FBQzFDRCxTQUFHL0IsSUFBSCxDQUFRLElBQVIsRUFBYzhCLElBQUlFLENBQUosQ0FBZCxFQUFzQkEsQ0FBdEIsRUFBeUJGLEdBQXpCO0FBQ0Q7QUFDRixHQUxELE1BS087QUFDTDtBQUNBLFNBQUssSUFBSUssR0FBVCxJQUFnQkwsR0FBaEIsRUFBcUI7QUFDbkIsVUFBSWxDLE9BQU9DLFNBQVAsQ0FBaUJ1QyxjQUFqQixDQUFnQ3BDLElBQWhDLENBQXFDOEIsR0FBckMsRUFBMENLLEdBQTFDLENBQUosRUFBb0Q7QUFDbERKLFdBQUcvQixJQUFILENBQVEsSUFBUixFQUFjOEIsSUFBSUssR0FBSixDQUFkLEVBQXdCQSxHQUF4QixFQUE2QkwsR0FBN0I7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsU0FBU08sS0FBVCxHQUFlLDJCQUE2QjtBQUMxQyxNQUFJaEMsU0FBUyxFQUFiO0FBQ0EsV0FBU2lDLFdBQVQsQ0FBcUJ2QyxHQUFyQixFQUEwQm9DLEdBQTFCLEVBQStCO0FBQzdCLFFBQUksUUFBTzlCLE9BQU84QixHQUFQLENBQVAsTUFBdUIsUUFBdkIsSUFBbUMsUUFBT3BDLEdBQVAseUNBQU9BLEdBQVAsT0FBZSxRQUF0RCxFQUFnRTtBQUM5RE0sYUFBTzhCLEdBQVAsSUFBY0UsTUFBTWhDLE9BQU84QixHQUFQLENBQU4sRUFBbUJwQyxHQUFuQixDQUFkO0FBQ0QsS0FGRCxNQUVPO0FBQ0xNLGFBQU84QixHQUFQLElBQWNwQyxHQUFkO0FBQ0Q7QUFDRjs7QUFFRCxPQUFLLElBQUlpQyxJQUFJLENBQVIsRUFBV0MsSUFBSU0sVUFBVUwsTUFBOUIsRUFBc0NGLElBQUlDLENBQTFDLEVBQTZDRCxHQUE3QyxFQUFrRDtBQUNoREgsWUFBUVUsVUFBVVAsQ0FBVixDQUFSLEVBQXNCTSxXQUF0QjtBQUNEO0FBQ0QsU0FBT2pDLE1BQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7QUFRQSxTQUFTbUMsTUFBVCxDQUFnQkMsQ0FBaEIsRUFBbUJDLENBQW5CLEVBQXNCQyxPQUF0QixFQUErQjtBQUM3QmQsVUFBUWEsQ0FBUixFQUFXLFNBQVNKLFdBQVQsQ0FBcUJ2QyxHQUFyQixFQUEwQm9DLEdBQTFCLEVBQStCO0FBQ3hDLFFBQUlRLFdBQVcsT0FBTzVDLEdBQVAsS0FBZSxVQUE5QixFQUEwQztBQUN4QzBDLFFBQUVOLEdBQUYsSUFBUzNDLEtBQUtPLEdBQUwsRUFBVTRDLE9BQVYsQ0FBVDtBQUNELEtBRkQsTUFFTztBQUNMRixRQUFFTixHQUFGLElBQVNwQyxHQUFUO0FBQ0Q7QUFDRixHQU5EO0FBT0EsU0FBTzBDLENBQVA7QUFDRDs7QUFFREcsT0FBT0MsT0FBUCxHQUFpQjtBQUNmL0MsV0FBU0EsT0FETTtBQUVmRyxpQkFBZUEsYUFGQTtBQUdmUCxZQUFVQSxRQUhLO0FBSWZRLGNBQVlBLFVBSkc7QUFLZkUscUJBQW1CQSxpQkFMSjtBQU1mSyxZQUFVQSxRQU5LO0FBT2ZDLFlBQVVBLFFBUEs7QUFRZkUsWUFBVUEsUUFSSztBQVNmRCxlQUFhQSxXQVRFO0FBVWZFLFVBQVFBLE1BVk87QUFXZkMsVUFBUUEsTUFYTztBQVlmQyxVQUFRQSxNQVpPO0FBYWZDLGNBQVlBLFVBYkc7QUFjZkMsWUFBVUEsUUFkSztBQWVmRSxxQkFBbUJBLGlCQWZKO0FBZ0JmSyx3QkFBc0JBLG9CQWhCUDtBQWlCZkssV0FBU0EsT0FqQk07QUFrQmZRLFNBQU9BLEtBbEJRO0FBbUJmRyxVQUFRQSxNQW5CTztBQW9CZm5CLFFBQU1BO0FBcEJTLENBQWpCLEM7Ozs7Ozs7K0NDelJBOztBQUVBLElBQUl5QixRQUFRLG1CQUFBckQsQ0FBUSxDQUFSLENBQVo7QUFDQSxJQUFJc0Qsc0JBQXNCLG1CQUFBdEQsQ0FBUSxFQUFSLENBQTFCOztBQUVBLElBQUl1RCx1QkFBdUI7QUFDekIsa0JBQWdCO0FBRFMsQ0FBM0I7O0FBSUEsU0FBU0MscUJBQVQsQ0FBK0JDLE9BQS9CLEVBQXdDQyxLQUF4QyxFQUErQztBQUM3QyxNQUFJLENBQUNMLE1BQU1uQyxXQUFOLENBQWtCdUMsT0FBbEIsQ0FBRCxJQUErQkosTUFBTW5DLFdBQU4sQ0FBa0J1QyxRQUFRLGNBQVIsQ0FBbEIsQ0FBbkMsRUFBK0U7QUFDN0VBLFlBQVEsY0FBUixJQUEwQkMsS0FBMUI7QUFDRDtBQUNGOztBQUVELFNBQVNDLGlCQUFULEdBQTZCO0FBQzNCLE1BQUlDLE9BQUo7QUFDQSxNQUFJLE9BQU9DLGNBQVAsS0FBMEIsV0FBOUIsRUFBMkM7QUFDekM7QUFDQUQsY0FBVSxtQkFBQTVELENBQVEsQ0FBUixDQUFWO0FBQ0QsR0FIRCxNQUdPLElBQUksT0FBTzhELE9BQVAsS0FBbUIsV0FBdkIsRUFBb0M7QUFDekM7QUFDQUYsY0FBVSxtQkFBQTVELENBQVEsQ0FBUixDQUFWO0FBQ0Q7QUFDRCxTQUFPNEQsT0FBUDtBQUNEOztBQUVELElBQUlHLFdBQVc7QUFDYkgsV0FBU0QsbUJBREk7O0FBR2JLLG9CQUFrQixDQUFDLFNBQVNBLGdCQUFULENBQTBCQyxJQUExQixFQUFnQ1IsT0FBaEMsRUFBeUM7QUFDMURILHdCQUFvQkcsT0FBcEIsRUFBNkIsY0FBN0I7QUFDQSxRQUFJSixNQUFNNUMsVUFBTixDQUFpQndELElBQWpCLEtBQ0ZaLE1BQU03QyxhQUFOLENBQW9CeUQsSUFBcEIsQ0FERSxJQUVGWixNQUFNcEQsUUFBTixDQUFlZ0UsSUFBZixDQUZFLElBR0ZaLE1BQU03QixRQUFOLENBQWV5QyxJQUFmLENBSEUsSUFJRlosTUFBTWhDLE1BQU4sQ0FBYTRDLElBQWIsQ0FKRSxJQUtGWixNQUFNL0IsTUFBTixDQUFhMkMsSUFBYixDQUxGLEVBTUU7QUFDQSxhQUFPQSxJQUFQO0FBQ0Q7QUFDRCxRQUFJWixNQUFNMUMsaUJBQU4sQ0FBd0JzRCxJQUF4QixDQUFKLEVBQW1DO0FBQ2pDLGFBQU9BLEtBQUtsRCxNQUFaO0FBQ0Q7QUFDRCxRQUFJc0MsTUFBTTNCLGlCQUFOLENBQXdCdUMsSUFBeEIsQ0FBSixFQUFtQztBQUNqQ1QsNEJBQXNCQyxPQUF0QixFQUErQixpREFBL0I7QUFDQSxhQUFPUSxLQUFLL0QsUUFBTCxFQUFQO0FBQ0Q7QUFDRCxRQUFJbUQsTUFBTWxDLFFBQU4sQ0FBZThDLElBQWYsQ0FBSixFQUEwQjtBQUN4QlQsNEJBQXNCQyxPQUF0QixFQUErQixnQ0FBL0I7QUFDQSxhQUFPUyxLQUFLQyxTQUFMLENBQWVGLElBQWYsQ0FBUDtBQUNEO0FBQ0QsV0FBT0EsSUFBUDtBQUNELEdBdkJpQixDQUhMOztBQTRCYkcscUJBQW1CLENBQUMsU0FBU0EsaUJBQVQsQ0FBMkJILElBQTNCLEVBQWlDO0FBQ25EO0FBQ0EsUUFBSSxPQUFPQSxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzVCLFVBQUk7QUFDRkEsZUFBT0MsS0FBS0csS0FBTCxDQUFXSixJQUFYLENBQVA7QUFDRCxPQUZELENBRUUsT0FBT0ssQ0FBUCxFQUFVLENBQUUsWUFBYztBQUM3QjtBQUNELFdBQU9MLElBQVA7QUFDRCxHQVJrQixDQTVCTjs7QUFzQ2JNLFdBQVMsQ0F0Q0k7O0FBd0NiQyxrQkFBZ0IsWUF4Q0g7QUF5Q2JDLGtCQUFnQixjQXpDSDs7QUEyQ2JDLG9CQUFrQixDQUFDLENBM0NOOztBQTZDYkMsa0JBQWdCLFNBQVNBLGNBQVQsQ0FBd0JDLE1BQXhCLEVBQWdDO0FBQzlDLFdBQU9BLFVBQVUsR0FBVixJQUFpQkEsU0FBUyxHQUFqQztBQUNEO0FBL0NZLENBQWY7O0FBa0RBYixTQUFTTixPQUFULEdBQW1CO0FBQ2pCb0IsVUFBUTtBQUNOLGNBQVU7QUFESjtBQURTLENBQW5COztBQU1BeEIsTUFBTWpCLE9BQU4sQ0FBYyxDQUFDLFFBQUQsRUFBVyxLQUFYLEVBQWtCLE1BQWxCLENBQWQsRUFBeUMsU0FBUzBDLG1CQUFULENBQTZCQyxNQUE3QixFQUFxQztBQUM1RWhCLFdBQVNOLE9BQVQsQ0FBaUJzQixNQUFqQixJQUEyQixFQUEzQjtBQUNELENBRkQ7O0FBSUExQixNQUFNakIsT0FBTixDQUFjLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsT0FBaEIsQ0FBZCxFQUF3QyxTQUFTNEMscUJBQVQsQ0FBK0JELE1BQS9CLEVBQXVDO0FBQzdFaEIsV0FBU04sT0FBVCxDQUFpQnNCLE1BQWpCLElBQTJCMUIsTUFBTVQsS0FBTixDQUFZVyxvQkFBWixDQUEzQjtBQUNELENBRkQ7O0FBSUFKLE9BQU9DLE9BQVAsR0FBaUJXLFFBQWpCLEM7Ozs7Ozs7O0FDM0ZBOztBQUVBWixPQUFPQyxPQUFQLEdBQWlCLFNBQVNyRCxJQUFULENBQWN1QyxFQUFkLEVBQWtCWSxPQUFsQixFQUEyQjtBQUMxQyxTQUFPLFNBQVMrQixJQUFULEdBQWdCO0FBQ3JCLFFBQUlDLE9BQU8sSUFBSUMsS0FBSixDQUFVckMsVUFBVUwsTUFBcEIsQ0FBWDtBQUNBLFNBQUssSUFBSUYsSUFBSSxDQUFiLEVBQWdCQSxJQUFJMkMsS0FBS3pDLE1BQXpCLEVBQWlDRixHQUFqQyxFQUFzQztBQUNwQzJDLFdBQUszQyxDQUFMLElBQVVPLFVBQVVQLENBQVYsQ0FBVjtBQUNEO0FBQ0QsV0FBT0QsR0FBRzhDLEtBQUgsQ0FBU2xDLE9BQVQsRUFBa0JnQyxJQUFsQixDQUFQO0FBQ0QsR0FORDtBQU9ELENBUkQsQzs7Ozs7O0FDRkE7QUFDQSxJQUFJcEIsVUFBVVgsT0FBT0MsT0FBUCxHQUFpQixFQUEvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJaUMsZ0JBQUo7QUFDQSxJQUFJQyxrQkFBSjs7QUFFQSxTQUFTQyxnQkFBVCxHQUE0QjtBQUN4QixVQUFNLElBQUlDLEtBQUosQ0FBVSxpQ0FBVixDQUFOO0FBQ0g7QUFDRCxTQUFTQyxtQkFBVCxHQUFnQztBQUM1QixVQUFNLElBQUlELEtBQUosQ0FBVSxtQ0FBVixDQUFOO0FBQ0g7QUFDQSxhQUFZO0FBQ1QsUUFBSTtBQUNBLFlBQUksT0FBT0UsVUFBUCxLQUFzQixVQUExQixFQUFzQztBQUNsQ0wsK0JBQW1CSyxVQUFuQjtBQUNILFNBRkQsTUFFTztBQUNITCwrQkFBbUJFLGdCQUFuQjtBQUNIO0FBQ0osS0FORCxDQU1FLE9BQU9qQixDQUFQLEVBQVU7QUFDUmUsMkJBQW1CRSxnQkFBbkI7QUFDSDtBQUNELFFBQUk7QUFDQSxZQUFJLE9BQU9JLFlBQVAsS0FBd0IsVUFBNUIsRUFBd0M7QUFDcENMLGlDQUFxQkssWUFBckI7QUFDSCxTQUZELE1BRU87QUFDSEwsaUNBQXFCRyxtQkFBckI7QUFDSDtBQUNKLEtBTkQsQ0FNRSxPQUFPbkIsQ0FBUCxFQUFVO0FBQ1JnQiw2QkFBcUJHLG1CQUFyQjtBQUNIO0FBQ0osQ0FuQkEsR0FBRDtBQW9CQSxTQUFTRyxVQUFULENBQW9CQyxHQUFwQixFQUF5QjtBQUNyQixRQUFJUixxQkFBcUJLLFVBQXpCLEVBQXFDO0FBQ2pDO0FBQ0EsZUFBT0EsV0FBV0csR0FBWCxFQUFnQixDQUFoQixDQUFQO0FBQ0g7QUFDRDtBQUNBLFFBQUksQ0FBQ1IscUJBQXFCRSxnQkFBckIsSUFBeUMsQ0FBQ0YsZ0JBQTNDLEtBQWdFSyxVQUFwRSxFQUFnRjtBQUM1RUwsMkJBQW1CSyxVQUFuQjtBQUNBLGVBQU9BLFdBQVdHLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBUDtBQUNIO0FBQ0QsUUFBSTtBQUNBO0FBQ0EsZUFBT1IsaUJBQWlCUSxHQUFqQixFQUFzQixDQUF0QixDQUFQO0FBQ0gsS0FIRCxDQUdFLE9BQU12QixDQUFOLEVBQVE7QUFDTixZQUFJO0FBQ0E7QUFDQSxtQkFBT2UsaUJBQWlCOUUsSUFBakIsQ0FBc0IsSUFBdEIsRUFBNEJzRixHQUE1QixFQUFpQyxDQUFqQyxDQUFQO0FBQ0gsU0FIRCxDQUdFLE9BQU12QixDQUFOLEVBQVE7QUFDTjtBQUNBLG1CQUFPZSxpQkFBaUI5RSxJQUFqQixDQUFzQixJQUF0QixFQUE0QnNGLEdBQTVCLEVBQWlDLENBQWpDLENBQVA7QUFDSDtBQUNKO0FBR0o7QUFDRCxTQUFTQyxlQUFULENBQXlCQyxNQUF6QixFQUFpQztBQUM3QixRQUFJVCx1QkFBdUJLLFlBQTNCLEVBQXlDO0FBQ3JDO0FBQ0EsZUFBT0EsYUFBYUksTUFBYixDQUFQO0FBQ0g7QUFDRDtBQUNBLFFBQUksQ0FBQ1QsdUJBQXVCRyxtQkFBdkIsSUFBOEMsQ0FBQ0gsa0JBQWhELEtBQXVFSyxZQUEzRSxFQUF5RjtBQUNyRkwsNkJBQXFCSyxZQUFyQjtBQUNBLGVBQU9BLGFBQWFJLE1BQWIsQ0FBUDtBQUNIO0FBQ0QsUUFBSTtBQUNBO0FBQ0EsZUFBT1QsbUJBQW1CUyxNQUFuQixDQUFQO0FBQ0gsS0FIRCxDQUdFLE9BQU96QixDQUFQLEVBQVM7QUFDUCxZQUFJO0FBQ0E7QUFDQSxtQkFBT2dCLG1CQUFtQi9FLElBQW5CLENBQXdCLElBQXhCLEVBQThCd0YsTUFBOUIsQ0FBUDtBQUNILFNBSEQsQ0FHRSxPQUFPekIsQ0FBUCxFQUFTO0FBQ1A7QUFDQTtBQUNBLG1CQUFPZ0IsbUJBQW1CL0UsSUFBbkIsQ0FBd0IsSUFBeEIsRUFBOEJ3RixNQUE5QixDQUFQO0FBQ0g7QUFDSjtBQUlKO0FBQ0QsSUFBSUMsUUFBUSxFQUFaO0FBQ0EsSUFBSUMsV0FBVyxLQUFmO0FBQ0EsSUFBSUMsWUFBSjtBQUNBLElBQUlDLGFBQWEsQ0FBQyxDQUFsQjs7QUFFQSxTQUFTQyxlQUFULEdBQTJCO0FBQ3ZCLFFBQUksQ0FBQ0gsUUFBRCxJQUFhLENBQUNDLFlBQWxCLEVBQWdDO0FBQzVCO0FBQ0g7QUFDREQsZUFBVyxLQUFYO0FBQ0EsUUFBSUMsYUFBYXpELE1BQWpCLEVBQXlCO0FBQ3JCdUQsZ0JBQVFFLGFBQWFHLE1BQWIsQ0FBb0JMLEtBQXBCLENBQVI7QUFDSCxLQUZELE1BRU87QUFDSEcscUJBQWEsQ0FBQyxDQUFkO0FBQ0g7QUFDRCxRQUFJSCxNQUFNdkQsTUFBVixFQUFrQjtBQUNkNkQ7QUFDSDtBQUNKOztBQUVELFNBQVNBLFVBQVQsR0FBc0I7QUFDbEIsUUFBSUwsUUFBSixFQUFjO0FBQ1Y7QUFDSDtBQUNELFFBQUkxQixVQUFVcUIsV0FBV1EsZUFBWCxDQUFkO0FBQ0FILGVBQVcsSUFBWDs7QUFFQSxRQUFJTSxNQUFNUCxNQUFNdkQsTUFBaEI7QUFDQSxXQUFNOEQsR0FBTixFQUFXO0FBQ1BMLHVCQUFlRixLQUFmO0FBQ0FBLGdCQUFRLEVBQVI7QUFDQSxlQUFPLEVBQUVHLFVBQUYsR0FBZUksR0FBdEIsRUFBMkI7QUFDdkIsZ0JBQUlMLFlBQUosRUFBa0I7QUFDZEEsNkJBQWFDLFVBQWIsRUFBeUJLLEdBQXpCO0FBQ0g7QUFDSjtBQUNETCxxQkFBYSxDQUFDLENBQWQ7QUFDQUksY0FBTVAsTUFBTXZELE1BQVo7QUFDSDtBQUNEeUQsbUJBQWUsSUFBZjtBQUNBRCxlQUFXLEtBQVg7QUFDQUgsb0JBQWdCdkIsT0FBaEI7QUFDSDs7QUFFRFQsUUFBUTJDLFFBQVIsR0FBbUIsVUFBVVosR0FBVixFQUFlO0FBQzlCLFFBQUlYLE9BQU8sSUFBSUMsS0FBSixDQUFVckMsVUFBVUwsTUFBVixHQUFtQixDQUE3QixDQUFYO0FBQ0EsUUFBSUssVUFBVUwsTUFBVixHQUFtQixDQUF2QixFQUEwQjtBQUN0QixhQUFLLElBQUlGLElBQUksQ0FBYixFQUFnQkEsSUFBSU8sVUFBVUwsTUFBOUIsRUFBc0NGLEdBQXRDLEVBQTJDO0FBQ3ZDMkMsaUJBQUszQyxJQUFJLENBQVQsSUFBY08sVUFBVVAsQ0FBVixDQUFkO0FBQ0g7QUFDSjtBQUNEeUQsVUFBTVUsSUFBTixDQUFXLElBQUlDLElBQUosQ0FBU2QsR0FBVCxFQUFjWCxJQUFkLENBQVg7QUFDQSxRQUFJYyxNQUFNdkQsTUFBTixLQUFpQixDQUFqQixJQUFzQixDQUFDd0QsUUFBM0IsRUFBcUM7QUFDakNMLG1CQUFXVSxVQUFYO0FBQ0g7QUFDSixDQVhEOztBQWFBO0FBQ0EsU0FBU0ssSUFBVCxDQUFjZCxHQUFkLEVBQW1CZSxLQUFuQixFQUEwQjtBQUN0QixTQUFLZixHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLZSxLQUFMLEdBQWFBLEtBQWI7QUFDSDtBQUNERCxLQUFLdkcsU0FBTCxDQUFlb0csR0FBZixHQUFxQixZQUFZO0FBQzdCLFNBQUtYLEdBQUwsQ0FBU1QsS0FBVCxDQUFlLElBQWYsRUFBcUIsS0FBS3dCLEtBQTFCO0FBQ0gsQ0FGRDtBQUdBOUMsUUFBUStDLEtBQVIsR0FBZ0IsU0FBaEI7QUFDQS9DLFFBQVFnRCxPQUFSLEdBQWtCLElBQWxCO0FBQ0FoRCxRQUFRaUQsR0FBUixHQUFjLEVBQWQ7QUFDQWpELFFBQVFrRCxJQUFSLEdBQWUsRUFBZjtBQUNBbEQsUUFBUW1ELE9BQVIsR0FBa0IsRUFBbEIsQyxDQUFzQjtBQUN0Qm5ELFFBQVFvRCxRQUFSLEdBQW1CLEVBQW5COztBQUVBLFNBQVNDLElBQVQsR0FBZ0IsQ0FBRTs7QUFFbEJyRCxRQUFRc0QsRUFBUixHQUFhRCxJQUFiO0FBQ0FyRCxRQUFRdUQsV0FBUixHQUFzQkYsSUFBdEI7QUFDQXJELFFBQVF3RCxJQUFSLEdBQWVILElBQWY7QUFDQXJELFFBQVF5RCxHQUFSLEdBQWNKLElBQWQ7QUFDQXJELFFBQVEwRCxjQUFSLEdBQXlCTCxJQUF6QjtBQUNBckQsUUFBUTJELGtCQUFSLEdBQTZCTixJQUE3QjtBQUNBckQsUUFBUTRELElBQVIsR0FBZVAsSUFBZjtBQUNBckQsUUFBUTZELGVBQVIsR0FBMEJSLElBQTFCO0FBQ0FyRCxRQUFROEQsbUJBQVIsR0FBOEJULElBQTlCOztBQUVBckQsUUFBUStELFNBQVIsR0FBb0IsVUFBVUMsSUFBVixFQUFnQjtBQUFFLFdBQU8sRUFBUDtBQUFXLENBQWpEOztBQUVBaEUsUUFBUWlFLE9BQVIsR0FBa0IsVUFBVUQsSUFBVixFQUFnQjtBQUM5QixVQUFNLElBQUl0QyxLQUFKLENBQVUsa0NBQVYsQ0FBTjtBQUNILENBRkQ7O0FBSUExQixRQUFRa0UsR0FBUixHQUFjLFlBQVk7QUFBRSxXQUFPLEdBQVA7QUFBWSxDQUF4QztBQUNBbEUsUUFBUW1FLEtBQVIsR0FBZ0IsVUFBVUMsR0FBVixFQUFlO0FBQzNCLFVBQU0sSUFBSTFDLEtBQUosQ0FBVSxnQ0FBVixDQUFOO0FBQ0gsQ0FGRDtBQUdBMUIsUUFBUXFFLEtBQVIsR0FBZ0IsWUFBVztBQUFFLFdBQU8sQ0FBUDtBQUFXLENBQXhDLEM7Ozs7Ozs7K0NDdkxBOztBQUVBLElBQUk5RSxRQUFRLG1CQUFBckQsQ0FBUSxDQUFSLENBQVo7QUFDQSxJQUFJb0ksU0FBUyxtQkFBQXBJLENBQVEsRUFBUixDQUFiO0FBQ0EsSUFBSXFJLFdBQVcsbUJBQUFySSxDQUFRLEVBQVIsQ0FBZjtBQUNBLElBQUlzSSxlQUFlLG1CQUFBdEksQ0FBUSxFQUFSLENBQW5CO0FBQ0EsSUFBSXVJLGtCQUFrQixtQkFBQXZJLENBQVEsRUFBUixDQUF0QjtBQUNBLElBQUl3SSxjQUFjLG1CQUFBeEksQ0FBUSxDQUFSLENBQWxCO0FBQ0EsSUFBSXlJLE9BQVEsT0FBT3ZHLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUNBLE9BQU91RyxJQUF4QyxJQUFnRHZHLE9BQU91RyxJQUFQLENBQVkxSSxJQUFaLENBQWlCbUMsTUFBakIsQ0FBakQsSUFBOEUsbUJBQUFsQyxDQUFRLEVBQVIsQ0FBekY7O0FBRUFtRCxPQUFPQyxPQUFQLEdBQWlCLFNBQVNzRixVQUFULENBQW9CQyxNQUFwQixFQUE0QjtBQUMzQyxTQUFPLElBQUlDLE9BQUosQ0FBWSxTQUFTQyxrQkFBVCxDQUE0QkMsT0FBNUIsRUFBcUNDLE1BQXJDLEVBQTZDO0FBQzlELFFBQUlDLGNBQWNMLE9BQU8xRSxJQUF6QjtBQUNBLFFBQUlnRixpQkFBaUJOLE9BQU9sRixPQUE1Qjs7QUFFQSxRQUFJSixNQUFNNUMsVUFBTixDQUFpQnVJLFdBQWpCLENBQUosRUFBbUM7QUFDakMsYUFBT0MsZUFBZSxjQUFmLENBQVAsQ0FEaUMsQ0FDTTtBQUN4Qzs7QUFFRCxRQUFJQyxVQUFVLElBQUlyRixjQUFKLEVBQWQ7QUFDQSxRQUFJc0YsWUFBWSxvQkFBaEI7QUFDQSxRQUFJQyxVQUFVLEtBQWQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBSXRGLFFBQVFpRCxHQUFSLENBQVlzQyxRQUFaLEtBQXlCLE1BQXpCLElBQ0EsT0FBT25ILE1BQVAsS0FBa0IsV0FEbEIsSUFFQUEsT0FBT29ILGNBRlAsSUFFeUIsRUFBRSxxQkFBcUJKLE9BQXZCLENBRnpCLElBR0EsQ0FBQ1gsZ0JBQWdCSSxPQUFPWSxHQUF2QixDQUhMLEVBR2tDO0FBQ2hDTCxnQkFBVSxJQUFJaEgsT0FBT29ILGNBQVgsRUFBVjtBQUNBSCxrQkFBWSxRQUFaO0FBQ0FDLGdCQUFVLElBQVY7QUFDQUYsY0FBUU0sVUFBUixHQUFxQixTQUFTQyxjQUFULEdBQTBCLENBQUUsQ0FBakQ7QUFDQVAsY0FBUVEsU0FBUixHQUFvQixTQUFTQyxhQUFULEdBQXlCLENBQUUsQ0FBL0M7QUFDRDs7QUFFRDtBQUNBLFFBQUloQixPQUFPaUIsSUFBWCxFQUFpQjtBQUNmLFVBQUlDLFdBQVdsQixPQUFPaUIsSUFBUCxDQUFZQyxRQUFaLElBQXdCLEVBQXZDO0FBQ0EsVUFBSUMsV0FBV25CLE9BQU9pQixJQUFQLENBQVlFLFFBQVosSUFBd0IsRUFBdkM7QUFDQWIscUJBQWVjLGFBQWYsR0FBK0IsV0FBV3RCLEtBQUtvQixXQUFXLEdBQVgsR0FBaUJDLFFBQXRCLENBQTFDO0FBQ0Q7O0FBRURaLFlBQVFjLElBQVIsQ0FBYXJCLE9BQU81RCxNQUFQLENBQWNrRixXQUFkLEVBQWIsRUFBMEM1QixTQUFTTSxPQUFPWSxHQUFoQixFQUFxQlosT0FBT3VCLE1BQTVCLEVBQW9DdkIsT0FBT3dCLGdCQUEzQyxDQUExQyxFQUF3RyxJQUF4Rzs7QUFFQTtBQUNBakIsWUFBUTNFLE9BQVIsR0FBa0JvRSxPQUFPcEUsT0FBekI7O0FBRUE7QUFDQTJFLFlBQVFDLFNBQVIsSUFBcUIsU0FBU2lCLFVBQVQsR0FBc0I7QUFDekMsVUFBSSxDQUFDbEIsT0FBRCxJQUFhQSxRQUFRbUIsVUFBUixLQUF1QixDQUF2QixJQUE0QixDQUFDakIsT0FBOUMsRUFBd0Q7QUFDdEQ7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQUlGLFFBQVF0RSxNQUFSLEtBQW1CLENBQW5CLElBQXdCLEVBQUVzRSxRQUFRb0IsV0FBUixJQUF1QnBCLFFBQVFvQixXQUFSLENBQW9CQyxPQUFwQixDQUE0QixPQUE1QixNQUF5QyxDQUFsRSxDQUE1QixFQUFrRztBQUNoRztBQUNEOztBQUVEO0FBQ0EsVUFBSUMsa0JBQWtCLDJCQUEyQnRCLE9BQTNCLEdBQXFDWixhQUFhWSxRQUFRdUIscUJBQVIsRUFBYixDQUFyQyxHQUFxRixJQUEzRztBQUNBLFVBQUlDLGVBQWUsQ0FBQy9CLE9BQU9nQyxZQUFSLElBQXdCaEMsT0FBT2dDLFlBQVAsS0FBd0IsTUFBaEQsR0FBeUR6QixRQUFRMEIsWUFBakUsR0FBZ0YxQixRQUFRMkIsUUFBM0c7QUFDQSxVQUFJQSxXQUFXO0FBQ2I1RyxjQUFNeUcsWUFETztBQUViO0FBQ0E5RixnQkFBUXNFLFFBQVF0RSxNQUFSLEtBQW1CLElBQW5CLEdBQTBCLEdBQTFCLEdBQWdDc0UsUUFBUXRFLE1BSG5DO0FBSWJrRyxvQkFBWTVCLFFBQVF0RSxNQUFSLEtBQW1CLElBQW5CLEdBQTBCLFlBQTFCLEdBQXlDc0UsUUFBUTRCLFVBSmhEO0FBS2JySCxpQkFBUytHLGVBTEk7QUFNYjdCLGdCQUFRQSxNQU5LO0FBT2JPLGlCQUFTQTtBQVBJLE9BQWY7O0FBVUFkLGFBQU9VLE9BQVAsRUFBZ0JDLE1BQWhCLEVBQXdCOEIsUUFBeEI7O0FBRUE7QUFDQTNCLGdCQUFVLElBQVY7QUFDRCxLQTlCRDs7QUFnQ0E7QUFDQUEsWUFBUTZCLE9BQVIsR0FBa0IsU0FBU0MsV0FBVCxHQUF1QjtBQUN2QztBQUNBO0FBQ0FqQyxhQUFPUCxZQUFZLGVBQVosRUFBNkJHLE1BQTdCLEVBQXFDLElBQXJDLEVBQTJDTyxPQUEzQyxDQUFQOztBQUVBO0FBQ0FBLGdCQUFVLElBQVY7QUFDRCxLQVBEOztBQVNBO0FBQ0FBLFlBQVFRLFNBQVIsR0FBb0IsU0FBU0MsYUFBVCxHQUF5QjtBQUMzQ1osYUFBT1AsWUFBWSxnQkFBZ0JHLE9BQU9wRSxPQUF2QixHQUFpQyxhQUE3QyxFQUE0RG9FLE1BQTVELEVBQW9FLGNBQXBFLEVBQ0xPLE9BREssQ0FBUDs7QUFHQTtBQUNBQSxnQkFBVSxJQUFWO0FBQ0QsS0FORDs7QUFRQTtBQUNBO0FBQ0E7QUFDQSxRQUFJN0YsTUFBTXRCLG9CQUFOLEVBQUosRUFBa0M7QUFDaEMsVUFBSWtKLFVBQVUsbUJBQUFqTCxDQUFRLEVBQVIsQ0FBZDs7QUFFQTtBQUNBLFVBQUlrTCxZQUFZLENBQUN2QyxPQUFPd0MsZUFBUCxJQUEwQjVDLGdCQUFnQkksT0FBT1ksR0FBdkIsQ0FBM0IsS0FBMkRaLE9BQU9uRSxjQUFsRSxHQUNaeUcsUUFBUUcsSUFBUixDQUFhekMsT0FBT25FLGNBQXBCLENBRFksR0FFWjZHLFNBRko7O0FBSUEsVUFBSUgsU0FBSixFQUFlO0FBQ2JqQyx1QkFBZU4sT0FBT2xFLGNBQXRCLElBQXdDeUcsU0FBeEM7QUFDRDtBQUNGOztBQUVEO0FBQ0EsUUFBSSxzQkFBc0JoQyxPQUExQixFQUFtQztBQUNqQzdGLFlBQU1qQixPQUFOLENBQWM2RyxjQUFkLEVBQThCLFNBQVNxQyxnQkFBVCxDQUEwQmhMLEdBQTFCLEVBQStCb0MsR0FBL0IsRUFBb0M7QUFDaEUsWUFBSSxPQUFPc0csV0FBUCxLQUF1QixXQUF2QixJQUFzQ3RHLElBQUk2SSxXQUFKLE9BQXNCLGNBQWhFLEVBQWdGO0FBQzlFO0FBQ0EsaUJBQU90QyxlQUFldkcsR0FBZixDQUFQO0FBQ0QsU0FIRCxNQUdPO0FBQ0w7QUFDQXdHLGtCQUFRb0MsZ0JBQVIsQ0FBeUI1SSxHQUF6QixFQUE4QnBDLEdBQTlCO0FBQ0Q7QUFDRixPQVJEO0FBU0Q7O0FBRUQ7QUFDQSxRQUFJcUksT0FBT3dDLGVBQVgsRUFBNEI7QUFDMUJqQyxjQUFRaUMsZUFBUixHQUEwQixJQUExQjtBQUNEOztBQUVEO0FBQ0EsUUFBSXhDLE9BQU9nQyxZQUFYLEVBQXlCO0FBQ3ZCLFVBQUk7QUFDRnpCLGdCQUFReUIsWUFBUixHQUF1QmhDLE9BQU9nQyxZQUE5QjtBQUNELE9BRkQsQ0FFRSxPQUFPckcsQ0FBUCxFQUFVO0FBQ1Y7QUFDQTtBQUNBLFlBQUlxRSxPQUFPZ0MsWUFBUCxLQUF3QixNQUE1QixFQUFvQztBQUNsQyxnQkFBTXJHLENBQU47QUFDRDtBQUNGO0FBQ0Y7O0FBRUQ7QUFDQSxRQUFJLE9BQU9xRSxPQUFPNkMsa0JBQWQsS0FBcUMsVUFBekMsRUFBcUQ7QUFDbkR0QyxjQUFRdUMsZ0JBQVIsQ0FBeUIsVUFBekIsRUFBcUM5QyxPQUFPNkMsa0JBQTVDO0FBQ0Q7O0FBRUQ7QUFDQSxRQUFJLE9BQU83QyxPQUFPK0MsZ0JBQWQsS0FBbUMsVUFBbkMsSUFBaUR4QyxRQUFReUMsTUFBN0QsRUFBcUU7QUFDbkV6QyxjQUFReUMsTUFBUixDQUFlRixnQkFBZixDQUFnQyxVQUFoQyxFQUE0QzlDLE9BQU8rQyxnQkFBbkQ7QUFDRDs7QUFFRCxRQUFJL0MsT0FBT2lELFdBQVgsRUFBd0I7QUFDdEI7QUFDQWpELGFBQU9pRCxXQUFQLENBQW1CQyxPQUFuQixDQUEyQkMsSUFBM0IsQ0FBZ0MsU0FBU0MsVUFBVCxDQUFvQkMsTUFBcEIsRUFBNEI7QUFDMUQsWUFBSSxDQUFDOUMsT0FBTCxFQUFjO0FBQ1o7QUFDRDs7QUFFREEsZ0JBQVErQyxLQUFSO0FBQ0FsRCxlQUFPaUQsTUFBUDtBQUNBO0FBQ0E5QyxrQkFBVSxJQUFWO0FBQ0QsT0FURDtBQVVEOztBQUVELFFBQUlGLGdCQUFnQnFDLFNBQXBCLEVBQStCO0FBQzdCckMsb0JBQWMsSUFBZDtBQUNEOztBQUVEO0FBQ0FFLFlBQVFnRCxJQUFSLENBQWFsRCxXQUFiO0FBQ0QsR0F2S00sQ0FBUDtBQXdLRCxDQXpLRCxDOzs7Ozs7OztBQ1ZBOztBQUVBLElBQUltRCxlQUFlLG1CQUFBbk0sQ0FBUSxFQUFSLENBQW5COztBQUVBOzs7Ozs7Ozs7O0FBVUFtRCxPQUFPQyxPQUFQLEdBQWlCLFNBQVNvRixXQUFULENBQXFCNEQsT0FBckIsRUFBOEJ6RCxNQUE5QixFQUFzQzBELElBQXRDLEVBQTRDbkQsT0FBNUMsRUFBcUQyQixRQUFyRCxFQUErRDtBQUM5RSxNQUFJeUIsUUFBUSxJQUFJOUcsS0FBSixDQUFVNEcsT0FBVixDQUFaO0FBQ0EsU0FBT0QsYUFBYUcsS0FBYixFQUFvQjNELE1BQXBCLEVBQTRCMEQsSUFBNUIsRUFBa0NuRCxPQUFsQyxFQUEyQzJCLFFBQTNDLENBQVA7QUFDRCxDQUhELEM7Ozs7Ozs7QUNkQTs7QUFFQTFILE9BQU9DLE9BQVAsR0FBaUIsU0FBU21KLFFBQVQsQ0FBa0I3SSxLQUFsQixFQUF5QjtBQUN4QyxTQUFPLENBQUMsRUFBRUEsU0FBU0EsTUFBTThJLFVBQWpCLENBQVI7QUFDRCxDQUZELEM7Ozs7Ozs7QUNGQTs7QUFFQTs7Ozs7OztBQU1BLFNBQVNDLE1BQVQsQ0FBZ0JMLE9BQWhCLEVBQXlCO0FBQ3ZCLE9BQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOztBQUVESyxPQUFPck0sU0FBUCxDQUFpQkYsUUFBakIsR0FBNEIsU0FBU0EsUUFBVCxHQUFvQjtBQUM5QyxTQUFPLFlBQVksS0FBS2tNLE9BQUwsR0FBZSxPQUFPLEtBQUtBLE9BQTNCLEdBQXFDLEVBQWpELENBQVA7QUFDRCxDQUZEOztBQUlBSyxPQUFPck0sU0FBUCxDQUFpQm9NLFVBQWpCLEdBQThCLElBQTlCOztBQUVBckosT0FBT0MsT0FBUCxHQUFpQnFKLE1BQWpCLEM7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNBOzs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7OztBQVdPLFNBQVNDLG9CQUFULENBQStCQyxLQUEvQixFQUFzQzs7QUFFekNBLFVBQU1DLElBQU4sR0FBYSx5REFBYjtBQUNBLFdBQU8sNEVBQUFDLENBQW1CRixLQUFuQixDQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7QUFhTyxTQUFTRyxpQkFBVCxDQUEyQkgsS0FBM0IsRUFBa0M7QUFDckM7QUFDQTtBQUNBLFFBQUksQ0FBQ3hILE1BQU05RSxPQUFOLENBQWNzTSxNQUFNSSxPQUFwQixDQUFMLEVBQW1DO0FBQy9CSixjQUFNSSxPQUFOLEdBQWdCLENBQUNKLE1BQU1JLE9BQVAsQ0FBaEI7QUFDSDtBQUNEO0FBQ0EsUUFBSSxDQUFDSixNQUFNSyxRQUFYLEVBQXFCO0FBQ2pCQyxRQUFBLDJFQUFBQSxDQUFrQk4sTUFBTUksT0FBeEI7QUFDQUosY0FBTU8sVUFBTixHQUFtQixFQUFuQjtBQUNBUCxjQUFNTyxVQUFOLENBQWlCekssTUFBakIsR0FBMEIsQ0FBMUI7QUFDQWtLLGNBQU1LLFFBQU4sR0FBaUIsSUFBakI7QUFDSDs7QUFFREwsVUFBTUMsSUFBTixHQUFhLHNEQUFiO0FBQ0FELFVBQU1RLGNBQU4sR0FBdUJSLE1BQU1RLGNBQU4sSUFBd0IsQ0FBeEIsR0FBNEJSLE1BQU1RLGNBQU4sR0FBdUIsQ0FBbkQsR0FBdUQsQ0FBOUU7QUFDQVIsVUFBTVMsTUFBTixHQUFlVCxNQUFNSSxPQUFOLENBQWNKLE1BQU1RLGNBQXBCLENBQWY7O0FBRUEsV0FBTyw0RUFBQU4sQ0FBbUJGLEtBQW5CLEVBQ05iLElBRE0sQ0FDRCxpQkFBUztBQUNYYSxjQUFNTyxVQUFOLENBQWlCUCxNQUFNUyxNQUF2QixJQUFpQ0MsS0FBakM7QUFDQVYsY0FBTU8sVUFBTixDQUFpQnpLLE1BQWpCOztBQUVBLFlBQUlrSyxNQUFNTyxVQUFOLENBQWlCekssTUFBakIsR0FBMEJrSyxNQUFNSSxPQUFOLENBQWN0SyxNQUE1QyxFQUFvRDtBQUNoRCxtQkFBT3FLLGtCQUFrQkgsS0FBbEIsQ0FBUDtBQUNIO0FBQ0QsZUFBT0EsTUFBTU8sVUFBYjtBQUNILEtBVE0sQ0FBUDtBQVVILEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BHRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSSxrQkFBa0IsMEdBQXhCO0FBQ0EsSUFBTUMsZUFBZSxzREFBckI7QUFDQSxJQUFNQyxvQkFBb0IsZ0NBQTFCO0FBQ0EsSUFBTUMsY0FBYyxVQUFwQjtBQUNPLElBQU1DLFVBQVUsU0FBaEI7QUFDQSxJQUFNQyxPQUFPLE1BQWI7QUFDUCxJQUFJQyxtQkFBbUIsSUFBdkI7O0FBRUEsU0FBU0MsYUFBVCxDQUF1QkMsSUFBdkIsRUFBNkI7QUFDNUIsUUFBTyxJQUFJbEYsT0FBSixDQUFZLFVBQUNFLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN2QyxNQUFJZ0YsU0FBUyxJQUFJQyxVQUFKLEVBQWI7QUFDQUQsU0FBT0UsU0FBUCxHQUFtQixVQUFVM0osQ0FBVixFQUFhO0FBQy9Cd0UsV0FBUXhFLEVBQUU0SixNQUFGLENBQVN0TixNQUFqQjtBQUNBLEdBRkQ7QUFHQW1OLFNBQU9oRCxPQUFQLEdBQWlCLFVBQVV6RyxDQUFWLEVBQWE7QUFDN0J5RSxVQUFPekUsRUFBRTRKLE1BQUYsQ0FBUzVCLEtBQWhCO0FBQ0EsR0FGRDtBQUdBeUIsU0FBT0ksaUJBQVAsQ0FBeUJMLElBQXpCO0FBQ0EsRUFUTSxDQUFQO0FBVUE7QUFDRCxTQUFTTSxnQkFBVCxDQUEwQnpCLEtBQTFCLEVBQWlDO0FBQ2hDLFFBQU8sbUVBQUEwQixDQUFXMUIsS0FBWCxFQUNMYixJQURLLENBQ0Esb0JBQVk7QUFDakIsU0FBT2pCLFNBQVM1RyxJQUFULENBQWNxSyxlQUFyQjtBQUNBLEVBSEssQ0FBUDtBQUlBO0FBQ0QsU0FBU0MsbUJBQVQsQ0FBNkJDLEtBQTdCLEVBQW9DQyxTQUFwQyxFQUErQ0MsT0FBL0MsRUFBd0Q7QUFDdkQsS0FBSUMsYUFBYUgsTUFBTS9MLE1BQXZCO0FBQUEsS0FDQ21NLFdBQVcsRUFEWjtBQUFBLEtBRUNDLGFBQWEsRUFGZDs7QUFJQSxNQUFLLElBQUlDLEtBQUssQ0FBZCxFQUFpQkEsS0FBS0gsVUFBdEIsRUFBa0NHLElBQWxDLEVBQXdDO0FBQ3ZDLE1BQUlDLGFBQWFQLE1BQU1RLElBQU4sQ0FBV0YsRUFBWCxDQUFqQjs7QUFFQSxNQUFJQyxXQUFXRSxJQUFYLEdBQWtCeEIsV0FBdEIsRUFBbUM7QUFDbENvQixjQUFXbkksSUFBWCxDQUFnQnFJLFdBQVdqSCxJQUEzQjtBQUNBO0FBQ0E7QUFDRDhHLFdBQVNsSSxJQUFULENBQWM7QUFDYjZDLFFBQUtrRixTQURRO0FBRWJYLFNBQU1pQixVQUZPO0FBR2JMLFlBQVNBO0FBSEksR0FBZDtBQUtBO0FBQ0QsUUFBTztBQUNORSxvQkFETTtBQUVOQztBQUZNLEVBQVA7QUFJQTtBQUNELFNBQVNLLGFBQVQsQ0FBdUJ2QyxLQUF2QixFQUE4QjtBQUM3QixLQUFJd0MsU0FBU3hDLE1BQU13QyxNQUFOLElBQWdCLCtEQUFBQyxFQUE3QjtBQUNBLGFBQVVELE1BQVYsR0FBbUJ4QyxNQUFNcEQsR0FBekI7QUFDQTtBQUNELFNBQVM4RixnQkFBVCxDQUEwQjFDLEtBQTFCLEVBQWlDO0FBQ2hDLEtBQUlwRCxNQUFNMkYsY0FBY3ZDLEtBQWQsQ0FBVjtBQUNBLFFBQVVwRCxHQUFWLHdDQUErQ29ELE1BQU0yQyxNQUFyRDtBQUNBO0FBQ0QsU0FBU0MsYUFBVCxDQUF1QjVDLEtBQXZCLEVBQThCO0FBQzdCLEtBQUlwRCxNQUFNMkYsY0FBY3ZDLEtBQWQsQ0FBVjtBQUNBLEtBQUlBLE1BQU02QyxRQUFWLEVBQW9CO0FBQ25CLFNBQVVqRyxHQUFWLHFCQUE0Qm9ELE1BQU02QyxRQUFsQyxrQkFBc0Q3QyxNQUFNUyxNQUE1RDtBQUNBLEVBRkQsTUFFTztBQUNOLFNBQVU3RCxHQUFWLDRCQUFtQ29ELE1BQU04QyxTQUF6QyxrQkFBOEQ5QyxNQUFNUyxNQUFwRTtBQUNBO0FBQ0Q7QUFDRCxTQUFTc0MsV0FBVCxDQUFxQi9DLEtBQXJCLEVBQTRCO0FBQzNCLEtBQUlBLE1BQU1DLElBQU4sS0FBZWMsT0FBbkIsRUFBNEI7QUFDM0JFLHFCQUFtQjtBQUNsQitCLGtCQUFlLENBREc7QUFFbEJwRyxRQUFLOEYsaUJBQWlCMUMsS0FBakI7QUFGYSxHQUFuQjtBQUlBLEVBTEQsTUFLTyxJQUFJQSxNQUFNQyxJQUFOLEtBQWVlLElBQW5CLEVBQXlCO0FBQy9CQyxxQkFBbUI7QUFDbEIrQixrQkFBZSxDQURHO0FBRWxCcEcsUUFBS2dHLGNBQWM1QyxLQUFkO0FBRmEsR0FBbkI7QUFJQSxFQUxNLE1BS0E7QUFDTixRQUFNLElBQUluSCxLQUFKLENBQVUrSCxZQUFWLENBQU47QUFDQTtBQUNEO0FBQ00sU0FBU04saUJBQVQsQ0FBMkIyQyxHQUEzQixFQUFnQztBQUN0QyxLQUFJQyxhQUFhLElBQWpCOztBQUVBRCxLQUFJRSxJQUFKLENBQVMsY0FBTTtBQUNkLE1BQUksT0FBT0MsRUFBUCxLQUFjLFFBQWxCLEVBQTRCO0FBQzNCRixnQkFBYSxLQUFiO0FBQ0EsVUFBTyxJQUFQO0FBQ0E7QUFDRCxFQUxEOztBQU9BLEtBQUksQ0FBQ0EsVUFBTCxFQUFpQjtBQUNoQixRQUFNLElBQUlySyxLQUFKLENBQVVnSSxpQkFBVixDQUFOO0FBQ0E7QUFDRDtBQUNNLFNBQVNYLGtCQUFULENBQTRCRixLQUE1QixFQUFtQztBQUN6QyxLQUFJLEVBQUVBLE1BQU02QixLQUFOLFlBQXVCd0IsUUFBekIsQ0FBSixFQUF3QztBQUN2QyxRQUFNLElBQUl4SyxLQUFKLENBQVU4SCxlQUFWLENBQU47QUFDQTtBQUNEb0MsYUFBWS9DLEtBQVo7O0FBRUE7QUFDQSxRQUFPeUIsaUJBQWlCekIsS0FBakIsRUFDTGIsSUFESyxDQUNBLGVBQU87O0FBRVo7QUFDQSxNQUFJbUUsaUJBQWlCMUIsb0JBQW9CNUIsTUFBTTZCLEtBQTFCLEVBQWlDWixpQkFBaUJyRSxHQUFsRCxFQUF1RDJHLEdBQXZELENBQXJCO0FBQUEsTUFDQ0MsWUFBWSxJQURiOztBQUdBLE1BQUlGLGVBQWVwQixVQUFmLENBQTBCcE0sTUFBMUIsR0FBbUMsQ0FBdkMsRUFBMEM7QUFDekM7QUFDQXdOLGtCQUFlckIsUUFBZixHQUEwQixJQUExQjtBQUNBaEcsV0FBUUcsTUFBUixDQUFlO0FBQ2Q4RixnQkFBWW9CLGVBQWVwQjtBQURiLElBQWY7QUFHQTtBQUNEc0IsY0FBWSxJQUFJLDJGQUFKLEVBQVo7O0FBRUFBLFlBQVVDLDBCQUFWLENBQXFDeEMsaUJBQWlCK0IsYUFBdEQ7O0FBRUFRLFlBQVVFLGtCQUFWLENBQTZCLFVBQVVDLFFBQVYsRUFBb0JDLEtBQXBCLEVBQTJCOztBQUV2RCxPQUFJNUgsU0FBUztBQUNaNUQsWUFBUSxNQURJO0FBRVp0QixhQUFTO0FBRkcsSUFBYjtBQUlBLE9BQUlrSixNQUFNNkQsYUFBVixFQUF5QjtBQUN4QjdELFVBQU02RCxhQUFOLENBQW9CRixRQUFwQixFQUE4QkMsS0FBOUI7QUFDQTtBQUNELFVBQU8xQyxjQUFjeUMsU0FBU3hDLElBQXZCLEVBQ0xoQyxJQURLLENBQ0Esa0JBQVU7QUFDZm5ELFdBQU9ZLEdBQVAsR0FBYStHLFNBQVMvRyxHQUFULENBQWF6SCxPQUFiLENBQXFCLFlBQXJCLEVBQW1Dd08sU0FBU3hDLElBQVQsQ0FBY2hHLElBQWpELENBQWI7QUFDQWEsV0FBTzFFLElBQVAsR0FBY2xELE1BQWQ7QUFDQTRILFdBQU9sRixPQUFQLEdBQWlCO0FBQ2hCLGVBQVUsZ0NBRE07QUFFaEIsd0JBQW1CNk0sU0FBUzVCLE9BRlo7QUFHaEIsdUJBQWtCM04sT0FBTzBQO0FBSFQsS0FBakI7QUFLQSxRQUFJOUQsTUFBTStELG9CQUFWLEVBQWdDO0FBQy9CL0gsWUFBTytDLGdCQUFQLEdBQTBCLFVBQVNpRixhQUFULEVBQXdCO0FBQ2pELFVBQUlDLG1CQUFtQkMsS0FBS0MsS0FBTCxDQUFhSCxjQUFjSSxNQUFkLEdBQXVCLEdBQXhCLEdBQStCSixjQUFjSyxLQUF6RCxDQUF2QjtBQUNBckUsWUFBTStELG9CQUFOLENBQTJCRSxnQkFBM0IsRUFBNkNMLEtBQTdDO0FBQ0EsTUFIRDtBQUlBO0FBQ0QsV0FBTyw2Q0FBQVUsQ0FBTXRJLE1BQU4sQ0FBUDtBQUNBLElBaEJLLENBQVA7QUFrQkEsR0EzQkQ7QUE0QkF3SCxZQUFVZSxrQkFBVixDQUE2QnZFLE1BQU13RSxlQUFuQztBQUNBLFNBQU9oQixVQUFVaUIsSUFBVixDQUFlbkIsZUFBZXJCLFFBQTlCLENBQVA7QUFDQSxFQWhESyxDQUFQO0FBaURBLEM7Ozs7OztBQzNKRCxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFFQTs7Ozs7QUFLQSxJQUFheUMsdUJBQWI7QUFFSSx1Q0FBYztBQUFBOztBQUNWLGFBQUtDLGdCQUFMLEdBQXdCLEVBQXhCO0FBQ0EsYUFBS0MsZUFBTCxHQUF1QixDQUF2QjtBQUNIOztBQUxMO0FBQUE7QUFBQSxnREFNNEI7QUFDcEIsZ0JBQUlDLGtCQUFrQixDQUF0QjtBQUNBLGlCQUFLRixnQkFBTCxDQUFzQmxQLE9BQXRCLENBQThCLGdCQUFRO0FBQ2xDLG9CQUFJLENBQUM0TSxLQUFLeUMsU0FBVixFQUFxQjtBQUNqQkQ7QUFDSDtBQUNKLGFBSkQ7QUFLQSxtQkFBT0EsZUFBUDtBQUNIO0FBZEw7QUFBQTtBQUFBLDBDQWVzQjs7QUFFZCxpQkFBS0UsWUFBTCxDQUFrQixLQUFLSixnQkFBdkI7QUFDSDtBQWxCTDtBQUFBO0FBQUEsMkNBbUJ1QmpQLEdBbkJ2QixFQW1CNEI0QixJQW5CNUIsRUFtQmtDVyxNQW5CbEMsRUFtQjBDO0FBQ2xDdkMsZ0JBQUl3SSxRQUFKLEdBQWU1RyxJQUFmO0FBQ0E1QixnQkFBSXVDLE1BQUosR0FBYUEsTUFBYjtBQUNBdkMsZ0JBQUlvUCxTQUFKLEdBQWdCLElBQWhCOztBQUVBLGdCQUFJLEtBQUtFLGlCQUFULEVBQTRCO0FBQ3hCLHFCQUFLQSxpQkFBTCxDQUF1QnRQLElBQUl1QyxNQUEzQixFQUFtQ3ZDLElBQUl1UCxLQUF2QztBQUNIO0FBQ0o7QUEzQkw7QUFBQTtBQUFBLHdDQTRCb0JyQixLQTVCcEIsRUE0QjJCMUUsT0E1QjNCLEVBNEJvQztBQUFBOztBQUM1QixnQkFBSXhKLE1BQU07QUFDTnVQLHVCQUFPckIsS0FERDtBQUVOa0IsMkJBQVcsS0FGTDtBQUdON00sd0JBQVE7QUFIRixhQUFWOztBQU1BaUgsb0JBQ0NDLElBREQsQ0FDTSxVQUFDN0gsSUFBRCxFQUFVO0FBQ1osc0JBQUs0TixrQkFBTCxDQUF3QnhQLEdBQXhCLEVBQTZCNEIsSUFBN0IsRUFBbUMsb0VBQW5DO0FBQ0Esc0JBQUs2TixlQUFMO0FBQ0gsYUFKRCxFQUlHQyxLQUpILENBSVMsVUFBQ3pGLEtBQUQsRUFBVztBQUNoQixzQkFBS3VGLGtCQUFMLENBQXdCeFAsR0FBeEIsRUFBNkJpSyxLQUE3QixFQUFvQyxpRUFBcEM7QUFDQSxzQkFBS3dGLGVBQUw7QUFDSCxhQVBEO0FBUUEsaUJBQUtSLGdCQUFMLENBQXNCNUssSUFBdEIsQ0FBMkJyRSxHQUEzQjtBQUNIO0FBNUNMO0FBQUE7QUFBQSx5Q0E2Q3FCO0FBQ2I7QUFDQTtBQUNBLGdCQUFJbVAsa0JBQWtCLEtBQUtRLHFCQUFMLEVBQXRCOztBQUVBLGdCQUFJLEtBQUtDLFVBQUwsQ0FBZ0J4UCxNQUFoQixLQUEyQixDQUEzQixJQUFnQytPLG9CQUFvQixLQUFLRCxlQUE3RCxFQUE4RTtBQUMxRTtBQUNBO0FBQ0E7QUFDSDtBQUNEO0FBQ0EsZ0JBQUlXLHFCQUFxQixLQUFLWixnQkFBTCxDQUFzQjdPLE1BQS9DO0FBQUEsZ0JBQ0kwUCxvQkFBb0IsS0FBS0YsVUFBTCxDQUFnQkcsS0FBaEIsRUFEeEI7QUFBQSxnQkFFSUMsY0FBYyxLQUFLQyxlQUFMLENBQXFCSCxpQkFBckIsRUFBd0NELGtCQUF4QyxDQUZsQjs7QUFJQSxnQkFBSSxFQUFFRyx1QkFBdUJ6SixPQUF6QixDQUFKLEVBQXVDO0FBQ25DO0FBQ0Esc0JBQU0sSUFBSXBELEtBQUosQ0FBVSxzRkFBVixDQUFOO0FBQ0g7QUFDRDtBQUNBLGlCQUFLK00sZUFBTCxDQUFxQkwsa0JBQXJCLEVBQXlDRyxXQUF6QztBQUNBLGlCQUFLRyxjQUFMO0FBQ0g7QUFuRUw7QUFBQTtBQUFBLDBDQW9Fc0I7QUFDZDtBQUNBLGdCQUFJaEIsa0JBQWtCLEtBQUtRLHFCQUFMLEVBQXRCO0FBQ0EsZ0JBQUlSLG9CQUFvQixDQUFwQixJQUF5QixLQUFLUyxVQUFMLENBQWdCeFAsTUFBaEIsS0FBMkIsQ0FBeEQsRUFBMkQ7QUFDdkQ7QUFDQSxxQkFBS2dRLGVBQUw7QUFDQTtBQUNIO0FBQ0Q7QUFDQSxpQkFBS0QsY0FBTDtBQUNIO0FBOUVMO0FBQUE7QUFBQSwwQ0ErRXNCO0FBQ2Qsa0JBQU0sSUFBSWhOLEtBQUosQ0FBVSxtRUFBVixDQUFOO0FBQ0g7QUFDRDs7Ozs7O0FBbEZKO0FBQUE7QUFBQSwyQ0F1RnVCa04sRUF2RnZCLEVBdUYyQjtBQUNuQjs7Ozs7Ozs7QUFRQSxpQkFBS2YsaUJBQUwsR0FBeUJlLEVBQXpCO0FBQ0g7QUFDRDs7Ozs7OztBQWxHSjtBQUFBO0FBQUEsMkNBd0d1QkEsRUF4R3ZCLEVBd0cyQjtBQUNuQjs7Ozs7Ozs7O0FBU0EsaUJBQUtKLGVBQUwsR0FBdUJJLEVBQXZCO0FBQ0g7QUFDRDs7Ozs7QUFwSEo7QUFBQTtBQUFBLG1EQXdIK0JDLEtBeEgvQixFQXdIc0M7QUFDOUIsaUJBQUtwQixlQUFMLEdBQXVCb0IsS0FBdkI7QUFDSDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7QUEzSEo7QUFBQTtBQUFBLDZCQXlJUzFDLGNBeklULEVBeUl5QjtBQUFBOztBQUNqQixnQkFBSSxDQUFFOUssTUFBTTlFLE9BQU4sQ0FBYzRQLGNBQWQsQ0FBTixFQUFzQztBQUNsQyxzQkFBTSxJQUFJekssS0FBSixDQUFVLDZFQUFWLENBQU47QUFDSDtBQUNELGlCQUFLeU0sVUFBTCxHQUFrQmhDLGNBQWxCOztBQUVBLG1CQUFPLElBQUlySCxPQUFKLENBQVksVUFBQ0UsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLHVCQUFLMkksWUFBTCxHQUFvQjVJLE9BQXBCO0FBQ0EsdUJBQUs4SixXQUFMLEdBQW1CN0osTUFBbkI7O0FBRUEsdUJBQUt5SixjQUFMO0FBQ0gsYUFMTSxDQUFQO0FBT0g7QUF0Skw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7QUNQTyxJQUFNSyxxQ0FBcUMsMEhBQTNDO0FBQ0EsSUFBTUMsbUJBQW1CLFNBQXpCO0FBQ0EsSUFBTUMsZ0JBQWdCLE1BQXRCO0FBQ0EsSUFBTUMsa0JBQWtCLHNGQUF4QjtBQUNBLElBQU1DLDRCQUE0QixnREFBbEMsQzs7Ozs7O0FDSlA5UCxPQUFPQyxPQUFQLEdBQWlCLG1CQUFBcEQsQ0FBUSxFQUFSLENBQWpCLEM7Ozs7Ozs7QUNBQTs7QUFFQSxJQUFJcUQsUUFBUSxtQkFBQXJELENBQVEsQ0FBUixDQUFaO0FBQ0EsSUFBSUQsT0FBTyxtQkFBQUMsQ0FBUSxDQUFSLENBQVg7QUFDQSxJQUFJa1QsUUFBUSxtQkFBQWxULENBQVEsRUFBUixDQUFaO0FBQ0EsSUFBSStELFdBQVcsbUJBQUEvRCxDQUFRLENBQVIsQ0FBZjs7QUFFQTs7Ozs7O0FBTUEsU0FBU21ULGNBQVQsQ0FBd0JDLGFBQXhCLEVBQXVDO0FBQ3JDLE1BQUkxRSxVQUFVLElBQUl3RSxLQUFKLENBQVVFLGFBQVYsQ0FBZDtBQUNBLE1BQUlDLFdBQVd0VCxLQUFLbVQsTUFBTTlTLFNBQU4sQ0FBZ0I4SSxPQUFyQixFQUE4QndGLE9BQTlCLENBQWY7O0FBRUE7QUFDQXJMLFFBQU1OLE1BQU4sQ0FBYXNRLFFBQWIsRUFBdUJILE1BQU05UyxTQUE3QixFQUF3Q3NPLE9BQXhDOztBQUVBO0FBQ0FyTCxRQUFNTixNQUFOLENBQWFzUSxRQUFiLEVBQXVCM0UsT0FBdkI7O0FBRUEsU0FBTzJFLFFBQVA7QUFDRDs7QUFFRDtBQUNBLElBQUlwQyxRQUFRa0MsZUFBZXBQLFFBQWYsQ0FBWjs7QUFFQTtBQUNBa04sTUFBTWlDLEtBQU4sR0FBY0EsS0FBZDs7QUFFQTtBQUNBakMsTUFBTXFDLE1BQU4sR0FBZSxTQUFTQSxNQUFULENBQWdCQyxjQUFoQixFQUFnQztBQUM3QyxTQUFPSixlQUFlOVAsTUFBTVQsS0FBTixDQUFZbUIsUUFBWixFQUFzQndQLGNBQXRCLENBQWYsQ0FBUDtBQUNELENBRkQ7O0FBSUE7QUFDQXRDLE1BQU14RSxNQUFOLEdBQWUsbUJBQUF6TSxDQUFRLENBQVIsQ0FBZjtBQUNBaVIsTUFBTXVDLFdBQU4sR0FBb0IsbUJBQUF4VCxDQUFRLEVBQVIsQ0FBcEI7QUFDQWlSLE1BQU0xRSxRQUFOLEdBQWlCLG1CQUFBdk0sQ0FBUSxDQUFSLENBQWpCOztBQUVBO0FBQ0FpUixNQUFNd0MsR0FBTixHQUFZLFNBQVNBLEdBQVQsQ0FBYUMsUUFBYixFQUF1QjtBQUNqQyxTQUFPOUssUUFBUTZLLEdBQVIsQ0FBWUMsUUFBWixDQUFQO0FBQ0QsQ0FGRDtBQUdBekMsTUFBTTBDLE1BQU4sR0FBZSxtQkFBQTNULENBQVEsRUFBUixDQUFmOztBQUVBbUQsT0FBT0MsT0FBUCxHQUFpQjZOLEtBQWpCOztBQUVBO0FBQ0E5TixPQUFPQyxPQUFQLENBQWV3USxPQUFmLEdBQXlCM0MsS0FBekIsQzs7Ozs7O0FDbkRBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBOU4sT0FBT0MsT0FBUCxHQUFpQixVQUFVZixHQUFWLEVBQWU7QUFDOUIsU0FBT0EsT0FBTyxJQUFQLEtBQWdCcEMsU0FBU29DLEdBQVQsS0FBaUJ3UixhQUFheFIsR0FBYixDQUFqQixJQUFzQyxDQUFDLENBQUNBLElBQUl5UixTQUE1RCxDQUFQO0FBQ0QsQ0FGRDs7QUFJQSxTQUFTN1QsUUFBVCxDQUFtQm9DLEdBQW5CLEVBQXdCO0FBQ3RCLFNBQU8sQ0FBQyxDQUFDQSxJQUFJMFIsV0FBTixJQUFxQixPQUFPMVIsSUFBSTBSLFdBQUosQ0FBZ0I5VCxRQUF2QixLQUFvQyxVQUF6RCxJQUF1RW9DLElBQUkwUixXQUFKLENBQWdCOVQsUUFBaEIsQ0FBeUJvQyxHQUF6QixDQUE5RTtBQUNEOztBQUVEO0FBQ0EsU0FBU3dSLFlBQVQsQ0FBdUJ4UixHQUF2QixFQUE0QjtBQUMxQixTQUFPLE9BQU9BLElBQUkyUixXQUFYLEtBQTJCLFVBQTNCLElBQXlDLE9BQU8zUixJQUFJNFIsS0FBWCxLQUFxQixVQUE5RCxJQUE0RWhVLFNBQVNvQyxJQUFJNFIsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBQVQsQ0FBbkY7QUFDRCxDOzs7Ozs7O0FDcEJEOztBQUVBLElBQUlsUSxXQUFXLG1CQUFBL0QsQ0FBUSxDQUFSLENBQWY7QUFDQSxJQUFJcUQsUUFBUSxtQkFBQXJELENBQVEsQ0FBUixDQUFaO0FBQ0EsSUFBSWtVLHFCQUFxQixtQkFBQWxVLENBQVEsRUFBUixDQUF6QjtBQUNBLElBQUltVSxrQkFBa0IsbUJBQUFuVSxDQUFRLEVBQVIsQ0FBdEI7QUFDQSxJQUFJb1UsZ0JBQWdCLG1CQUFBcFUsQ0FBUSxFQUFSLENBQXBCO0FBQ0EsSUFBSXFVLGNBQWMsbUJBQUFyVSxDQUFRLEVBQVIsQ0FBbEI7O0FBRUE7Ozs7O0FBS0EsU0FBU2tULEtBQVQsQ0FBZUssY0FBZixFQUErQjtBQUM3QixPQUFLeFAsUUFBTCxHQUFnQndQLGNBQWhCO0FBQ0EsT0FBS2UsWUFBTCxHQUFvQjtBQUNsQnBMLGFBQVMsSUFBSWdMLGtCQUFKLEVBRFM7QUFFbEJySixjQUFVLElBQUlxSixrQkFBSjtBQUZRLEdBQXBCO0FBSUQ7O0FBRUQ7Ozs7O0FBS0FoQixNQUFNOVMsU0FBTixDQUFnQjhJLE9BQWhCLEdBQTBCLFNBQVNBLE9BQVQsQ0FBaUJQLE1BQWpCLEVBQXlCO0FBQ2pEO0FBQ0E7QUFDQSxNQUFJLE9BQU9BLE1BQVAsS0FBa0IsUUFBdEIsRUFBZ0M7QUFDOUJBLGFBQVN0RixNQUFNVCxLQUFOLENBQVk7QUFDbkIyRyxXQUFLekcsVUFBVSxDQUFWO0FBRGMsS0FBWixFQUVOQSxVQUFVLENBQVYsQ0FGTSxDQUFUO0FBR0Q7O0FBRUQ2RixXQUFTdEYsTUFBTVQsS0FBTixDQUFZbUIsUUFBWixFQUFzQixLQUFLQSxRQUEzQixFQUFxQyxFQUFFZ0IsUUFBUSxLQUFWLEVBQXJDLEVBQXdENEQsTUFBeEQsQ0FBVDtBQUNBQSxTQUFPNUQsTUFBUCxHQUFnQjRELE9BQU81RCxNQUFQLENBQWN3RyxXQUFkLEVBQWhCOztBQUVBO0FBQ0EsTUFBSTVDLE9BQU80TCxPQUFQLElBQWtCLENBQUNILGNBQWN6TCxPQUFPWSxHQUFyQixDQUF2QixFQUFrRDtBQUNoRFosV0FBT1ksR0FBUCxHQUFhOEssWUFBWTFMLE9BQU80TCxPQUFuQixFQUE0QjVMLE9BQU9ZLEdBQW5DLENBQWI7QUFDRDs7QUFFRDtBQUNBLE1BQUlpTCxRQUFRLENBQUNMLGVBQUQsRUFBa0I5SSxTQUFsQixDQUFaO0FBQ0EsTUFBSVEsVUFBVWpELFFBQVFFLE9BQVIsQ0FBZ0JILE1BQWhCLENBQWQ7O0FBRUEsT0FBSzJMLFlBQUwsQ0FBa0JwTCxPQUFsQixDQUEwQjlHLE9BQTFCLENBQWtDLFNBQVNxUywwQkFBVCxDQUFvQ0MsV0FBcEMsRUFBaUQ7QUFDakZGLFVBQU1HLE9BQU4sQ0FBY0QsWUFBWUUsU0FBMUIsRUFBcUNGLFlBQVlHLFFBQWpEO0FBQ0QsR0FGRDs7QUFJQSxPQUFLUCxZQUFMLENBQWtCekosUUFBbEIsQ0FBMkJ6SSxPQUEzQixDQUFtQyxTQUFTMFMsd0JBQVQsQ0FBa0NKLFdBQWxDLEVBQStDO0FBQ2hGRixVQUFNOU4sSUFBTixDQUFXZ08sWUFBWUUsU0FBdkIsRUFBa0NGLFlBQVlHLFFBQTlDO0FBQ0QsR0FGRDs7QUFJQSxTQUFPTCxNQUFNL1IsTUFBYixFQUFxQjtBQUNuQm9KLGNBQVVBLFFBQVFDLElBQVIsQ0FBYTBJLE1BQU1wQyxLQUFOLEVBQWIsRUFBNEJvQyxNQUFNcEMsS0FBTixFQUE1QixDQUFWO0FBQ0Q7O0FBRUQsU0FBT3ZHLE9BQVA7QUFDRCxDQWxDRDs7QUFvQ0E7QUFDQXhJLE1BQU1qQixPQUFOLENBQWMsQ0FBQyxRQUFELEVBQVcsS0FBWCxFQUFrQixNQUFsQixFQUEwQixTQUExQixDQUFkLEVBQW9ELFNBQVMwQyxtQkFBVCxDQUE2QkMsTUFBN0IsRUFBcUM7QUFDdkY7QUFDQW1PLFFBQU05UyxTQUFOLENBQWdCMkUsTUFBaEIsSUFBMEIsVUFBU3dFLEdBQVQsRUFBY1osTUFBZCxFQUFzQjtBQUM5QyxXQUFPLEtBQUtPLE9BQUwsQ0FBYTdGLE1BQU1ULEtBQU4sQ0FBWStGLFVBQVUsRUFBdEIsRUFBMEI7QUFDNUM1RCxjQUFRQSxNQURvQztBQUU1Q3dFLFdBQUtBO0FBRnVDLEtBQTFCLENBQWIsQ0FBUDtBQUlELEdBTEQ7QUFNRCxDQVJEOztBQVVBbEcsTUFBTWpCLE9BQU4sQ0FBYyxDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLE9BQWhCLENBQWQsRUFBd0MsU0FBUzRDLHFCQUFULENBQStCRCxNQUEvQixFQUF1QztBQUM3RTtBQUNBbU8sUUFBTTlTLFNBQU4sQ0FBZ0IyRSxNQUFoQixJQUEwQixVQUFTd0UsR0FBVCxFQUFjdEYsSUFBZCxFQUFvQjBFLE1BQXBCLEVBQTRCO0FBQ3BELFdBQU8sS0FBS08sT0FBTCxDQUFhN0YsTUFBTVQsS0FBTixDQUFZK0YsVUFBVSxFQUF0QixFQUEwQjtBQUM1QzVELGNBQVFBLE1BRG9DO0FBRTVDd0UsV0FBS0EsR0FGdUM7QUFHNUN0RixZQUFNQTtBQUhzQyxLQUExQixDQUFiLENBQVA7QUFLRCxHQU5EO0FBT0QsQ0FURDs7QUFXQWQsT0FBT0MsT0FBUCxHQUFpQjhQLEtBQWpCLEM7Ozs7Ozs7QUNyRkE7O0FBRUEsSUFBSTdQLFFBQVEsbUJBQUFyRCxDQUFRLENBQVIsQ0FBWjs7QUFFQW1ELE9BQU9DLE9BQVAsR0FBaUIsU0FBU0UsbUJBQVQsQ0FBNkJHLE9BQTdCLEVBQXNDc1IsY0FBdEMsRUFBc0Q7QUFDckUxUixRQUFNakIsT0FBTixDQUFjcUIsT0FBZCxFQUF1QixTQUFTdVIsYUFBVCxDQUF1QnRSLEtBQXZCLEVBQThCb0UsSUFBOUIsRUFBb0M7QUFDekQsUUFBSUEsU0FBU2lOLGNBQVQsSUFBMkJqTixLQUFLbUMsV0FBTCxPQUF1QjhLLGVBQWU5SyxXQUFmLEVBQXRELEVBQW9GO0FBQ2xGeEcsY0FBUXNSLGNBQVIsSUFBMEJyUixLQUExQjtBQUNBLGFBQU9ELFFBQVFxRSxJQUFSLENBQVA7QUFDRDtBQUNGLEdBTEQ7QUFNRCxDQVBELEM7Ozs7Ozs7QUNKQTs7QUFFQSxJQUFJVSxjQUFjLG1CQUFBeEksQ0FBUSxDQUFSLENBQWxCOztBQUVBOzs7Ozs7O0FBT0FtRCxPQUFPQyxPQUFQLEdBQWlCLFNBQVNnRixNQUFULENBQWdCVSxPQUFoQixFQUF5QkMsTUFBekIsRUFBaUM4QixRQUFqQyxFQUEyQztBQUMxRCxNQUFJbEcsaUJBQWlCa0csU0FBU2xDLE1BQVQsQ0FBZ0JoRSxjQUFyQztBQUNBO0FBQ0EsTUFBSSxDQUFDa0csU0FBU2pHLE1BQVYsSUFBb0IsQ0FBQ0QsY0FBckIsSUFBdUNBLGVBQWVrRyxTQUFTakcsTUFBeEIsQ0FBM0MsRUFBNEU7QUFDMUVrRSxZQUFRK0IsUUFBUjtBQUNELEdBRkQsTUFFTztBQUNMOUIsV0FBT1AsWUFDTCxxQ0FBcUNxQyxTQUFTakcsTUFEekMsRUFFTGlHLFNBQVNsQyxNQUZKLEVBR0wsSUFISyxFQUlMa0MsU0FBUzNCLE9BSkosRUFLTDJCLFFBTEssQ0FBUDtBQU9EO0FBQ0YsQ0FkRCxDOzs7Ozs7O0FDWEE7O0FBRUE7Ozs7Ozs7Ozs7O0FBVUExSCxPQUFPQyxPQUFQLEdBQWlCLFNBQVMrSSxZQUFULENBQXNCRyxLQUF0QixFQUE2QjNELE1BQTdCLEVBQXFDMEQsSUFBckMsRUFBMkNuRCxPQUEzQyxFQUFvRDJCLFFBQXBELEVBQThEO0FBQzdFeUIsUUFBTTNELE1BQU4sR0FBZUEsTUFBZjtBQUNBLE1BQUkwRCxJQUFKLEVBQVU7QUFDUkMsVUFBTUQsSUFBTixHQUFhQSxJQUFiO0FBQ0Q7QUFDREMsUUFBTXBELE9BQU4sR0FBZ0JBLE9BQWhCO0FBQ0FvRCxRQUFNekIsUUFBTixHQUFpQkEsUUFBakI7QUFDQSxTQUFPeUIsS0FBUDtBQUNELENBUkQsQzs7Ozs7OztBQ1pBOztBQUVBLElBQUlqSixRQUFRLG1CQUFBckQsQ0FBUSxDQUFSLENBQVo7O0FBRUEsU0FBU2lWLE1BQVQsQ0FBZ0IzVSxHQUFoQixFQUFxQjtBQUNuQixTQUFPNFUsbUJBQW1CNVUsR0FBbkIsRUFDTHdCLE9BREssQ0FDRyxPQURILEVBQ1ksR0FEWixFQUVMQSxPQUZLLENBRUcsT0FGSCxFQUVZLEdBRlosRUFHTEEsT0FISyxDQUdHLE1BSEgsRUFHVyxHQUhYLEVBSUxBLE9BSkssQ0FJRyxPQUpILEVBSVksR0FKWixFQUtMQSxPQUxLLENBS0csTUFMSCxFQUtXLEdBTFgsRUFNTEEsT0FOSyxDQU1HLE9BTkgsRUFNWSxHQU5aLEVBT0xBLE9BUEssQ0FPRyxPQVBILEVBT1ksR0FQWixDQUFQO0FBUUQ7O0FBRUQ7Ozs7Ozs7QUFPQXFCLE9BQU9DLE9BQVAsR0FBaUIsU0FBU2lGLFFBQVQsQ0FBa0JrQixHQUFsQixFQUF1QlcsTUFBdkIsRUFBK0JDLGdCQUEvQixFQUFpRDtBQUNoRTtBQUNBLE1BQUksQ0FBQ0QsTUFBTCxFQUFhO0FBQ1gsV0FBT1gsR0FBUDtBQUNEOztBQUVELE1BQUk0TCxnQkFBSjtBQUNBLE1BQUloTCxnQkFBSixFQUFzQjtBQUNwQmdMLHVCQUFtQmhMLGlCQUFpQkQsTUFBakIsQ0FBbkI7QUFDRCxHQUZELE1BRU8sSUFBSTdHLE1BQU0zQixpQkFBTixDQUF3QndJLE1BQXhCLENBQUosRUFBcUM7QUFDMUNpTCx1QkFBbUJqTCxPQUFPaEssUUFBUCxFQUFuQjtBQUNELEdBRk0sTUFFQTtBQUNMLFFBQUlrVixRQUFRLEVBQVo7O0FBRUEvUixVQUFNakIsT0FBTixDQUFjOEgsTUFBZCxFQUFzQixTQUFTbUwsU0FBVCxDQUFtQi9VLEdBQW5CLEVBQXdCb0MsR0FBeEIsRUFBNkI7QUFDakQsVUFBSXBDLFFBQVEsSUFBUixJQUFnQixPQUFPQSxHQUFQLEtBQWUsV0FBbkMsRUFBZ0Q7QUFDOUM7QUFDRDs7QUFFRCxVQUFJK0MsTUFBTWhELE9BQU4sQ0FBY0MsR0FBZCxDQUFKLEVBQXdCO0FBQ3RCb0MsY0FBTUEsTUFBTSxJQUFaO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDVyxNQUFNaEQsT0FBTixDQUFjQyxHQUFkLENBQUwsRUFBeUI7QUFDdkJBLGNBQU0sQ0FBQ0EsR0FBRCxDQUFOO0FBQ0Q7O0FBRUQrQyxZQUFNakIsT0FBTixDQUFjOUIsR0FBZCxFQUFtQixTQUFTZ1YsVUFBVCxDQUFvQkMsQ0FBcEIsRUFBdUI7QUFDeEMsWUFBSWxTLE1BQU1qQyxNQUFOLENBQWFtVSxDQUFiLENBQUosRUFBcUI7QUFDbkJBLGNBQUlBLEVBQUVDLFdBQUYsRUFBSjtBQUNELFNBRkQsTUFFTyxJQUFJblMsTUFBTWxDLFFBQU4sQ0FBZW9VLENBQWYsQ0FBSixFQUF1QjtBQUM1QkEsY0FBSXJSLEtBQUtDLFNBQUwsQ0FBZW9SLENBQWYsQ0FBSjtBQUNEO0FBQ0RILGNBQU0xTyxJQUFOLENBQVd1TyxPQUFPdlMsR0FBUCxJQUFjLEdBQWQsR0FBb0J1UyxPQUFPTSxDQUFQLENBQS9CO0FBQ0QsT0FQRDtBQVFELEtBckJEOztBQXVCQUosdUJBQW1CQyxNQUFNSyxJQUFOLENBQVcsR0FBWCxDQUFuQjtBQUNEOztBQUVELE1BQUlOLGdCQUFKLEVBQXNCO0FBQ3BCNUwsV0FBTyxDQUFDQSxJQUFJZ0IsT0FBSixDQUFZLEdBQVosTUFBcUIsQ0FBQyxDQUF0QixHQUEwQixHQUExQixHQUFnQyxHQUFqQyxJQUF3QzRLLGdCQUEvQztBQUNEOztBQUVELFNBQU81TCxHQUFQO0FBQ0QsQ0E3Q0QsQzs7Ozs7OztBQ3RCQTs7QUFFQSxJQUFJbEcsUUFBUSxtQkFBQXJELENBQVEsQ0FBUixDQUFaOztBQUVBOzs7Ozs7Ozs7Ozs7O0FBYUFtRCxPQUFPQyxPQUFQLEdBQWlCLFNBQVNrRixZQUFULENBQXNCN0UsT0FBdEIsRUFBK0I7QUFDOUMsTUFBSWlTLFNBQVMsRUFBYjtBQUNBLE1BQUloVCxHQUFKO0FBQ0EsTUFBSXBDLEdBQUo7QUFDQSxNQUFJaUMsQ0FBSjs7QUFFQSxNQUFJLENBQUNrQixPQUFMLEVBQWM7QUFBRSxXQUFPaVMsTUFBUDtBQUFnQjs7QUFFaENyUyxRQUFNakIsT0FBTixDQUFjcUIsUUFBUWtTLEtBQVIsQ0FBYyxJQUFkLENBQWQsRUFBbUMsU0FBU0MsTUFBVCxDQUFnQkMsSUFBaEIsRUFBc0I7QUFDdkR0VCxRQUFJc1QsS0FBS3RMLE9BQUwsQ0FBYSxHQUFiLENBQUo7QUFDQTdILFVBQU1XLE1BQU16QixJQUFOLENBQVdpVSxLQUFLQyxNQUFMLENBQVksQ0FBWixFQUFldlQsQ0FBZixDQUFYLEVBQThCZ0osV0FBOUIsRUFBTjtBQUNBakwsVUFBTStDLE1BQU16QixJQUFOLENBQVdpVSxLQUFLQyxNQUFMLENBQVl2VCxJQUFJLENBQWhCLENBQVgsQ0FBTjs7QUFFQSxRQUFJRyxHQUFKLEVBQVM7QUFDUGdULGFBQU9oVCxHQUFQLElBQWNnVCxPQUFPaFQsR0FBUCxJQUFjZ1QsT0FBT2hULEdBQVAsSUFBYyxJQUFkLEdBQXFCcEMsR0FBbkMsR0FBeUNBLEdBQXZEO0FBQ0Q7QUFDRixHQVJEOztBQVVBLFNBQU9vVixNQUFQO0FBQ0QsQ0FuQkQsQzs7Ozs7OztBQ2pCQTs7QUFFQSxJQUFJclMsUUFBUSxtQkFBQXJELENBQVEsQ0FBUixDQUFaOztBQUVBbUQsT0FBT0MsT0FBUCxHQUNFQyxNQUFNdEIsb0JBQU47O0FBRUE7QUFDQTtBQUNDLFNBQVNnVSxrQkFBVCxHQUE4QjtBQUM3QixNQUFJQyxPQUFPLGtCQUFrQkMsSUFBbEIsQ0FBdUJqVSxVQUFVa1UsU0FBakMsQ0FBWDtBQUNBLE1BQUlDLGlCQUFpQmhVLFNBQVNpVSxhQUFULENBQXVCLEdBQXZCLENBQXJCO0FBQ0EsTUFBSUMsU0FBSjs7QUFFQTs7Ozs7O0FBTUEsV0FBU0MsVUFBVCxDQUFvQi9NLEdBQXBCLEVBQXlCO0FBQ3ZCLFFBQUlnTixPQUFPaE4sR0FBWDs7QUFFQSxRQUFJeU0sSUFBSixFQUFVO0FBQ1I7QUFDQUcscUJBQWVLLFlBQWYsQ0FBNEIsTUFBNUIsRUFBb0NELElBQXBDO0FBQ0FBLGFBQU9KLGVBQWVJLElBQXRCO0FBQ0Q7O0FBRURKLG1CQUFlSyxZQUFmLENBQTRCLE1BQTVCLEVBQW9DRCxJQUFwQzs7QUFFQTtBQUNBLFdBQU87QUFDTEEsWUFBTUosZUFBZUksSUFEaEI7QUFFTEUsZ0JBQVVOLGVBQWVNLFFBQWYsR0FBMEJOLGVBQWVNLFFBQWYsQ0FBd0IzVSxPQUF4QixDQUFnQyxJQUFoQyxFQUFzQyxFQUF0QyxDQUExQixHQUFzRSxFQUYzRTtBQUdMNFUsWUFBTVAsZUFBZU8sSUFIaEI7QUFJTEMsY0FBUVIsZUFBZVEsTUFBZixHQUF3QlIsZUFBZVEsTUFBZixDQUFzQjdVLE9BQXRCLENBQThCLEtBQTlCLEVBQXFDLEVBQXJDLENBQXhCLEdBQW1FLEVBSnRFO0FBS0w4VSxZQUFNVCxlQUFlUyxJQUFmLEdBQXNCVCxlQUFlUyxJQUFmLENBQW9COVUsT0FBcEIsQ0FBNEIsSUFBNUIsRUFBa0MsRUFBbEMsQ0FBdEIsR0FBOEQsRUFML0Q7QUFNTCtVLGdCQUFVVixlQUFlVSxRQU5wQjtBQU9MQyxZQUFNWCxlQUFlVyxJQVBoQjtBQVFMQyxnQkFBV1osZUFBZVksUUFBZixDQUF3QkMsTUFBeEIsQ0FBK0IsQ0FBL0IsTUFBc0MsR0FBdkMsR0FDQWIsZUFBZVksUUFEZixHQUVBLE1BQU1aLGVBQWVZO0FBVjFCLEtBQVA7QUFZRDs7QUFFRFYsY0FBWUMsV0FBV3BVLE9BQU8rVSxRQUFQLENBQWdCVixJQUEzQixDQUFaOztBQUVBOzs7Ozs7QUFNQSxTQUFPLFNBQVNoTyxlQUFULENBQXlCMk8sVUFBekIsRUFBcUM7QUFDMUMsUUFBSXhCLFNBQVVyUyxNQUFNckMsUUFBTixDQUFla1csVUFBZixDQUFELEdBQStCWixXQUFXWSxVQUFYLENBQS9CLEdBQXdEQSxVQUFyRTtBQUNBLFdBQVF4QixPQUFPZSxRQUFQLEtBQW9CSixVQUFVSSxRQUE5QixJQUNGZixPQUFPZ0IsSUFBUCxLQUFnQkwsVUFBVUssSUFEaEM7QUFFRCxHQUpEO0FBS0QsQ0FsREQsRUFKQTs7QUF3REE7QUFDQyxTQUFTUyxxQkFBVCxHQUFpQztBQUNoQyxTQUFPLFNBQVM1TyxlQUFULEdBQTJCO0FBQ2hDLFdBQU8sSUFBUDtBQUNELEdBRkQ7QUFHRCxDQUpELEVBMURGLEM7Ozs7Ozs7QUNKQTs7QUFFQTs7QUFFQSxJQUFJNk8sUUFBUSxtRUFBWjs7QUFFQSxTQUFTQyxDQUFULEdBQWE7QUFDWCxPQUFLakwsT0FBTCxHQUFlLHNDQUFmO0FBQ0Q7QUFDRGlMLEVBQUVqWCxTQUFGLEdBQWMsSUFBSW9GLEtBQUosRUFBZDtBQUNBNlIsRUFBRWpYLFNBQUYsQ0FBWWlNLElBQVosR0FBbUIsQ0FBbkI7QUFDQWdMLEVBQUVqWCxTQUFGLENBQVkwSCxJQUFaLEdBQW1CLHVCQUFuQjs7QUFFQSxTQUFTVyxJQUFULENBQWM2TyxLQUFkLEVBQXFCO0FBQ25CLE1BQUl6VixNQUFNMFYsT0FBT0QsS0FBUCxDQUFWO0FBQ0EsTUFBSUUsU0FBUyxFQUFiO0FBQ0E7QUFDRTtBQUNBLE1BQUlDLEtBQUosRUFBV0MsUUFBWCxFQUFxQkMsTUFBTSxDQUEzQixFQUE4QkMsTUFBTVIsS0FGdEM7QUFHRTtBQUNBO0FBQ0E7QUFDQXZWLE1BQUltVixNQUFKLENBQVdXLE1BQU0sQ0FBakIsTUFBd0JDLE1BQU0sR0FBTixFQUFXRCxNQUFNLENBQXpDLENBTkY7QUFPRTtBQUNBSCxZQUFVSSxJQUFJWixNQUFKLENBQVcsS0FBS1MsU0FBUyxJQUFJRSxNQUFNLENBQU4sR0FBVSxDQUF2QyxDQVJaLEVBU0U7QUFDQUQsZUFBVzdWLElBQUlnVyxVQUFKLENBQWVGLE9BQU8sSUFBSSxDQUExQixDQUFYO0FBQ0EsUUFBSUQsV0FBVyxJQUFmLEVBQXFCO0FBQ25CLFlBQU0sSUFBSUwsQ0FBSixFQUFOO0FBQ0Q7QUFDREksWUFBUUEsU0FBUyxDQUFULEdBQWFDLFFBQXJCO0FBQ0Q7QUFDRCxTQUFPRixNQUFQO0FBQ0Q7O0FBRURyVSxPQUFPQyxPQUFQLEdBQWlCcUYsSUFBakIsQzs7Ozs7OztBQ25DQTs7QUFFQSxJQUFJcEYsUUFBUSxtQkFBQXJELENBQVEsQ0FBUixDQUFaOztBQUVBbUQsT0FBT0MsT0FBUCxHQUNFQyxNQUFNdEIsb0JBQU47O0FBRUE7QUFDQyxTQUFTZ1Usa0JBQVQsR0FBOEI7QUFDN0IsU0FBTztBQUNMK0IsV0FBTyxTQUFTQSxLQUFULENBQWVoUSxJQUFmLEVBQXFCcEUsS0FBckIsRUFBNEJxVSxPQUE1QixFQUFxQ0MsSUFBckMsRUFBMkNDLE1BQTNDLEVBQW1EQyxNQUFuRCxFQUEyRDtBQUNoRSxVQUFJQyxTQUFTLEVBQWI7QUFDQUEsYUFBT3pSLElBQVAsQ0FBWW9CLE9BQU8sR0FBUCxHQUFhb04sbUJBQW1CeFIsS0FBbkIsQ0FBekI7O0FBRUEsVUFBSUwsTUFBTXBDLFFBQU4sQ0FBZThXLE9BQWYsQ0FBSixFQUE2QjtBQUMzQkksZUFBT3pSLElBQVAsQ0FBWSxhQUFhLElBQUkwUixJQUFKLENBQVNMLE9BQVQsRUFBa0JNLFdBQWxCLEVBQXpCO0FBQ0Q7O0FBRUQsVUFBSWhWLE1BQU1yQyxRQUFOLENBQWVnWCxJQUFmLENBQUosRUFBMEI7QUFDeEJHLGVBQU96UixJQUFQLENBQVksVUFBVXNSLElBQXRCO0FBQ0Q7O0FBRUQsVUFBSTNVLE1BQU1yQyxRQUFOLENBQWVpWCxNQUFmLENBQUosRUFBNEI7QUFDMUJFLGVBQU96UixJQUFQLENBQVksWUFBWXVSLE1BQXhCO0FBQ0Q7O0FBRUQsVUFBSUMsV0FBVyxJQUFmLEVBQXFCO0FBQ25CQyxlQUFPelIsSUFBUCxDQUFZLFFBQVo7QUFDRDs7QUFFRHZFLGVBQVNnVyxNQUFULEdBQWtCQSxPQUFPMUMsSUFBUCxDQUFZLElBQVosQ0FBbEI7QUFDRCxLQXRCSTs7QUF3QkxySyxVQUFNLFNBQVNBLElBQVQsQ0FBY3RELElBQWQsRUFBb0I7QUFDeEIsVUFBSXdRLFFBQVFuVyxTQUFTZ1csTUFBVCxDQUFnQkcsS0FBaEIsQ0FBc0IsSUFBSUMsTUFBSixDQUFXLGVBQWV6USxJQUFmLEdBQXNCLFdBQWpDLENBQXRCLENBQVo7QUFDQSxhQUFRd1EsUUFBUUUsbUJBQW1CRixNQUFNLENBQU4sQ0FBbkIsQ0FBUixHQUF1QyxJQUEvQztBQUNELEtBM0JJOztBQTZCTEcsWUFBUSxTQUFTQSxNQUFULENBQWdCM1EsSUFBaEIsRUFBc0I7QUFDNUIsV0FBS2dRLEtBQUwsQ0FBV2hRLElBQVgsRUFBaUIsRUFBakIsRUFBcUJzUSxLQUFLTSxHQUFMLEtBQWEsUUFBbEM7QUFDRDtBQS9CSSxHQUFQO0FBaUNELENBbENELEVBSEE7O0FBdUNBO0FBQ0MsU0FBU3ZCLHFCQUFULEdBQWlDO0FBQ2hDLFNBQU87QUFDTFcsV0FBTyxTQUFTQSxLQUFULEdBQWlCLENBQUUsQ0FEckI7QUFFTDFNLFVBQU0sU0FBU0EsSUFBVCxHQUFnQjtBQUFFLGFBQU8sSUFBUDtBQUFjLEtBRmpDO0FBR0xxTixZQUFRLFNBQVNBLE1BQVQsR0FBa0IsQ0FBRTtBQUh2QixHQUFQO0FBS0QsQ0FORCxFQXpDRixDOzs7Ozs7O0FDSkE7O0FBRUEsSUFBSXBWLFFBQVEsbUJBQUFyRCxDQUFRLENBQVIsQ0FBWjs7QUFFQSxTQUFTa1Usa0JBQVQsR0FBOEI7QUFDNUIsT0FBS3lFLFFBQUwsR0FBZ0IsRUFBaEI7QUFDRDs7QUFFRDs7Ozs7Ozs7QUFRQXpFLG1CQUFtQjlULFNBQW5CLENBQTZCd1ksR0FBN0IsR0FBbUMsU0FBU0EsR0FBVCxDQUFhaEUsU0FBYixFQUF3QkMsUUFBeEIsRUFBa0M7QUFDbkUsT0FBSzhELFFBQUwsQ0FBY2pTLElBQWQsQ0FBbUI7QUFDakJrTyxlQUFXQSxTQURNO0FBRWpCQyxjQUFVQTtBQUZPLEdBQW5CO0FBSUEsU0FBTyxLQUFLOEQsUUFBTCxDQUFjbFcsTUFBZCxHQUF1QixDQUE5QjtBQUNELENBTkQ7O0FBUUE7Ozs7O0FBS0F5UixtQkFBbUI5VCxTQUFuQixDQUE2QnlZLEtBQTdCLEdBQXFDLFNBQVNBLEtBQVQsQ0FBZTlJLEVBQWYsRUFBbUI7QUFDdEQsTUFBSSxLQUFLNEksUUFBTCxDQUFjNUksRUFBZCxDQUFKLEVBQXVCO0FBQ3JCLFNBQUs0SSxRQUFMLENBQWM1SSxFQUFkLElBQW9CLElBQXBCO0FBQ0Q7QUFDRixDQUpEOztBQU1BOzs7Ozs7OztBQVFBbUUsbUJBQW1COVQsU0FBbkIsQ0FBNkJnQyxPQUE3QixHQUF1QyxTQUFTQSxPQUFULENBQWlCRSxFQUFqQixFQUFxQjtBQUMxRGUsUUFBTWpCLE9BQU4sQ0FBYyxLQUFLdVcsUUFBbkIsRUFBNkIsU0FBU0csY0FBVCxDQUF3QkMsQ0FBeEIsRUFBMkI7QUFDdEQsUUFBSUEsTUFBTSxJQUFWLEVBQWdCO0FBQ2R6VyxTQUFHeVcsQ0FBSDtBQUNEO0FBQ0YsR0FKRDtBQUtELENBTkQ7O0FBUUE1VixPQUFPQyxPQUFQLEdBQWlCOFEsa0JBQWpCLEM7Ozs7Ozs7QUNuREE7O0FBRUEsSUFBSTdRLFFBQVEsbUJBQUFyRCxDQUFRLENBQVIsQ0FBWjtBQUNBLElBQUlnWixnQkFBZ0IsbUJBQUFoWixDQUFRLEVBQVIsQ0FBcEI7QUFDQSxJQUFJdU0sV0FBVyxtQkFBQXZNLENBQVEsQ0FBUixDQUFmO0FBQ0EsSUFBSStELFdBQVcsbUJBQUEvRCxDQUFRLENBQVIsQ0FBZjs7QUFFQTs7O0FBR0EsU0FBU2laLDRCQUFULENBQXNDdFEsTUFBdEMsRUFBOEM7QUFDNUMsTUFBSUEsT0FBT2lELFdBQVgsRUFBd0I7QUFDdEJqRCxXQUFPaUQsV0FBUCxDQUFtQnNOLGdCQUFuQjtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7OztBQU1BL1YsT0FBT0MsT0FBUCxHQUFpQixTQUFTK1EsZUFBVCxDQUF5QnhMLE1BQXpCLEVBQWlDO0FBQ2hEc1EsK0JBQTZCdFEsTUFBN0I7O0FBRUE7QUFDQUEsU0FBT2xGLE9BQVAsR0FBaUJrRixPQUFPbEYsT0FBUCxJQUFrQixFQUFuQzs7QUFFQTtBQUNBa0YsU0FBTzFFLElBQVAsR0FBYytVLGNBQ1pyUSxPQUFPMUUsSUFESyxFQUVaMEUsT0FBT2xGLE9BRkssRUFHWmtGLE9BQU8zRSxnQkFISyxDQUFkOztBQU1BO0FBQ0EyRSxTQUFPbEYsT0FBUCxHQUFpQkosTUFBTVQsS0FBTixDQUNmK0YsT0FBT2xGLE9BQVAsQ0FBZW9CLE1BQWYsSUFBeUIsRUFEVixFQUVmOEQsT0FBT2xGLE9BQVAsQ0FBZWtGLE9BQU81RCxNQUF0QixLQUFpQyxFQUZsQixFQUdmNEQsT0FBT2xGLE9BQVAsSUFBa0IsRUFISCxDQUFqQjs7QUFNQUosUUFBTWpCLE9BQU4sQ0FDRSxDQUFDLFFBQUQsRUFBVyxLQUFYLEVBQWtCLE1BQWxCLEVBQTBCLE1BQTFCLEVBQWtDLEtBQWxDLEVBQXlDLE9BQXpDLEVBQWtELFFBQWxELENBREYsRUFFRSxTQUFTK1csaUJBQVQsQ0FBMkJwVSxNQUEzQixFQUFtQztBQUNqQyxXQUFPNEQsT0FBT2xGLE9BQVAsQ0FBZXNCLE1BQWYsQ0FBUDtBQUNELEdBSkg7O0FBT0EsTUFBSW5CLFVBQVUrRSxPQUFPL0UsT0FBUCxJQUFrQkcsU0FBU0gsT0FBekM7O0FBRUEsU0FBT0EsUUFBUStFLE1BQVIsRUFBZ0JtRCxJQUFoQixDQUFxQixTQUFTc04sbUJBQVQsQ0FBNkJ2TyxRQUE3QixFQUF1QztBQUNqRW9PLGlDQUE2QnRRLE1BQTdCOztBQUVBO0FBQ0FrQyxhQUFTNUcsSUFBVCxHQUFnQitVLGNBQ2RuTyxTQUFTNUcsSUFESyxFQUVkNEcsU0FBU3BILE9BRkssRUFHZGtGLE9BQU92RSxpQkFITyxDQUFoQjs7QUFNQSxXQUFPeUcsUUFBUDtBQUNELEdBWE0sRUFXSixTQUFTd08sa0JBQVQsQ0FBNEJDLE1BQTVCLEVBQW9DO0FBQ3JDLFFBQUksQ0FBQy9NLFNBQVMrTSxNQUFULENBQUwsRUFBdUI7QUFDckJMLG1DQUE2QnRRLE1BQTdCOztBQUVBO0FBQ0EsVUFBSTJRLFVBQVVBLE9BQU96TyxRQUFyQixFQUErQjtBQUM3QnlPLGVBQU96TyxRQUFQLENBQWdCNUcsSUFBaEIsR0FBdUIrVSxjQUNyQk0sT0FBT3pPLFFBQVAsQ0FBZ0I1RyxJQURLLEVBRXJCcVYsT0FBT3pPLFFBQVAsQ0FBZ0JwSCxPQUZLLEVBR3JCa0YsT0FBT3ZFLGlCQUhjLENBQXZCO0FBS0Q7QUFDRjs7QUFFRCxXQUFPd0UsUUFBUUcsTUFBUixDQUFldVEsTUFBZixDQUFQO0FBQ0QsR0ExQk0sQ0FBUDtBQTJCRCxDQXhERCxDOzs7Ozs7O0FDdEJBOztBQUVBLElBQUlqVyxRQUFRLG1CQUFBckQsQ0FBUSxDQUFSLENBQVo7O0FBRUE7Ozs7Ozs7O0FBUUFtRCxPQUFPQyxPQUFQLEdBQWlCLFNBQVM0VixhQUFULENBQXVCL1UsSUFBdkIsRUFBNkJSLE9BQTdCLEVBQXNDOFYsR0FBdEMsRUFBMkM7QUFDMUQ7QUFDQWxXLFFBQU1qQixPQUFOLENBQWNtWCxHQUFkLEVBQW1CLFNBQVNDLFNBQVQsQ0FBbUJsWCxFQUFuQixFQUF1QjtBQUN4QzJCLFdBQU8zQixHQUFHMkIsSUFBSCxFQUFTUixPQUFULENBQVA7QUFDRCxHQUZEOztBQUlBLFNBQU9RLElBQVA7QUFDRCxDQVBELEM7Ozs7Ozs7QUNaQTs7QUFFQTs7Ozs7OztBQU1BZCxPQUFPQyxPQUFQLEdBQWlCLFNBQVNnUixhQUFULENBQXVCN0ssR0FBdkIsRUFBNEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsU0FBTyxpQ0FBZ0MwTSxJQUFoQyxDQUFxQzFNLEdBQXJDO0FBQVA7QUFDRCxDQUxELEM7Ozs7Ozs7QUNSQTs7QUFFQTs7Ozs7Ozs7QUFPQXBHLE9BQU9DLE9BQVAsR0FBaUIsU0FBU2lSLFdBQVQsQ0FBcUJFLE9BQXJCLEVBQThCa0YsV0FBOUIsRUFBMkM7QUFDMUQsU0FBT0EsY0FDSGxGLFFBQVF6UyxPQUFSLENBQWdCLE1BQWhCLEVBQXdCLEVBQXhCLElBQThCLEdBQTlCLEdBQW9DMlgsWUFBWTNYLE9BQVosQ0FBb0IsTUFBcEIsRUFBNEIsRUFBNUIsQ0FEakMsR0FFSHlTLE9BRko7QUFHRCxDQUpELEM7Ozs7Ozs7QUNUQTs7QUFFQSxJQUFJOUgsU0FBUyxtQkFBQXpNLENBQVEsQ0FBUixDQUFiOztBQUVBOzs7Ozs7QUFNQSxTQUFTd1QsV0FBVCxDQUFxQmtHLFFBQXJCLEVBQStCO0FBQzdCLE1BQUksT0FBT0EsUUFBUCxLQUFvQixVQUF4QixFQUFvQztBQUNsQyxVQUFNLElBQUlDLFNBQUosQ0FBYyw4QkFBZCxDQUFOO0FBQ0Q7O0FBRUQsTUFBSUMsY0FBSjtBQUNBLE9BQUsvTixPQUFMLEdBQWUsSUFBSWpELE9BQUosQ0FBWSxTQUFTaVIsZUFBVCxDQUF5Qi9RLE9BQXpCLEVBQWtDO0FBQzNEOFEscUJBQWlCOVEsT0FBakI7QUFDRCxHQUZjLENBQWY7O0FBSUEsTUFBSWdSLFFBQVEsSUFBWjtBQUNBSixXQUFTLFNBQVMxTixNQUFULENBQWdCSSxPQUFoQixFQUF5QjtBQUNoQyxRQUFJME4sTUFBTVIsTUFBVixFQUFrQjtBQUNoQjtBQUNBO0FBQ0Q7O0FBRURRLFVBQU1SLE1BQU4sR0FBZSxJQUFJN00sTUFBSixDQUFXTCxPQUFYLENBQWY7QUFDQXdOLG1CQUFlRSxNQUFNUixNQUFyQjtBQUNELEdBUkQ7QUFTRDs7QUFFRDs7O0FBR0E5RixZQUFZcFQsU0FBWixDQUFzQjhZLGdCQUF0QixHQUF5QyxTQUFTQSxnQkFBVCxHQUE0QjtBQUNuRSxNQUFJLEtBQUtJLE1BQVQsRUFBaUI7QUFDZixVQUFNLEtBQUtBLE1BQVg7QUFDRDtBQUNGLENBSkQ7O0FBTUE7Ozs7QUFJQTlGLFlBQVl1RyxNQUFaLEdBQXFCLFNBQVNBLE1BQVQsR0FBa0I7QUFDckMsTUFBSS9OLE1BQUo7QUFDQSxNQUFJOE4sUUFBUSxJQUFJdEcsV0FBSixDQUFnQixTQUFTa0csUUFBVCxDQUFrQk0sQ0FBbEIsRUFBcUI7QUFDL0NoTyxhQUFTZ08sQ0FBVDtBQUNELEdBRlcsQ0FBWjtBQUdBLFNBQU87QUFDTEYsV0FBT0EsS0FERjtBQUVMOU4sWUFBUUE7QUFGSCxHQUFQO0FBSUQsQ0FURDs7QUFXQTdJLE9BQU9DLE9BQVAsR0FBaUJvUSxXQUFqQixDOzs7Ozs7O0FDeERBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkFyUSxPQUFPQyxPQUFQLEdBQWlCLFNBQVN1USxNQUFULENBQWdCc0csUUFBaEIsRUFBMEI7QUFDekMsU0FBTyxTQUFTaFYsSUFBVCxDQUFjaVYsR0FBZCxFQUFtQjtBQUN4QixXQUFPRCxTQUFTN1UsS0FBVCxDQUFlLElBQWYsRUFBcUI4VSxHQUFyQixDQUFQO0FBQ0QsR0FGRDtBQUdELENBSkQsQyIsImZpbGUiOiIuL2xpYnJhcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJwZC1zcHNlcnZlcmFqYXhcIiksIHJlcXVpcmUoXCJwZC1zcHV0aWxcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicGQtc3BzZXJ2ZXJhamF4XCIsIFwicGQtc3B1dGlsXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInBkc3B1cGxvYWRmaWxlc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcInBkLXNwc2VydmVyYWpheFwiKSwgcmVxdWlyZShcInBkLXNwdXRpbFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wicGRzcHVwbG9hZGZpbGVzXCJdID0gZmFjdG9yeShyb290W1wicGRzcHNlcnZlcmFqYXhcIl0sIHJvb3RbXCJwZHNwdXRpbFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTFfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlNzJiNzZkM2JlMDcxMjI4MGVhMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyAmJiAhaXNBcnJheShvYmopKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcbnZhciBidG9hID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5idG9hICYmIHdpbmRvdy5idG9hLmJpbmQod2luZG93KSkgfHwgcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J0b2EnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB2YXIgbG9hZEV2ZW50ID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgdmFyIHhEb21haW4gPSBmYWxzZTtcblxuICAgIC8vIEZvciBJRSA4LzkgQ09SUyBzdXBwb3J0XG4gICAgLy8gT25seSBzdXBwb3J0cyBQT1NUIGFuZCBHRVQgY2FsbHMgYW5kIGRvZXNuJ3QgcmV0dXJucyB0aGUgcmVzcG9uc2UgaGVhZGVycy5cbiAgICAvLyBET04nVCBkbyB0aGlzIGZvciB0ZXN0aW5nIGIvYyBYTUxIdHRwUmVxdWVzdCBpcyBtb2NrZWQsIG5vdCBYRG9tYWluUmVxdWVzdC5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiYgISgnd2l0aENyZWRlbnRpYWxzJyBpbiByZXF1ZXN0KSAmJlxuICAgICAgICAhaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSB7XG4gICAgICByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCgpO1xuICAgICAgbG9hZEV2ZW50ID0gJ29ubG9hZCc7XG4gICAgICB4RG9tYWluID0gdHJ1ZTtcbiAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IGZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzKCkge307XG4gICAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7fTtcbiAgICB9XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0W2xvYWRFdmVudF0gPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQgJiYgIXhEb21haW4pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIC8vIElFIHNlbmRzIDEyMjMgaW5zdGVhZCBvZiAyMDQgKGh0dHBzOi8vZ2l0aHViLmNvbS9temFicmlza2llL2F4aW9zL2lzc3Vlcy8yMDEpXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAnTm8gQ29udGVudCcgOiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIi8qKlxyXG4gICAgcGQtc3B1cGxvYWRmaWxlcyBpcyBhIG1vZHVsZSB0byB1cGxvYWQgZmlsZXMgaW50byBzaGFyZXBvaW50LiBcclxuICAgICpcclxuICAgICogVGhlIG9ubHkgZmlsZXMgaXQgd2lsbCBhY2NlcHQgYXJlIGZyb20gdGhlIGZpbGUgaW5wdXQgb2YgdGhlIGRvbSAoZmlsZWxpc3QpLiBcclxuICAgICogVGhpcyBtb2R1bGUgd2lsbCB1cGxvYWQgYXMgbWFueSBmaWxlcyBhcyB5b3UgcGFzcyBpdC5cclxuICAgICogVGhlIG1heCBmaWxlIHNpemUgc3VwcG9ydCBhdCB0aGlzIHRpbWUgaXMgMmdiLiBJZiBhIHVzZXIgcGFzc2VzIGEgZmlsZSB0aGF0IGlzIGxhcmdlciB0aGFuIDJnYiB0aGUgcHJvY2VzcyBwcm9taXNlIHdpbGwgYmUgcmVqZWN0ZWQgYW5kIHRoZSBjYXRjaCBibG9jayB3aWxsIHJlY2VpdmUgYSBvYmplY3Qgd2l0aCBhIGZpbGVzVG9CaWcgcHJvcGVydHkuIFRoZSBmaWxlc1RvQmlnIHByb3BlcnR5IHdpbGwgY29udGFpbiBhbiBhcnJheSBvZiBhbGwgZmlsZSBuYW1lcyB0aGF0IHdlcmUgdG8gYmlnLiBZb3UgYXJlIHJlc3BvbnNpYmxlIGZvciBkaXNwbGF5aW5nIHRoZSBmaWxlcyB0byBiaWcgbWVzc2FnZSB0byB0aGUgdXNlci4gXHJcbiAgICAqXHJcbiAgICAqIFRoaXMgbW9kdWxlIGRlcGVuZHMgb25cclxuICAgICogMS4gcGQtc3BVdGlsXHJcbiAgICAqIDIuIHBkLXNwc2VydmVyYWpheFxyXG4gICAgKiAzLiBheGlvc1xyXG4gICAgKlxyXG4gICAgQG1vZHVsZSBwZHNwdXBsb2FkZmlsZXNcclxuICovXHJcbmltcG9ydCB7c3RhcnRVcGxvYWRQcm9jZXNzLCBsaXN0SWRUeXBlQ2hlY2tlciwgbGlicmFyeSwgbGlzdH0gZnJvbSAnLi9oZWxwZXJzJztcclxuLyoqXHJcbiAqIFRoZSBpbmRleCBhbmQgaXRlbURhdGEgdG8gcHJvY2VzcyB3aWxsIGJlIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uXHJcbiAqIHRoZSBvcmRlciBudW1iZXIgaXMgeW91ciBpZCB0byBsb2NhdGUgZWxlbWVudHMgKGRvbSBvciB3aGF0ZXZlcikgYmFzZWQgb24gdGhlIHNwZWNpZmljIGl0ZW0gcHJvY2Vzc2luZ1xyXG4gKiBmb3IgY3JlYXRpbmcgYSBmcm9udCBlbmQgdGhpcyBpcyB3aGVyZSB0byBjcmVhdGUgdGhlIGRvbSBlbGVtZW50IHRvIHVwZGF0ZSB3aXRoIHByb2dyZXNzIGRhdGFcclxuICpcclxuICogQGNhbGxiYWNrIGl0ZW1QcmVQcm9jZXNzaW5nXHJcbiAqIEBwYXJhbSB7YW55fSBpdGVtRGF0YVxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICovXHJcbi8qKlxyXG4gKiBUaGUgaXRlbVByb2dyZXNzUHJvY2Vzc2luZyB3aWxsIGJlIHBhc3NlZCB0aGUgcHJvZ3Jlc3MgbnVtYmVyIGFuZCB0aGUgaW5kZXggdG8gdHJpZ2dlciBhbnkgc2lkZSBlZmZlY3RzXHJcbiAqIEluZGV4IGlzIHlvdXIgaWQgdG8gbG9jYXRlIGVsZW1lbnRzIChkb20gb3Igd2hhdGV2ZXIpIGJhc2VkIG9uIHRoZSBzcGVjaWZpYyBpdGVtIHByb2Nlc3NpbmdcclxuICogVGhlcmUgaXMgYSBzbWFsbCBnYXAgaW4gdGltZSBvbmNlIHRoZSAxMDAlIGlzIHJlY2lldmVkIGFuZCB3aGVuIHRoZSBzZXJ2ZXIgc2VuZHMgdGhlIGNvbXBsZXRlZCBldmVudCAoZnlpKVxyXG4gKlxyXG4gKiBAY2FsbGJhY2sgaXRlbVByb2dyZXNzUHJvY2Vzc2luZ1xyXG4gKiBAcGFyYW0ge251bWJlcn0gcGVyY2VudFVwbG9hZGVkXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gKi9cclxuLyoqXHJcbiAqIFRoZSBwcm9jZXNzaW5nQ29tcGxldGVkQ2FsbGJhY2sgd2lsbCBiZSBwYXNzZWQgdGhlIG9yZGVyIG51bWJlciBhbmQgdGhlIHByb2Nlc3Mgc3RhdHVzIChzdWNjZXNzIG9yIGZhaWwpIHRvIHRyaWdnZXIgYW55IGNvbXBsZXRlZCBzaWRlIGVmZmVjdHNcclxuICogVGhlIG9yZGVyIG51bWJlciBpcyB5b3VyIGlkIHRvIGxvY2F0ZSBlbGVtZW50cyAoZG9tIG9yIHdoYXRldmVyKSBiYXNlZCBvbiB0aGUgc3BlY2lmaWMgaXRlbSBwcm9jZXNzaW5nXHJcbiAqIFRoaXMgaXMgd2hlcmUgeW91IHdvdWxkIHBhc3MgdGhlIGFjdGlvbnMgdG8gc2hvdyBpdGVtIGNvbXBsZXRlZCB1cGxvYWRpbmdcclxuICpcclxuICogQGNhbGxiYWNrIGl0ZW1Db21wbGV0ZWRQcm9jZXNzaW5nXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXNcclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAqL1xyXG4vKipcclxuICogVXBsb2FkcyBmaWxlcyB0byBhIFNoYXJlUG9pbnQgTGlicmFyeS4gXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSBzaXRlIHJlbGF0aXZlIHVybCBcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLmZvbGRlciAtIGZvbGRlciB0byBzYXZlIGZpbGUgaW4sIGV4IFNoYXJlZERvY3VtZW50cy9mb2xkZXIxXHJcbiAqIEBwYXJhbSB7ZmlsZWxpc3R9IHByb3BzLmZpbGVzIC0gZmlsZXMgaW4gdGhlIGZpbGUgaW5wdXQgZWxlbWVudCB0byBiZSB1cGxvYWRlZFxyXG4gKiBAcGFyYW0ge2l0ZW1QcmVQcm9jZXNzaW5nfSBbcHJvcHMuaXRlbUNyZWF0ZWRDQl0gLSB0aGlzIGNhbGwgYmFjayBpcyBjYWxsZWQgd2hlbiBhbiBpdGVtIGlzIGFkZGVkIHRvIGJlIHByb2Nlc3NlZFxyXG4gKiBAcGFyYW0ge2l0ZW1Qcm9ncmVzc1Byb2Nlc3Npbmd9IFtwcm9wcy5pdGVtVXBsb2FkUHJvZ3Jlc3NDQl0gLSB0aGlzIGNhbGwgYmFjayBpcyBjYWxsZWQgd2hlbiB0aGUgcHJvZ3Jlc3MgZXZlbnQgaXMgZmlyZWRcclxuICogQHBhcmFtIHtpdGVtQ29tcGxldGVkUHJvY2Vzc2luZ30gW3Byb3BzLml0ZW1Db21wbGV0ZWRDQl0gLSB0aGlzIGNhbGwgYmFjayBpcyBjYWxsZWQgd2hlbiBpdGVtIGlzIGNvbXBsZXRlZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVwbG9hZEZpbGVzVG9MaWJyYXJ5IChwcm9wcykge1xyXG5cclxuICAgIHByb3BzLnR5cGUgPSBsaWJyYXJ5O1xyXG4gICAgcmV0dXJuIHN0YXJ0VXBsb2FkUHJvY2Vzcyhwcm9wcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGxvYWRzIGZpbGVzIHRvIGEgbGlzdCBpdGVtLiBXaWxsIGFjY2VwdCBtdWx0aXBsZSBpdGVtc1xyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMub3JpZ2luXSBcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnVybCAtIHNpdGUgcmVsYXRpdmUgdXJsIFxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBwcm9wcy5pdGVtSWRzIC0gYXJyYXkgb2YgaXRlbSBpZHMgdG8gdXBsb2FkIGZpbGVzIHRvIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMubGlzdEdVSUQgLSB1c2UgZWl0aGVyIGxpc3RHVUlEIG9yIGxpc3RUaXRsZSBub3QgYm90aFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmxpc3RUaXRsZV1cclxuICogQHBhcmFtIHtmaWxlbGlzdH0gcHJvcHMuZmlsZXMgLSBmaWxlcyBpbiB0aGUgZmlsZSBpbnB1dCBlbGVtZW50IHRvIGJlIHVwbG9hZGVkXHJcbiAqIEBwYXJhbSB7aXRlbVByZVByb2Nlc3Npbmd9IFtwcm9wcy5pdGVtQ3JlYXRlZENCXSAtIHRoaXMgY2FsbCBiYWNrIGlzIGNhbGxlZCB3aGVuIGFuIGl0ZW0gaXMgYWRkZWQgdG8gYmUgcHJvY2Vzc2VkXHJcbiAqIEBwYXJhbSB7aXRlbVByb2dyZXNzUHJvY2Vzc2luZ30gW3Byb3BzLml0ZW1VcGxvYWRQcm9ncmVzc0NCXSAtIHRoaXMgY2FsbCBiYWNrIGlzIGNhbGxlZCB3aGVuIHRoZSBwcm9ncmVzcyBldmVudCBpcyBmaXJlZFxyXG4gKiBAcGFyYW0ge2l0ZW1Db21wbGV0ZWRQcm9jZXNzaW5nfSBbcHJvcHMuaXRlbUNvbXBsZXRlZENCXSAtIHRoaXMgY2FsbCBiYWNrIGlzIGNhbGxlZCB3aGVuIGl0ZW0gaXMgY29tcGxldGVkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXBsb2FkRmlsZXNUb0xpc3QocHJvcHMpIHtcclxuICAgIC8vb25seSBvbmUgaXRlbSBhbmQgb25lIGZpbGVcclxuICAgIC8vc2V0IHVwIGxvb3AgdG8gaGFuZGxlIG11bHRpcGxlIGl0ZW0gaWRzXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcHMuaXRlbUlkcykpIHtcclxuICAgICAgICBwcm9wcy5pdGVtSWRzID0gW3Byb3BzLml0ZW1JZHNdO1xyXG4gICAgfVxyXG4gICAgLy9jaGVjayBhbGwgbnVtYmVycyBhbmQgc2V0dXAgcmVzdWx0cyBvYmplY3RcclxuICAgIGlmICghcHJvcHMudmVyaWZpZWQpIHtcclxuICAgICAgICBsaXN0SWRUeXBlQ2hlY2tlcihwcm9wcy5pdGVtSWRzKTtcclxuICAgICAgICBwcm9wcy5hbGxSZXN1bHRzID0ge307XHJcbiAgICAgICAgcHJvcHMuYWxsUmVzdWx0cy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHByb3BzLnZlcmlmaWVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm9wcy50eXBlID0gbGlzdDtcclxuICAgIHByb3BzLnByb2Nlc3NpbmdJdGVtID0gcHJvcHMucHJvY2Vzc2luZ0l0ZW0gPj0gMCA/IHByb3BzLnByb2Nlc3NpbmdJdGVtICsgMSA6IDA7XHJcbiAgICBwcm9wcy5pdGVtSWQgPSBwcm9wcy5pdGVtSWRzW3Byb3BzLnByb2Nlc3NpbmdJdGVtXTtcclxuXHJcbiAgICByZXR1cm4gc3RhcnRVcGxvYWRQcm9jZXNzKHByb3BzKVxyXG4gICAgLnRoZW4oaXRlbXMgPT4ge1xyXG4gICAgICAgIHByb3BzLmFsbFJlc3VsdHNbcHJvcHMuaXRlbUlkXSA9IGl0ZW1zO1xyXG4gICAgICAgIHByb3BzLmFsbFJlc3VsdHMubGVuZ3RoKys7XHJcblxyXG4gICAgICAgIGlmIChwcm9wcy5hbGxSZXN1bHRzLmxlbmd0aCA8IHByb3BzLml0ZW1JZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1cGxvYWRGaWxlc1RvTGlzdChwcm9wcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcm9wcy5hbGxSZXN1bHRzO1xyXG4gICAgfSk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGlicmFyeS5qcyIsImltcG9ydCB7IGdldENvbnRleHQgfSBmcm9tICdwZC1zcHNlcnZlcmFqYXgnO1xyXG5pbXBvcnQgeyBnZXRVUkxPcmlnaW4gfSBmcm9tICdwZC1zcHV0aWwnO1xyXG5pbXBvcnQgeyBNZXRlcmVkUmVxdWVzdFByb2Nlc3NvciB9IGZyb20gJ3BkLW1ldGVyZWRyZXF1ZXN0cHJvY2Vzc29yJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IGludmFsaWRGaWxlTGlzdCA9IFwiZmlsZXMgcGFzc2VkIHRvIGZ1bmN0aW9uIGFyZSBub3QgdGhlIGNvcnJlY3QgZGF0YXR5cGUsIHRoZSBmaWxlcyBwcm9wZXJ0eSBtdXN0IGJlIGEgaW5zdGFuY2Ugb2YgRmlsZUxpc3RcIjtcclxuY29uc3Qgbm9VcGxvYWRUeXBlID0gXCJhIHR5cGUgbXVzdCBiZSBzcGVjaWZpZWQgdG8gc3RhcnQgdGhlIHVwbG9hZCBwcm9jZXNzXCI7XHJcbmNvbnN0IGludmFsaWRMaXN0SXRlbUlkID0gXCJsaXN0IGl0ZW0gaWRzIG11c3QgYmUgYSBudW1iZXJcIjtcclxuY29uc3QgbWF4RmlsZVNpemUgPSAyMTQ3NDgzNjQ4O1xyXG5leHBvcnQgY29uc3QgbGlicmFyeSA9ICdsaWJyYXJ5JztcclxuZXhwb3J0IGNvbnN0IGxpc3QgPSAnbGlzdCc7XHJcbmxldCB1cGxvYWRQcm9wZXJ0aWVzID0gbnVsbDtcclxuXHJcbmZ1bmN0aW9uIGdldEZpbGVCdWZmZXIoZmlsZSkge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHR2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHRcdHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRyZXNvbHZlKGUudGFyZ2V0LnJlc3VsdCk7XHJcblx0XHR9O1xyXG5cdFx0cmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRyZWplY3QoZS50YXJnZXQuZXJyb3IpO1xyXG5cdFx0fTtcclxuXHRcdHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcclxuXHR9KTtcclxufVxyXG5mdW5jdGlvbiBnZXRVcGxvYWRDb250ZXh0KHByb3BzKSB7XHJcblx0cmV0dXJuIGdldENvbnRleHQocHJvcHMpXHJcblx0XHQudGhlbihyZXNwb25zZSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhLkZvcm1EaWdlc3RWYWx1ZTtcclxuXHRcdH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVVwbG9hZE9iamVjdHMoZmlsZXMsIHVwbG9hZFVybCwgY29udGV4dCkge1xyXG5cdGxldCB0b3RhbEZpbGVzID0gZmlsZXMubGVuZ3RoLFxyXG5cdFx0dG9VcGxvYWQgPSBbXSxcclxuXHRcdGZpbGVzVG9CaWcgPSBbXTtcclxuXHJcblx0Zm9yICh2YXIgaWkgPSAwOyBpaSA8IHRvdGFsRmlsZXM7IGlpKyspIHtcclxuXHRcdGxldCBzaW5nbGVGaWxlID0gZmlsZXMuaXRlbShpaSk7XHJcblxyXG5cdFx0aWYgKHNpbmdsZUZpbGUuc2l6ZSA+IG1heEZpbGVTaXplKSB7XHJcblx0XHRcdGZpbGVzVG9CaWcucHVzaChzaW5nbGVGaWxlLm5hbWUpO1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHRcdHRvVXBsb2FkLnB1c2goe1xyXG5cdFx0XHR1cmw6IHVwbG9hZFVybCxcclxuXHRcdFx0ZmlsZTogc2luZ2xlRmlsZSxcclxuXHRcdFx0Y29udGV4dDogY29udGV4dFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHJldHVybiB7XHJcblx0XHR0b1VwbG9hZCxcclxuXHRcdGZpbGVzVG9CaWdcclxuXHR9O1xyXG59XHJcbmZ1bmN0aW9uIHVwbG9hZFVybEJhc2UocHJvcHMpIHtcclxuXHRsZXQgb3JpZ2luID0gcHJvcHMub3JpZ2luIHx8IGdldFVSTE9yaWdpbigpO1xyXG5cdHJldHVybiBgJHtvcmlnaW59JHtwcm9wcy51cmx9L19hcGkvd2ViYDtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVMaWJyYXJ5VXJsKHByb3BzKSB7XHJcblx0bGV0IHVybCA9IHVwbG9hZFVybEJhc2UocHJvcHMpO1xyXG5cdHJldHVybiBgJHt1cmx9L0dldEZvbGRlckJ5U2VydmVyUmVsYXRpdmVVcmwoJyR7cHJvcHMuZm9sZGVyfScpL0ZpbGVzL2FkZCh1cmw9J3tmaWxlTmFtZX0nLG92ZXJ3cml0ZT10cnVlKWA7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlTGlzdFVybChwcm9wcykge1xyXG5cdGxldCB1cmwgPSB1cGxvYWRVcmxCYXNlKHByb3BzKTtcclxuXHRpZiAocHJvcHMubGlzdEdVSUQpIHtcclxuXHRcdHJldHVybiBgJHt1cmx9L2xpc3RzKGd1aWQnJHtwcm9wcy5saXN0R1VJRH0nKS9pdGVtcygke3Byb3BzLml0ZW1JZH0pL0F0dGFjaG1lbnRGaWxlcy9hZGQoRmlsZU5hbWU9J3tmaWxlTmFtZX0nKWA7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiBgJHt1cmx9L2xpc3RzL2dldGJ5dGl0bGUoJyR7cHJvcHMubGlzdFRpdGxlfScpL2l0ZW1zKCR7cHJvcHMuaXRlbUlkfSkvQXR0YWNobWVudEZpbGVzL2FkZChGaWxlTmFtZT0ne2ZpbGVOYW1lfScpYDtcclxuXHR9XHJcbn1cclxuZnVuY3Rpb24gc2V0dXBVcGxvYWQocHJvcHMpIHtcclxuXHRpZiAocHJvcHMudHlwZSA9PT0gbGlicmFyeSkge1xyXG5cdFx0dXBsb2FkUHJvcGVydGllcyA9IHtcclxuXHRcdFx0dG90YWxUb1VwbG9hZDogMyxcclxuXHRcdFx0dXJsOiBjcmVhdGVMaWJyYXJ5VXJsKHByb3BzKVxyXG5cdFx0fTtcclxuXHR9IGVsc2UgaWYgKHByb3BzLnR5cGUgPT09IGxpc3QpIHtcclxuXHRcdHVwbG9hZFByb3BlcnRpZXMgPSB7XHJcblx0XHRcdHRvdGFsVG9VcGxvYWQ6IDEsXHJcblx0XHRcdHVybDogY3JlYXRlTGlzdFVybChwcm9wcylcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihub1VwbG9hZFR5cGUpO1xyXG5cdH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbGlzdElkVHlwZUNoZWNrZXIoaWRzKSB7XHJcblx0bGV0IGFsbE51bWJlcnMgPSB0cnVlO1xyXG5cclxuXHRpZHMuc29tZShpZCA9PiB7XHJcblx0XHRpZiAodHlwZW9mIGlkICE9PSAnbnVtYmVyJykge1xyXG5cdFx0XHRhbGxOdW1iZXJzID0gZmFsc2U7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRpZiAoIWFsbE51bWJlcnMpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihpbnZhbGlkTGlzdEl0ZW1JZCk7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydFVwbG9hZFByb2Nlc3MocHJvcHMpIHtcclxuXHRpZiAoIShwcm9wcy5maWxlcyBpbnN0YW5jZW9mIEZpbGVMaXN0KSkge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKGludmFsaWRGaWxlTGlzdCk7XHJcblx0fVxyXG5cdHNldHVwVXBsb2FkKHByb3BzKTtcclxuXHJcblx0Ly9nZXQgY29udGV4dFxyXG5cdHJldHVybiBnZXRVcGxvYWRDb250ZXh0KHByb3BzKVxyXG5cdFx0LnRoZW4oY3R4ID0+IHtcclxuXHJcblx0XHRcdC8vY3JlYXRlIG9iamVjdHNcclxuXHRcdFx0bGV0IGl0ZW1zVG9Qcm9jZXNzID0gY3JlYXRlVXBsb2FkT2JqZWN0cyhwcm9wcy5maWxlcywgdXBsb2FkUHJvcGVydGllcy51cmwsIGN0eCksXHJcblx0XHRcdFx0cHJvY2Vzc29yID0gbnVsbDtcclxuXHJcblx0XHRcdGlmIChpdGVtc1RvUHJvY2Vzcy5maWxlc1RvQmlnLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHQvL3VzZXIgcGFzc2VkIGEgZmlsZSB0aGF0IHdhcyB0byBiaWcgdG8gYmUgdXBsb2FkZWRcclxuXHRcdFx0XHRpdGVtc1RvUHJvY2Vzcy50b1VwbG9hZCA9IG51bGw7XHJcblx0XHRcdFx0UHJvbWlzZS5yZWplY3Qoe1xyXG5cdFx0XHRcdFx0ZmlsZXNUb0JpZzogaXRlbXNUb1Byb2Nlc3MuZmlsZXNUb0JpZ1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdHByb2Nlc3NvciA9IG5ldyBNZXRlcmVkUmVxdWVzdFByb2Nlc3NvcigpO1xyXG5cclxuXHRcdFx0cHJvY2Vzc29yLmNoYW5nZUNvbmN1cnJlbnRQcm9jZXNzaW5nKHVwbG9hZFByb3BlcnRpZXMudG90YWxUb1VwbG9hZCk7XHJcblxyXG5cdFx0XHRwcm9jZXNzb3Iuc2V0UHJlUHJvY2Vzc2luZ0NCKGZ1bmN0aW9uIChpdGVtRGF0YSwgaW5kZXgpIHtcclxuXHJcblx0XHRcdFx0bGV0IGNvbmZpZyA9IHtcclxuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0aGVhZGVyczogbnVsbFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0aWYgKHByb3BzLml0ZW1DcmVhdGVkQ0IpIHtcclxuXHRcdFx0XHRcdHByb3BzLml0ZW1DcmVhdGVkQ0IoaXRlbURhdGEsIGluZGV4KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGdldEZpbGVCdWZmZXIoaXRlbURhdGEuZmlsZSlcclxuXHRcdFx0XHRcdC50aGVuKGJ1ZmZlciA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbmZpZy51cmwgPSBpdGVtRGF0YS51cmwucmVwbGFjZShcIntmaWxlTmFtZX1cIiwgaXRlbURhdGEuZmlsZS5uYW1lKTtcclxuXHRcdFx0XHRcdFx0Y29uZmlnLmRhdGEgPSBidWZmZXI7XHJcblx0XHRcdFx0XHRcdGNvbmZpZy5oZWFkZXJzID0ge1xyXG5cdFx0XHRcdFx0XHRcdFwiYWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvbjtvZGF0YT12ZXJib3NlXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJYLVJlcXVlc3REaWdlc3RcIjogaXRlbURhdGEuY29udGV4dCxcclxuXHRcdFx0XHRcdFx0XHRcImNvbnRlbnQtbGVuZ3RoXCI6IGJ1ZmZlci5ieXRlTGVuZ3RoXHJcblx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdGlmIChwcm9wcy5pdGVtVXBsb2FkUHJvZ3Jlc3NDQikge1xyXG5cdFx0XHRcdFx0XHRcdGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID0gZnVuY3Rpb24ocHJvZ3Jlc3NFdmVudCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIHBlcmNlbnRDb21wbGV0ZWQgPSBNYXRoLnJvdW5kKCAocHJvZ3Jlc3NFdmVudC5sb2FkZWQgKiAxMDApIC8gcHJvZ3Jlc3NFdmVudC50b3RhbCApO1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMuaXRlbVVwbG9hZFByb2dyZXNzQ0IocGVyY2VudENvbXBsZXRlZCwgaW5kZXgpO1xyXG5cdFx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0cmV0dXJuIGF4aW9zKGNvbmZpZyk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRwcm9jZXNzb3Iuc2V0SXRlbVByb2Nlc3NlZENCKHByb3BzLml0ZW1Db21wbGV0ZWRDQik7XHJcblx0XHRcdHJldHVybiBwcm9jZXNzb3IuaW5pdChpdGVtc1RvUHJvY2Vzcy50b1VwbG9hZCk7XHJcblx0XHR9KTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInBkLXNwc2VydmVyYWpheFwiLFwiY29tbW9uanMyXCI6XCJwZC1zcHNlcnZlcmFqYXhcIixcImFtZFwiOlwicGQtc3BzZXJ2ZXJhamF4XCIsXCJyb290XCI6XCJwZHNwc2VydmVyYWpheFwifVxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzExX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInBkLXNwdXRpbFwiLFwiY29tbW9uanMyXCI6XCJwZC1zcHV0aWxcIixcImFtZFwiOlwicGQtc3B1dGlsXCIsXCJyb290XCI6XCJwZHNwdXRpbFwifVxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgc3RhdGljcyBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG4vKipcclxuICogbWV0ZXJlZFJlcXVlc3RQcm9jZXNzb3IgaXMgYSBjbGFzcyB0aGF0IGFsbG93cyB5b3UgdG8gcGFzcyBpbiBtdWx0aXBsZSBpdGVtcyB0byBwcm9jZXNzXHJcbiAqIGFuZCBjb250cm9scyBob3cgbWFueSByZXF1ZXN0cyB3aWxsIGJlIHNlbnQgdG8gdGhlIHNlcnZlciBhdCBhIHRpbWVcclxuICogd2hlbiBhbGwgaXRlbXMgYXJlIGZpbmlzaGVkIHByb2Nlc3NpbmcgdGhleSB3aWxsIGJlIHBhc3NlZCB0byB0aGUgLnRoZW4gb2YgdGhlIGluaXQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWV0ZXJlZFJlcXVlc3RQcm9jZXNzb3Ige1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3Byb2Nlc3NpbmdJdGVtcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3RvdGFsVG9Qcm9jZXNzID0gMztcclxuICAgIH1cclxuICAgIF90b3RhbFByb2Nlc3NpbmdJdGVtcygpIHtcclxuICAgICAgICBsZXQgdG90YWxQcm9jZXNzaW5nID0gMDtcclxuICAgICAgICB0aGlzLl9wcm9jZXNzaW5nSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYgKCFpdGVtLmNvbXBsZXRlZCkge1xyXG4gICAgICAgICAgICAgICAgdG90YWxQcm9jZXNzaW5nKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdG90YWxQcm9jZXNzaW5nO1xyXG4gICAgfVxyXG4gICAgX2ZpbnNoUHJvY2Vzc29yKCkge1xyXG5cclxuICAgICAgICB0aGlzLl9tYWluUmVzb2x2ZSh0aGlzLl9wcm9jZXNzaW5nSXRlbXMpO1xyXG4gICAgfVxyXG4gICAgX3Byb21pc2VEb25lSGVscGVyKG9iaiwgZGF0YSwgc3RhdHVzKSB7XHJcbiAgICAgICAgb2JqLnJlc3BvbnNlID0gZGF0YTtcclxuICAgICAgICBvYmouc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgICAgIG9iai5jb21wbGV0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fcG9zdFByb2Nlc3NpbmdDQikge1xyXG4gICAgICAgICAgICB0aGlzLl9wb3N0UHJvY2Vzc2luZ0NCKG9iai5zdGF0dXMsIG9iai5wbGFjZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2FkZFRvUHJvY2Vzc29yKGluZGV4LCBwcm9taXNlKSB7XHJcbiAgICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICAgICAgcGxhY2U6IGluZGV4LFxyXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdGF0dXM6ICdwcm9jZXNzaW5nJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHByb21pc2VcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9taXNlRG9uZUhlbHBlcihvYmosIGRhdGEsIHN0YXRpY3MuY29tcGxldGVkU3VjY2Vzcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc3RQcm9jZXNzaW5nKCk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb21pc2VEb25lSGVscGVyKG9iaiwgZXJyb3IsIHN0YXRpY3MuY29tcGxldGVkRmFpbCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc3RQcm9jZXNzaW5nKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcHJvY2Vzc2luZ0l0ZW1zLnB1c2gob2JqKTtcclxuICAgIH1cclxuICAgIF9wcmVQcm9jZXNzaW5nKCkge1xyXG4gICAgICAgIC8vdGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSByZWN1cnNpdmUsIGFuZCBrZWVwIHRvdGFsVG9Qcm9jZXNzIGluIHRoZSBhcnJheVxyXG4gICAgICAgIC8vY2hlY2sgbGVuZ3RoIG9mIHByb2Nlc3NpbmcgaXRlbXMgaWYgdG90YWwgdG8gcHJvY2VzcyB0aGVuIHN0b3BcclxuICAgICAgICBsZXQgdG90YWxQcm9jZXNzaW5nID0gdGhpcy5fdG90YWxQcm9jZXNzaW5nSXRlbXMoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWRkZWRJdGVtcy5sZW5ndGggPT09IDAgfHwgdG90YWxQcm9jZXNzaW5nID09PSB0aGlzLl90b3RhbFRvUHJvY2Vzcykge1xyXG4gICAgICAgICAgICAvL2l0ZW1zIGFyZSBub3QgZG9uZSBwcm9jZXNzaW5nIGJ1dCB0aGVyZSBpcyBubyBtb3JlIHRvIGFkZCBvclxyXG4gICAgICAgICAgICAvL3Byb2Nlc3NpbmcgYXJyYXkgaGFzIGNvbXBhY2l0eSBzbyBqdXN0IGdldCBvdXRcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2lmIG5vdCBjYWxsIGFkZFRvUHJvY2Vzc2luZ0NhbGxCYWNrLCBzdG9yZSBpbiB2YXIgYW5kIHRhY2sgb24gYSB0aGVuXHJcbiAgICAgICAgbGV0IG5leHRBdmFpbGFibGVJbmRleCA9IHRoaXMuX3Byb2Nlc3NpbmdJdGVtcy5sZW5ndGgsXHJcbiAgICAgICAgICAgIG5leHRJdGVtVG9Qcm9jZXNzID0gdGhpcy5hZGRlZEl0ZW1zLnNoaWZ0KCksXHJcbiAgICAgICAgICAgIGNiUHJvY2Vzc2VkID0gdGhpcy5fdG9Qcm9jZXNzaW5nQ0IobmV4dEl0ZW1Ub1Byb2Nlc3MsIG5leHRBdmFpbGFibGVJbmRleCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCEoY2JQcm9jZXNzZWQgaW5zdGFuY2VvZiBQcm9taXNlKSkge1xyXG4gICAgICAgICAgICAvL2Z1bmN0aW9uIHBhc3NlZCBpbiBieSB1c2VyIGlzIG5vdCBzZXR1cCBjb3JyZWN0bHksIGl0IG11c3QgcmV0dXJuIGEgcHJvbWlzZVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc3RhdGljcy5pbmNvcnJlY3RBZGRUb1Byb2Nlc3NpbmdSZXR1cm5UeXBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jcmVhdGUgb2JqZWN0IGFuZCBhZGQgdG8gcHJvY2Vzc2luZyBhcnJheVxyXG4gICAgICAgIHRoaXMuX2FkZFRvUHJvY2Vzc29yKG5leHRBdmFpbGFibGVJbmRleCwgY2JQcm9jZXNzZWQpO1xyXG4gICAgICAgIHRoaXMuX3ByZVByb2Nlc3NpbmcoKTsgICAgXHJcbiAgICB9XHJcbiAgICBfcG9zdFByb2Nlc3NpbmcoKSB7XHJcbiAgICAgICAgLy9jaGVjayBpZiB0aGlzIGlzIGxhc3QgY2FsbCBpZiB5ZXMgdGhlbiBmaW5pc2ggcHJvY2Vzc1xyXG4gICAgICAgIGxldCB0b3RhbFByb2Nlc3NpbmcgPSB0aGlzLl90b3RhbFByb2Nlc3NpbmdJdGVtcygpO1xyXG4gICAgICAgIGlmICh0b3RhbFByb2Nlc3NpbmcgPT09IDAgJiYgdGhpcy5hZGRlZEl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAvL3Byb2Nlc3MgZmluaXNoZWQgY2FsbCBmaW5pc2hpbmcgZnVuY3Rpb24gYW5kIGdldCBvdXRcclxuICAgICAgICAgICAgdGhpcy5fZmluc2hQcm9jZXNzb3IoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2Vsc2UgY2FsbCBwcmVQcm9jZXNzaW5nXHJcbiAgICAgICAgdGhpcy5fcHJlUHJvY2Vzc2luZygpO1xyXG4gICAgfVxyXG4gICAgX3RvUHJvY2Vzc2luZ0NCKCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihzdGF0aWNzLm5vUHJlUHJvY3Nzb3JDQik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiBhbiBpdGVtIGlzIGZpbmlzaGVkIHByb2Nlc3NpbmdcclxuICAgICAqIEBwYXJhbSB7aXRlbUNvbXBsZXRlZH0gY2IgXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgc2V0SXRlbVByb2Nlc3NlZENCKGNiKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHByb2Nlc3NpbmdDb21wbGV0ZWRDYWxsYmFjayB3aWxsIGJlIHBhc3NlZCB0aGUgb3JkZXIgbnVtYmVyIGFuZCB0aGUgcHJvY2VzcyBzdGF0dXMgKHN1Y2Nlc3Mgb3IgZmFpbCkgdG8gdHJpZ2dlciBhbnkgY29tcGxldGVkIHNpZGUgZWZmZWN0c1xyXG4gICAgICAgICAqIFRoZSBvcmRlciBudW1iZXIgaXMgeW91ciBpZCB0byBsb2NhdGUgZWxlbWVudHMgKGRvbSBvciB3aGF0ZXZlcikgYmFzZWQgb24gdGhlIHNwZWNpZmljIGl0ZW0gcHJvY2Vzc2luZ1xyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQGNhbGxiYWNrIGl0ZW1Db21wbGV0ZWRcclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzXHJcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5fcG9zdFByb2Nlc3NpbmdDQiA9IGNiO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgY2FsbGVkIHRvIGFkZCBpdGVtcyB0byBiZSBwcm9jZXNzZWRcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtwcmVQcm9jZXNzb3J9IGNiXHJcbiAgICAgKiBAcmV0dXJucyB7cHJvbWlzZX0gXHJcbiAgICAgKi9cclxuICAgIHNldFByZVByb2Nlc3NpbmdDQihjYikge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBpbmRleCBhbmQgaXRlbURhdGEgdG8gcHJvY2VzcyB3aWxsIGJlIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uXHJcbiAgICAgICAgICogaXQgTVVTVCByZXR1cm4gYSBuYXRpdmUgcHJvbWlzZS5cclxuICAgICAgICAgKiB0aGUgb3JkZXIgbnVtYmVyIGlzIHlvdXIgaWQgdG8gbG9jYXRlIGVsZW1lbnRzIChkb20gb3Igd2hhdGV2ZXIpIGJhc2VkIG9uIHRoZSBzcGVjaWZpYyBpdGVtIHByb2Nlc3NpbmdcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBjYWxsYmFjayBwcmVQcm9jZXNzb3JcclxuICAgICAgICAgKiBAcGFyYW0geyp9IGl0ZW1EYXRhXHJcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5fdG9Qcm9jZXNzaW5nQ0IgPSBjYjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWxsb3dzIHlvdSB0byBjaGFuZ2UgdGhlIHRvdGFsIGFtb3VudCBvZiBzaW11bHRhbmVvdXMgaXRlbXMgdG8gYmUgcHJvY2VzZWQuIFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IFxyXG4gICAgICovXHJcbiAgICBjaGFuZ2VDb25jdXJyZW50UHJvY2Vzc2luZyhjb3VudCkge1xyXG4gICAgICAgIHRoaXMuX3RvdGFsVG9Qcm9jZXNzID0gY291bnQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0cyB0aGUgcHJvY2Vzc2luZyBwcm9jZXNzLlxyXG4gICAgICogSXRlbXNUb1Byb2Nlc3MgaXMgYW4gYXJyYXkgb2YgYW55dGhpbmcgeW91IHdhbnQsIGJ1dCBlYWNoIGl0ZW0gaW4gdGhpcyBhcnJheVxyXG4gICAgICogUmV0dXJucyBhIG5hdGl2ZSBwcm9taXNlIHRvIC50aGVuIG9mZiBvZiwgbm8gbmVlZCB0byBjYXRjaCwgYWxsIGl0ZW0gKHN1Y2Nlc3Mgb3IgZmFpbCkgd2lsbCBiZSBwcm9jZXNzZWQgYW5kIHBhc3NlZCB0byB0aGUgLnRoZW5cclxuICAgICAqIHRoZSBpdGVtcyBwYXNzZWQgdG8gdGhlIC50aGVuIHdpbGwgYmUgYW5kIGFycmF5IG9mIG9iamVjdHMgd2l0aCB0aGUgZm9sbG93aW5nIHN0cnVjdHVyZVxyXG4gICAgICogIHtcclxuICAgICAqICAgICAgcGxhY2U6IG51bWJlcixcclxuICAgICAqICAgICAgY29tcGxldGVkOiBib29sZWFuLFxyXG4gICAgICogICAgICBzdGF0dXM6IHN0cmluZyAoc3VjY2VzcyBvciBmYWlsKVxyXG4gICAgICogICAgICByZXNwb25zZTogdGhlIGRhdGEgcmV0dXJuZWQgZnJvbSB0aGUgc2VydmVyXHJcbiAgICAgKiAgfVxyXG4gICAgICogQHBhcmFtIHthcnJheX0gaXRlbXNUb1Byb2Nlc3MgXHJcbiAgICAgKiBAcmV0dXJucyB7cHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgaW5pdChpdGVtc1RvUHJvY2Vzcykge1xyXG4gICAgICAgIGlmICghKEFycmF5LmlzQXJyYXkoaXRlbXNUb1Byb2Nlc3MpKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc3RhdGljcy5pbmNvcnJlY3REYXRhVHlwZUZvckl0ZW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZGRlZEl0ZW1zID0gaXRlbXNUb1Byb2Nlc3M7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX21haW5SZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgdGhpcy5fbWFpblJlamVjdCA9IHJlamVjdDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3ByZVByb2Nlc3NpbmcoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wZC1tZXRlcmVkcmVxdWVzdHByb2Nlc3Nvci9zcmMvbGlicmFyeS5qcyIsImV4cG9ydCBjb25zdCBpbmNvcnJlY3RBZGRUb1Byb2Nlc3NpbmdSZXR1cm5UeXBlID0gXCJUaGUgYWRkVG9Qcm9jZXNzaW5nQ2FsbGJhY2sgeW91IHBhc3NlZCBpcyBub3QgcmV0dXJuaW5nIHRoZSBjb3JyZWN0IGRhdGEgdHlwZS4gVGhlIGZ1bmN0aW9uIG11c3QgcmV0dXJuIGEgbmF0aXZlIFByb21pc2VcIjtcclxuZXhwb3J0IGNvbnN0IGNvbXBsZXRlZFN1Y2Nlc3MgPSBcInN1Y2Nlc3NcIjtcclxuZXhwb3J0IGNvbnN0IGNvbXBsZXRlZEZhaWwgPSBcImZhaWxcIjtcclxuZXhwb3J0IGNvbnN0IG5vUHJlUHJvY3Nzb3JDQiA9IFwiQSBjYWxsYmFjayBtdXN0IGJlIHByb3ZpZGVkIHRvIHByb2Nlc3MgdGhlIGl0ZW1zIGFuZCBzaG91bGQgcmV0dXJuIGEgbmF0aXZlIHByb21pc2UuXCI7XHJcbmV4cG9ydCBjb25zdCBpbmNvcnJlY3REYXRhVHlwZUZvckl0ZW1zID0gXCJUaGUgZGF0YSB0eXBlIHBhc3NlZCB0byBpbml0IG11c3QgYmUgYW4gYXJyYXkuXCI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3BkLW1ldGVyZWRyZXF1ZXN0cHJvY2Vzc29yL3NyYy9jb25zdGFudHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UodXRpbHMubWVyZ2UoZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLy4uL2RlZmF1bHRzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICB1cmw6IGFyZ3VtZW50c1swXVxuICAgIH0sIGFyZ3VtZW50c1sxXSk7XG4gIH1cblxuICBjb25maWcgPSB1dGlscy5tZXJnZShkZWZhdWx0cywgdGhpcy5kZWZhdWx0cywgeyBtZXRob2Q6ICdnZXQnIH0sIGNvbmZpZyk7XG4gIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG5cbiAgLy8gU3VwcG9ydCBiYXNlVVJMIGNvbmZpZ1xuICBpZiAoY29uZmlnLmJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwoY29uZmlnLnVybCkpIHtcbiAgICBjb25maWcudXJsID0gY29tYmluZVVSTHMoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICB9XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgLy8gTm90ZTogc3RhdHVzIGlzIG5vdCBleHBvc2VkIGJ5IFhEb21haW5SZXF1ZXN0XG4gIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICByZXR1cm4gZXJyb3I7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9XG5cbiAgICAgIGlmICghdXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgfVxuXG4gICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICB9O1xuICAgIH1cblxuICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICB9KSgpXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIid1c2Ugc3RyaWN0JztcblxuLy8gYnRvYSBwb2x5ZmlsbCBmb3IgSUU8MTAgY291cnRlc3kgaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkY2hhbWJlcnMvQmFzZTY0LmpzXG5cbnZhciBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG5cbmZ1bmN0aW9uIEUoKSB7XG4gIHRoaXMubWVzc2FnZSA9ICdTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXInO1xufVxuRS5wcm90b3R5cGUgPSBuZXcgRXJyb3I7XG5FLnByb3RvdHlwZS5jb2RlID0gNTtcbkUucHJvdG90eXBlLm5hbWUgPSAnSW52YWxpZENoYXJhY3RlckVycm9yJztcblxuZnVuY3Rpb24gYnRvYShpbnB1dCkge1xuICB2YXIgc3RyID0gU3RyaW5nKGlucHV0KTtcbiAgdmFyIG91dHB1dCA9ICcnO1xuICBmb3IgKFxuICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyXG4gICAgdmFyIGJsb2NrLCBjaGFyQ29kZSwgaWR4ID0gMCwgbWFwID0gY2hhcnM7XG4gICAgLy8gaWYgdGhlIG5leHQgc3RyIGluZGV4IGRvZXMgbm90IGV4aXN0OlxuICAgIC8vICAgY2hhbmdlIHRoZSBtYXBwaW5nIHRhYmxlIHRvIFwiPVwiXG4gICAgLy8gICBjaGVjayBpZiBkIGhhcyBubyBmcmFjdGlvbmFsIGRpZ2l0c1xuICAgIHN0ci5jaGFyQXQoaWR4IHwgMCkgfHwgKG1hcCA9ICc9JywgaWR4ICUgMSk7XG4gICAgLy8gXCI4IC0gaWR4ICUgMSAqIDhcIiBnZW5lcmF0ZXMgdGhlIHNlcXVlbmNlIDIsIDQsIDYsIDhcbiAgICBvdXRwdXQgKz0gbWFwLmNoYXJBdCg2MyAmIGJsb2NrID4+IDggLSBpZHggJSAxICogOClcbiAgKSB7XG4gICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpZHggKz0gMyAvIDQpO1xuICAgIGlmIChjaGFyQ29kZSA+IDB4RkYpIHtcbiAgICAgIHRocm93IG5ldyBFKCk7XG4gICAgfVxuICAgIGJsb2NrID0gYmxvY2sgPDwgOCB8IGNoYXJDb2RlO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnRvYTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICB9LFxuXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfSkoKVxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVycyB8fCB7fVxuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=