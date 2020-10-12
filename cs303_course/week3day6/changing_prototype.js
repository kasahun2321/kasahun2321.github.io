/*eslint-disable*/
//In the start, we have this code:
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

console.log( rabbit.eats ); // true
////////////////////////////////////////////////////
//We added one more string (emphasized). What will console.log show now?
//////////////////////////////////////////
{
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

console.log( rabbit.eats ); // ? true

}

{

    ///////////////////////////////q2
   ////// …And if the code is like this (replaced one line)?
    ////////////////////
    function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

console.log( rabbit.eats ); // ?false
}

{
////////////////////////////////////////
////And like this (replaced one line)?
/////////////////////////////////////

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

console.log( rabbit.eats ); // ? true


}

/////
{
    //////////////////////
    //The last variant:
    //
    function Rabbit() {}
    Rabbit.prototype = {
      eats: true
    };
    
    let rabbit = new Rabbit();
    
    delete Rabbit.prototype.eats;
    
    console.log( rabbit.eats ); // ?  undefiend

}