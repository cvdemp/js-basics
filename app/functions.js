exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  isPrime : function(num) {
    if(num < 2){
      return false;
    }
    var isPrime = true;
    for (var i =2; i <= Math.sqrt(num); i++){
      if (num % i == 0) {
        isPrime = false
      }
    }
    return isPrime;
  },

  arraySum : function(array) {
    var sum = array.reduce(function(a,b){
      return a + b;
    });
    return sum;
  },

  fizzBuzz : function(num) {
    if(typeof num != "number"){
      return false;
    }

    for(; num <= 1000; num ++){
      if(num % 3 == 0 && num % 5 == 0){
          return "fizzbuzz";
      }
      else if(num % 3 == 0){
          return "fizz";
      }
      else if(num % 5 == 0){
          return "buzz";
      }
      else {
          return num;
      }
    }
  }
};
