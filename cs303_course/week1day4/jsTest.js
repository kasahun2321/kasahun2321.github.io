/*eslint-disable*/
"use strict";

describe("readNumber", function() {
 
it("if it is a number return it", function() {
prompt.returns("10");
assert.strictEqual(readNumber(), 10);
    });
 
it("if 0, returns 0", function() {
prompt.returns("0");
assert.equal(readNumber(), 0);
    });

it("continues the loop until to get a number", function() {
prompt.onCall(0).returns("not a number");
prompt.onCall(1).returns("not a number again");
prompt.onCall(2).returns("5");
assert.strictEqual(readNumber(), 5);
  });
 
it("if an empty line, returns null", function() {
prompt.returns("");
assert.isNull(readNumber());
      });

it("if cancel, returns null", function() {
prompt.returns(null);
assert.isNull(readNumber());
      });

    });
 
describe("random1", function() {
 
it("values from 1 ... to 1.9999999999 become 1", function() {
assert.equal(random1(1, 1.9999999999), 1);
        });

it("values from 2 ... to 2.9999999999 become 2", function() {
assert.equal(random1(2, 2.9999999999), 2);
        });
 
it("values from 3 ... to 3.9999999999 become 3", function(){
assert.equal(random1(3, 3.9999999999), 3)
        });
    });

