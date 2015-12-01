exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {
    var strArr = str.split('');
        var reverseArr = [];
        var currentChar = '';
        while (strArr.length > 0){
          currentChar = strArr.pop();
          reverseArr.push(currentChar);
        };
        var newStr = reverseArr.join('');
        return newStr;
  }
};
