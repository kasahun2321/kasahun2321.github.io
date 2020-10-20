/*eslint-disable*/
/**
 * Create a CheckingAccount class by extending Account. In addition to the attributes of an
* Account, it should have an overdraft limit variable. The overdraft amount indicates how much
 * a person is allowed to temporarily withdraw beyond what they have. In other words, it’s the
*amount that an account is allowed to go into the red (negative balance). Be sure to set this value
*in the constructor and create a getter and a setter for it. Also make sure that you override the
* withdraw(amount) method and the toString() method. Test with Mocha / Chai tests.
 *
 *
 */
class CheckingAccount extends Account
{
 /**
      * constarctor for creating new  savign account
      * @param {number}
      * @param {  number}
      * 
      */
     constructor (number,overdraft)
     {
         const superreturn=super(number)
         console.log(superreturn)
         this.interest=int
     }
     /**
      * @returns {number} the balance of the account
      */

     getOverdraft()
     {
         return this.interest;
     }
     /**
      * 
      * @param {number} newinterest 
      * @returns {undefined} reset the interst rate of the account 
      *  
      */
     setOverdraft()
     {
         this.interest=newinterest;
     }

     endoFMonth()
     {
         
     }

 }

 const testsaving = new SavingsAccount(1234,3)
 console.log("the interest rate ",testsaving.getInterest());
 testsaving.deposit(1000)
 console.log("balance show ",testsaving)