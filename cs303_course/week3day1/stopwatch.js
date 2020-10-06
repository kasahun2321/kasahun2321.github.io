//  exercise 
//  make a counter that count down from some Number
//  --it should print out the current number every second
// function stopwatch 
/*eslint-disable*/

/////////////////
/**
 * 
 * @param {number} starttime
 * @returns{ undefined} 
 */

function stopwatch(starttime)
{
    let currentime=starttime;
    let watchId=setInterval(logtime,1000);


function logtime()
{
    console.log(currentime);
    
    if(currentime===0)
    {
        clearInterval(watchId);
    }
    else
    {
        currentime=currentime-1; 
    }
}
}
stopwatch(3);

