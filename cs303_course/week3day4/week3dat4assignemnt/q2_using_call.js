/*eslint-disable*/
"use strict"
let prompt=require('prompt-sync')();
 
{
    function askPassword(ok, fail) {
       
        let password = prompt("Password?", '');
        if (password == "rockstar") ok();
        else fail();
    }
    let user = {
        name: 'John',
        loginOk() {
            console.log(`${this.name} logged in`);
        },
        loginFail() {
            console.log(`${this.name} failed to log in`);
        },
    };
 
    askPassword.call(user, user.loginOk.bind(user), user.loginFail.bind(user));
     askPassword(() => user.loginOk.call(user), () => user.loginFail.call(user));
 
}