
/*eslint-disable*/
let x=Date.now();
function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 10) {
        let j=i;
    let shooter = function() {
    console.log( "the value of j",j );
    };
    shooters.push(shooter);
    i++;
    }
    return shooters;
    }
    let army = makeArmy();
    army[0];
    console.log("army",army[0]())

let y=Date.now();
let jsonToobject=`{"employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
  ]}`
  let json=JSON.parse(jsonToobject)
console.log("total time it takes to complete",json.employees.lastName)
