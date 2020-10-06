
/*eslint-disable*/

{
  
  /**
   * @returns (array)
   */
  function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
    /**
     * @returns{undefined}
     */
        let shooter = function() { // shooter function
          console.log( i); // should show its number
        };
      shooters.push(shooter);
      i++;
    }
  
    return shooters;
  }
  
  let army = makeArmy();
  console.log(army[0]());
  console.log(army[1]());
  console.log(army[2]());
  
  // Now the code works correctly
//   console.log (army[0]()); // 0
//  console.log (army[5]()); // 5

}


/**
 * 
 * @param {number} x 
 * @param {number } y
 * @returns {number} 
 */
function namename(x,y){
  return x+y;
  
}

/**
 * 
 * @param {number} x 
 * @param {number } y
 * @returns {number} 
 */
function sumsum(x,y)
{
  return "abebe beso bela"
}

