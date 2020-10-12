/*eslint-disable*/
//let prompt = require('prompt-sync')()
// describe("constracter function calculator",function()
// {
//     it("the sum of the two numeber",function()
//     {
//         assert.equal(Calculator.sum(2,3),5)
//         assert.equal(Calculator.sum(4,2),6)
//         assert.isNaN(Calculator.sum(2,-5))

//     });

// });

// describe("multi", function() {

//     it("raises to n-th power", function() {
//       assert.equal(Calculator.mult(2, 3), 6);
   
//     });
  
//   });

describe("calculator", function() {
    let calculator;
    before(function() {
      sinon.stub(window, "prompt")
  
      window.prompt.onCall(0).returns("2");
      window.prompt.onCall(1).returns("3");
  
      calculator = new Calculator();
      calculator.read();
    });
  
    it("when 2 and 3 are entered, the sum is 5", function() {
      assert.equal(calculator.sum(), 5);
    });
  
    it("when 2 and 3 are entered, the product is 6", function() {
      assert.equal(calculator.mul(), 6);
    });
  
    after(function() {
      prompt.restore();
    });
  });