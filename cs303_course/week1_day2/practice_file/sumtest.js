"use strict";
/* global pow assert */
describe("the sum of the array", function() {

    it("the sum of 1,2,3,4=10", function() {
        let arr=[1,2,3,4]
      assert.equal(sum(arr), 10);
    });
  
    it("sum od 10,20,30=60", function() {
        let arr2=[10,20,30]
      assert.equal(sum(arr2), 60);
    });  
  
  });