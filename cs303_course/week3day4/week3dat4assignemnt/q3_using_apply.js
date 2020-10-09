/*eslint-disable*/
'use strict'
let prompt=require('prompt-sync')();
{
    function askPassword(ok, fail) {
        //let prompt = require('prompt-sync')()
        
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
 
    askPassword.apply(user, [user.loginOk.bind(user), user.loginFail.bind(user)]);
    // OR
    // askPassword(() => user.loginOk.apply(user), () => user.loginFail.apply(user));
}