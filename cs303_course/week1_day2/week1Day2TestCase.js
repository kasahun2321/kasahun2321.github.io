"use strict";

/**
 * 
 * @param {number of collcetion then the max}
 */
/* global pow assert */
describe("maximum of three num", function() {

    it("max of 3,7,10 is 10", function() {
      assert.equal(maxOfThree(3,7,10), 10);
    });
  
    it("32,2 and 27 is 32", function() {
      assert.equal(maxOfThree(32, 3,27), 32);
    });  
  
  });

  "use strict";

  /**
   * sum of given array test case 
   * 
   */
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

  "use strict";

  /**
   * longest word in size  from the given array
   */
describe("longest word size from give array ", function() {

    it("from a,ab and acd then acd is long", function() {
        let arr1=["a","ab","acd"]
      assert.equal(findLongestWord(arr1), 3);
    });
  
    it("from helloo abebe,beso, fir then helloo is 6 character long", function() {
        let arr=["helloo","abebe","beso","fit"]
      assert.equal(findLongestWord(arr), 6);
    });  
  
  });

/**
 * check the parameter pash to the function it weather 
 * it is vowel of not vowel
 * 
 */

  describe("isVowel", function () {
    it("a is vowel", function () {
    assert.equal(isVowel("a"), true);
    });
    it("e is vowel", function () {
    assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
    assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
    assert.equal(isVowel("o"), true);
    });
    it("u is vowel", function () {
    assert.equal(isVowel("u"), true);
    });
    it("z is not vowel", function () {
    assert.equal(isVowel("z"), false);
    });
    it("5 is not vowel", function () {
    assert.equal(isVowel("5"), false);
    });
});   

/**
 * 
 * filter array test case
 */

describe("reverse array", function() {

  it("kasahun will be nuhasak", function() {
      let arr=["car","hello"]
    assert.equal(reverse_array(arr),"rac","olleh");
  }); 

});

"use strict";
/* global sum assert */
describe("filterLongestWords", function () {
  it("['Adonay','Simon','Astuka','Fre'],5 is ['Adonay','Astuka']", function () {
    assert.deepEqual(
      filterLongestWords(["Adonay", "Simon", "Astuka", "Fre"], 5),
      ["Adonay", "Astuka"]
    );
  });
 
  it("['Roman','Kassa','Dani'], 4 is ['Roman','Kassa']", function () {
    assert.deepEqual(filterLongestWords(["Roman", "Kassa", "Dani"], 4), [
"Roman",
"Kassa",
    ]);
  });
});

