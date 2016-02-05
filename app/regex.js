exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var reg = /\d+/;
    str.match(reg);
  },

  containsRepeatingLetter : function(str) {
// one or more of any letter
  },

  endsWithVowel : function(str) {

  },

  captureThreeNumbers : function(str) {

  },

  matchesPattern : function(str) {

  },

  isUSD : function(str) {

  }
};
