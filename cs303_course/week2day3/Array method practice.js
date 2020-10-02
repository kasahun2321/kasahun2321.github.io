/*eslint-disable*/
const numArray = [5, 0, 7, 77, -20, 300, 51, 2]
const peopleArray = [{ name: "Sam", age: 15 },
{ name: "William", age: 6 },
{ name: "Lucy", age: 13 },
{ name: "Barney", age: 80 }]

// map:
//  - double numbers
//  - double age
{//array number double begun
  function doublenum() {
    let x = numArray.map(Element => Element * 2);
    return x;
  }

  //test
  describe("Double array of number", function () {


    it("doubled array check ", function () {

      assert.deepEqual(doublenum(numArray), [10, 0, 14, 154, -40, 600, 102, 4]);
    });

  });

}//arrey double end

/**
 * 
 * 
 */
{//double age begun

  function doubleAge() {
    let y = peopleArray.map(Element => Element.age * 2);
    return y;
  }

  //test
  describe("Double array of age only", function () {


    it("double age only from given array of object ", function () {
      assert.deepEqual(doubleAge(peopleArray), [30, 12, 26, 160]);
    });

  });

}//double age end






// // filter:
// //  - filter all even numbers
// //  - filter all age > 10
// //  - find even, include even
// //  - find age > 10, include age > 10
{
  function filterEvenNum() {
    let even = numArray.filter(element => element % 2 == 0)
    console.log(even);
    return even;
  }

  //test
  describe("Filtering all even from the array", function () {


    it("even numbers ", function () {
      assert.deepEqual(filterEvenNum(numArray), [0, -20, 300, 2]);
    });

  });
}


{
  function filterAgeAboveTen() {
    let ageaboveten = peopleArray.filter(function (e) {
      let abc = e.age > 10;
      console.log(abc);
      return abc;
    });
    console.log("people age above ten years old", ageaboveten);

    // let age10=peopleArray.filter(element=>element.age>10)
    // console.log(age10);
    return ageaboveten;
  }

  //test
  describe("people age above ten years old", function () {


    it("people age above ten years old ", function () {
      assert.deepEqual(filterAgeAboveTen(peopleArray), [{ name: "Sam", age: 15 },
      { name: "Lucy", age: 13 },
      { name: "Barney", age: 80 }]);
    });

  });
}

{
  function filterAgeTenandAbove() {
    let ageaboveten = peopleArray.filter(function (e) {
      let abc = e.age >= 10;
      console.log(abc);
      return abc;
    });
    console.log("people age ten above", ageaboveten);

    // let age10=peopleArray.filter(element=>element.age>10)
    // console.log(age10);
    return ageaboveten;
  }

  //test
  describe("people age  ten years and above", function () {


    it("people age above ten years old ", function () {
      assert.deepEqual(filterAgeAboveTen(peopleArray), [{ name: "Sam", age: 15 },
      { name: "Lucy", age: 13 },
      { name: "Barney", age: 80 }]);
    });

  });
}



// // reduce
// // - find sum of numbers
// // - find average of numbers
// // - find max of numbers
// // - find max for ages
// // - use a chain of map filter reduce to find the average age of people with even number ages
// // - use a chain of map filter reduce to find the average age of people with odd number ages


// //average of numarray

{
  function findsumbyreduce() {
    let avg = numArray.reduce((accumlator, current) => (accumlator + current)) / numArray.length;
    console.log("the averager value:", avg);
    return avg;

  }

  //test
  describe("sum of the array", function () {


    it("sum ", function () {
      assert.deepEqual(findsumbyreduce(numArray), 52.75);
    });

  });
}
{
function maxnum()
{

let maxnum=numArray.reduce((firstvlue,secondvalue)=>
{
  return firstvlue >= secondvalue  ? firstvlue : secondvalue;
});
console.log("the maximum elemtn of array",maxnum);
return maxnum;
}
describe("the maximum number from the list",function()
{
  it("max will be",function(){
    assert.equal(maxnum(numArray),300);
  })
});

}
{
  function maxage()
  {
    let maxage=peopleArray.reduce((firstvlue,secondvalue)=>
    {
      return firstvlue.age>= secondvalue.age  ? firstvlue.age: secondvalue.age;
    });
    console.log("the maximum elemtn of array",maxage);
    return maxage;
  }

  describe("the maximum age ",function () {
    it("max age will be:",function () {
      assert.deepEqual(maxage(peopleArray), 80)
      
    })
    
  })
}

//combined filterig and mapping of array
{
function peopleEvenAge()
{

}

describe("the even age ",function () {
  it("max age will be:",function () {
    assert.deepEqual(maxage(peopleArray), 80)
    
  });
  
});
}
{
function avgOddage() {

let avg_age_of_people=peopleArray.map(element=>(element.age)%2).reduce((accumlate,current)=>{

  let count=0;
   for(let x in peopleArray)
   {
     count=count+1;
   }
 return (accumlate+current)/count;
});
return avg_age_of_people;
}

describe("odd age average",function () {
  it("average:",function () {
    assert.deepEqual(avgOddage(peopleArray),0.078125)
    
  });
  
});
}