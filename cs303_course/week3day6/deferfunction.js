/*eslint-disable*/
Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
  };
  
  function f() {
    console.log("Hello!");
  }
  
  f.defer(1000); // shows "Hello!" after 1 sec