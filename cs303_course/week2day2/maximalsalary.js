
/*eslint-disable*/

{//start brace 
    function topSalary(salaries) {

        let max = 0;
        let maxName = null;
      
        for(const [name, salary] of Object.entries(salaries)) {
          if (max < salary) {
            max = salary;
            maxName = name;
          }
        }
      
        return maxName;
      }



      // after this test code 
      /*eslint-disable*/
      describe("topSalary", function() {
        it("returns top-paid person", function() {
          let salaries = {
            "John": 100,
            "Pete": 300,
            "Mary": 250
          };
      
          assert.equal( topSalary(salaries), "Pete" );
        });
      
        it("returns null for the empty object", function() {
          assert.isNull( topSalary({}) );
        });
      });

    
}// end brace
