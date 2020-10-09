//out put every second using settime and set interval
/*eslint-disable*/
function abc(x,y)
{
  while(x<y)
  {
    console.log(x)
    x++;
    if(x===19)
    clearInterval(xp)

  }
}
 let xp=setInterval(abc,1000,12,20)
 