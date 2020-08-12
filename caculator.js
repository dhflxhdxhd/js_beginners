const caculator = {
    plus : function(a,b) {return a+b;}, 
    minus : function(a,b) { return a-b;},
    multiple : function(a,b) {return a*b;}, 
    divisor : function(a,b) {return a/b;},
    power : function(a,b) {return Math.pow(a,b);}
  }
  
  // calculator is object
  const plustResult = caculator.plus(5,5);
  const minusResult = caculator.minus(1,6);
  const multipleResult = caculator.multiple(3,8);
  const diviResult = caculator.divisor(6,4);
  const powerResult = caculator.power(2,5);
  
  console.log(plustResult, minusResult, multipleResult, diviResult, powerResult);
  