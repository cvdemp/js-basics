exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
  globals : function() {
    var myObject = {
      name : 'Jory'
    };

    return myObject;
  },

  functions : function(flag) {
    if (flag) {
      var getValue = function() { return 'a'; }
    } else {
      var getValue = function() { return 'b'; }
    }

    return getValue();
  },

  parseInt : function(string) {
    var num = parseInt(string)
    return num;
  },

  identity : function(val1, val2) {
    if (val1 === val2) {
      var identity = function() { return true; }
    } else {
      var identity = function() { return false; }
    }

    return identity();
  }
};
