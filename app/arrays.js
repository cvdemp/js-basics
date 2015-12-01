exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    var pos;
        while (arr.indexOf(item) != -1) {
          pos = arr.indexOf(item);
          arr.splice(pos, 1);
        };
        return arr;
  },

  append : function(arr, item) {
    arr.push(item);

    return arr;
  },

  truncate : function(arr) {
    arr.pop();

    return arr;
  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {
    var result = arr1.concat(arr2)
  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
