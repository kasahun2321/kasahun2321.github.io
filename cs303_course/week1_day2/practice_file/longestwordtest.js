"use strict";
/* global pow assert */
describe("longest word size from give array ", function() {

    it("from a,ab and acd then acd is long", function() {
        let arr1=["a","ab","acd"]
      assert.equal(findLongestWord(arr1), 3);
    });
  
    it("from helloo abebe,beso, fir then helloo is 6 character long", function() {
        let arr=["helloo","abebe","beso","fit"]
      assert.equal(findLongestWord(arr), 5);
    });  
  
  });