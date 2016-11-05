var assert = require("chai").assert;

var luhn = require("./luhn");

var check = luhn.check;
var sumArray = luhn.sumArray;
var reverseNumber = luhn.reverseNumber;

describe("Check()", function(){
  it("should return true if the number is valid for the algorithm", function(){
    var number = "79927398713";
    var result = check(number);
    assert.isTrue(result);
  });

});

describe("sumArray()", function(){
  it("should return the sum of the array", function(){
    assert.equal(sumArray([1,2,3]),6);
  });
});

describe("reverseNumber()", function(){
  it("should return the input number reversed", function(){
    assert.equal(reverseNumber(79927398713), 31789372997);
  });
});