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
    arr.unshift(item);

    return arr;
  },

  curtail : function(arr) {
    arr.shift();

    return arr;
  },

  concat : function(arr1, arr2) {
    var result = arr1.concat(arr2);

    return result;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0 , item);

    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for(var index = 0; index < arr.length; ++index){
      if(arr[index] == item)
        count++;
    }
    return count;
  },

  duplicates : function(arr) {
    var dupArr = arr.filter(function duplicates(elem,pos) {
      return arr.indexOf(elem) != pos;
    });
    return dupArr;
    // HALP, returning an array with some dups
  },


  square : function(arr) {
    var squareArr = arr.map(function(number){
      return Math.pow(number,2);
    });
    return squareArr;
  },

  findAllOccurrences : function(arr, target) {
    var indices = []
    var index = arr.indexOf(target);
    while (index != -1) {
      indices.push(index);
      index = arr.indexOf(target, index +1);
    }
    return indices
  }
};
