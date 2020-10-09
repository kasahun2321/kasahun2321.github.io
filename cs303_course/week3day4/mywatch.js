/*eslint-disable*/

function tenclock() {
    let date = new Date();
    let x = date.getHours()
    let y = date.getMinutes()
    let z = date.getSeconds();
    console.log(x, ":", y, ":", z)
  
  }
  setTimeout(tenclock, display);
  function display() {
    let x = Date.now();
    while (x - Date.now() ===0) {
      setTimeout(watch, 1000)
    }
  }
  tenclock();