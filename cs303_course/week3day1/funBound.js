/*eslint-disable*/
function f() {
    console.log(this.name);
  }
  
  f = f.bind( {name: "John"} ).bind( {name: "Pete"} );
  
  f(); // John

//
  {
    function f() {
        console.log( this ); // null
      }
      
      let user = {
        g: f.bind(null)// correct way of binding
      };
      
      user.g();//  null 
  }


  {// check the output  Function property after bind
    //Fix a function that loses "this"
  function sayHi() {
    console.log( this.name );
  }
  sayHi.test = 5;
  
  let bound = sayHi.bind({
    name: "John"
  });
  
  console.log( bound.test ); // what will be the output? why?  undefied

}

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
      
      askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
}

{

    function askPassword(ok, fail) {
        let password = prompt("Password?", '');
        if (password == "rockstar") ok();
        else fail();
      }
      
      let user = {
        name: 'John',
      
        login(result) {
          console.log( this.name + (result ? ' logged in' : ' failed to log in') );
        }
      };
      
      //askPassword(?, ?); // ?in place of this way
      askPassword(user.login.bind(user, true), user.login.bind(user, false));
}