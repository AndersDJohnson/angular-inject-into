'use strict';

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return (root.injectInto = factory());
    });
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.injectInto = factory();
  }
}(this, function () {
  return function injectInto(injectees, callback) {
    var object;
    if (typeof callback === 'object') {
      object = callback;
      callback = null;
    }
    if (!object) {
      object = {};
    }
    var post = function () {
      var args = arguments;
      injectees.forEach(function (key, i) {
        object[key] = args[i];
      });
      if (callback) {
        callback(object);
      }
    };
    var annotated = [].concat(injectees);
    annotated.push(post);
    return annotated;
  }
}));
