/*eslint-disable*/
{

    function spy(func) {

        function wrapper(...args) {
          // using ...args instead of arguments to store "real" array in wrapper.calls
          wrapper.calls.push(args);
          return func.apply(this, args);
        }
      
        wrapper.calls = [];
      
        return wrapper;
      }

      describe("spy", function() {
        it("records calls into its property", function() {
          function work() {}
      
          work = spy(work);
          assert.deepEqual(work.calls, []);
      
          work(1, 2);
          assert.deepEqual(work.calls, [
            [1, 2]
          ]);
      
          work(3, 4);
          assert.deepEqual(work.calls, [
            [1, 2],
            [3, 4]
          ]);
        });
      
        
      
      });
}


{
    function delay(f, ms) {

        return function(...args) {
          let savedThis = this; // store this into an intermediate variable
          setTimeout(function() {
            f.apply(savedThis, args); // use it here
          }, ms);
        };
      
      }

      

}