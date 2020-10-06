
/* eslint-disable */
'use strict'
function mylist(value)
{
this.value = value;
this.descendents=[];
 
}
const abe = new mylist('Abe');
const homer = new mylist('Homer');
const bart = new mylist('Bart');
const lisa = new mylist('Lisa');
const maggie = new mylist('Maggie');
// associate root with is descendents
abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);

