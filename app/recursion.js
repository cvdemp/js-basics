exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    // Extra Credit
  },

  permute: function(arr) {
    // Extra Credit
  },

  fibonacci: function fibonacci(n) {
    if (n === 0 ){
      return 0;
    }
    else if (n === 1){
      return 1;
    }
    else {
      return fibonacci(n-1) + fibonacci(n-2);
    }
  },

  validParentheses: function(n) {
    // Extra Credit
  }
};
