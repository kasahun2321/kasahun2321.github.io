function permutation_fun(A, B) {
    let p = A.first();
    if (A.size() != B.size()) {
        return false;
    }
    else {
        while (!A.isLast(p)) {
            let a = p.element();
            let q = B.first();
            let haselement = false;
            if (!(a == q.element())) {
                while (!B.isLast(q)) {
                    q = B.after(q);
                    let b = q.element();
                    if (a == b) {
                        haselement = true;
                        break;
                    }
                    // if (!haselement) {
                    //     return false;
                    // }

                    else {
                        haselement = true;
                        p = A.after(p); 
                    }
               }
                
            }
            

            
            

        }
        
    }

 

}

let A = new Sequence(5)
console.log("a data new creates")
A.insertFirst(12)
A.insertLast(22)
A.insertBefore(A.first(), 122)
A.insertBefore(A.first(), 1233)
A.insertBefore(A.first(),234)
//A.insertBefore(A.first(),123)
A.print();





let B = new Sequence(5);
console.log("b sata created")
B.insertFirst(40)
B.insertLast(2000)
B.insertAfter(B.first(), 120)
B.insertAfter(B.first(), 150)
B.insertAfter(B.first(), 1900)
//B.insertBefore(A.first(),123)

B.print()
// let kar=new permutation ()
console.log(permutation_fun(A,B))

