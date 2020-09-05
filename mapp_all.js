
function makeMultiplier(multiplier) {
    var myFunFunc = function (x) {
      return multiplier * x;
    };
    
    return myFunFunc;
  }
  
  var operation = makeMultiplier(10);
  console.log(operation(10));
  let me=3;
  let r=false;
  console.log(me*r)