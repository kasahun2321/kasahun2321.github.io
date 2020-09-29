/*eslint-disable*/

function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }

  function filterRange(arr, a, b) {
    // added brackets around the expression for better readability
    return arr.filter(item => (a <= item && item <= b));
  }
  
  let arr = [5, 3, 8, 1];
  
  let filtered = filterRange(arr, 1, 4);
  
  alert( filtered ); // 3,1 (matching values)
  
  alert( arr ); // 5,3,8,1 (not modified)

  ///filter
  function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }
  
  let arr2 = [5, 3, 8, 1];
  
  filterRangeInPlace(arr2, 1, 4); // removed the numbers except from 1 to 4
  
  alert( arr2 ); // [3, 1]


  //sort function
  let arr3 = [5, 2, 1, -10, 8];

arr3.sort((a, b) => b - a);

alert( arr3);

///copy sort
function copySorted(arr) {
    return arr.slice().sort();
  }
  
  let arr4 = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(arr);
  
  alert( sorted );
  alert( arr4 );

  ///extedable calculator
  function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }

  //map to name
  let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary

//map to object
let johnn = { name: "John", surname: "Smith", id: 1 };
let petee = { name: "Pete", surname: "Hunt", id: 2 };
let maryy = { name: "Mary", surname: "Key", id: 3 };

let userss = [ johnn, petee, maryy ];

let usersMapped = userss.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));



alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // John Smith

///sort by age
function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
  }
  
  let john1 = { name: "John", age: 25 };
  let pete1 = { name: "Pete", age: 30 };
  let mary1 = { name: "Mary", age: 28 };
  
  let arr5 = [ pete1, john1, mary1 ];
  
  sortByAge(arr5);
  
  // now sorted is: [john1, mary1, pete1]
  alert(arr5[0].name); // John
  alert(arr5[1].name); // Mary
  alert(arr5[2].name); // Pete


  //shufle an array
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // counts of appearances for all possible permutations
  let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };
  
  for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
  }
  
  // show counts of all possible permutations
  for (let key in count) {
    alert(`${key}: ${count[key]}`);
  }

  //get average age
  function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
  let john2 = { name: "John", age: 25 };
  let pete2 = { name: "Pete", age: 30 };
  let mary2 = { name: "Mary", age: 29 };
  
  let arr6 = [ john2, pete2, mary2 ];
  
  alert( getAverageAge(arr6) ); // 28


  //filter unique array memeber
  function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(strings) ); // Hare, Krishna, :-O

  //Create keyed object from array
  let users2 = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users2);
  
  /*
  // after the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */
 function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }