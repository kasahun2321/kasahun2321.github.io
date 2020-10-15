/*eslint-disable*/
/**
 *  the banck account class
 * SavingsAccount should  have an interest variable, which is set in the constructor 
 *  and has a getter and a setter mehtod. It should also have an addInterest() 
 * method which deposits the interest amount into the account.
 *  The calculation for the amount is balance * interest / 100
 * 
 * 
 * 
 */

 class SavingsAccount extends Account
 {
     /**
      * constarctor for creating new  savign account
      * @param {number}
      * @param {  number}
      * 
      */
     constructor (number,int)
     {
         const superreturn=super(number)
         console.log(superreturn)
         this.interest=int
     }
     /**
      * @returns {number} the balance of the account
      */

     getInterest()
     {
         return this.interest;
     }
     /**
      * 
      * @param {number} newinterest 
      * @returns {undefined} reset the interst rate of the account 
      *  
      */
     setInterest(newinterest)
     {
         this.interest=newinterest;
     }

 }

 const testsaving = new SavingsAccount(1234,3)
 console.log("the interest rate ",testsaving.getInterest());
 testsaving.deposit(1000)
 console.log("balance show ",testsaving)