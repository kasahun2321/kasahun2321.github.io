
/*eslint-disable*/
{
    
    function printNumbers(from, to) {
        let current = from;
      
        let timerId = setInterval(function() {
          console.log(current);
          if (current == to) {
            clearInterval(timerId);
          }
          current++;
        }, 1000);
      }
      
      // usage:
      printNumbers(5, 10);

}
{

    function printNumbers(from, to) {
        let current = from;
      
        setTimeout(function go() {
          console.log(current);
          if (current < to) {
            setTimeout(go, 1000);
          }
          current++;
        }, 1000);
      }
      
      // usage:
      printNumbers(5, 10);
}