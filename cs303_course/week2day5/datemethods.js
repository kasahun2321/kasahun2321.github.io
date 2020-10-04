/*eslint-disable*/
{
var d = new Date("may 12,1992 11:13:00");
console.log("full static date :",d)
//static way of date methood printing
d.setFullYear(2020);
let year=d.getFullYear()
console.log("static way of year",year)
let month=d.getMonth()
console.log("static way of month",month)
let date=d.getDate()
console.log("static way of date",date)
let day=d.getDay()
console.log("static way of day",day)
let hour=d.getHours()
console.log("hour:",hour)
let minute=d.getMinutes()
console.log("minutes:",minute);
let millisecond=d.getMilliseconds();
console.log("millisecond:",millisecond)
let gettime=d.getTime();
console.log("the get time method result",gettime)

///modifying the date using setfull month and dat
}{
var d = new Date("may 12,1992 11:13:00");
d.setFullYear(1999);
d.setMonth(12)
d.setDate(27)
d.setDay(4)
d.setHours(22)
d.setMinutes(30)
d.setSeconds(33)

let year=d.getFullYear()
console.log("modified year static way of year",year)
let month=d.getMonth()
console.log("static way of month",month)
let date=d.getDate()
console.log("static way of date",date)
let day=d.getDay()
console.log("static way of day",day)
let hour=d.getHours()
console.log("hour:",hour)
let minute=d.getMinutes()
console.log("minutes:",minute);
let millisecond=d.getMilliseconds();
console.log("millisecond:",millisecond)
let gettime=d.getTime();
console.log("the get time method result",gettime)



}
//uptodaye way of taking result

let takecurrentfulldate=new Date()
console.log("dynamic date:",takecurrentfulldate);
 let fullyear=takecurrentfulldate.getFullYear()
 console.log("year only of today:",fullyear);
 let getmonth=takecurrentfulldate.getMonth()
 console.log("from the date today the month will be 0 to jan 11 for december:",getmonth);
 let getdatemonth=takecurrentfulldate.getDate()
 console.log("getDate give the day 1-to 31 in number:", getdatemonth);
 let datemondaytosunday=takecurrentfulldate.getDay()
 console.log("monday 1 sunday 7:",datemondaytosunday)
 let hour=takecurrentfulldate.getHours()
 console.log("hour:",hour)
 let minute=takecurrentfulldate.getMinutes()
 console.log("minutes:",minute);
 let millisecond=takecurrentfulldate.getMilliseconds();
 console.log("millisecond:",millisecond)
 let gettime=takecurrentfulldate.getTime();
 console.log("the get time method result",gettime)

