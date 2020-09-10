/*eslint-disable*/

// let prompt=require("prompt-sync")();
/**
 * check for emptyness of object 
 * 
 */

describe("isEmpty", function() {
    it("returns true for an empty object", function() {
      assert.isTrue(isEmpty({}));
    });
  
    it("returns false if a property exists", function() {
      assert.isFalse(isEmpty({
        anything: false
      }));
    });
  });


  ///////////////////
  describe("calculator", function() {
  
    context("when 2 and 3 entered", function() {
      beforeEach(function() {
        sinon.stub(window, "prompt");
  
        prompt.onCall(0).returns("2");
        prompt.onCall(1).returns("3");
  
        calculator.read();
      });
  
      afterEach(function() {
        prompt.restore();
      });
  
      it("the sum is 5", function() {
        assert.equal(calculator.sum(), 5);
      });
  
      it("the multiplication product is 6", function() {
        assert.equal(calculator.mul(), 6);
      });
    });
  
  });


  describe("Accumulator", function() {

    beforeEach(function() {
      sinon.stub(window, "prompt")
    });
  
    afterEach(function() {
      prompt.restore();
    });
  
    it("initial value is the argument of the constructor", function() {
      let accumulator = new Accumulator(1);
  
      assert.equal(accumulator.value, 1);
    });
  
    it("after reading 0, the value is 1", function() {
      let accumulator = new Accumulator(1);
      prompt.returns("0");
      accumulator.read();
      assert.equal(accumulator.value, 1);
    });
  
    it("after reading 1, the value is 2", function() {
      let accumulator = new Accumulator(1);
      prompt.returns("1");
      accumulator.read();
      assert.equal(accumulator.value, 2);
    });
  });

  