/*eslint-disable*/
function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 10) {
    let shooter = function() {
                 alert( i );
                         };
    shooters.push(shooter);
    i++;
    }
    return shooters;
    }
    let army = makeArmy();
    army[0];