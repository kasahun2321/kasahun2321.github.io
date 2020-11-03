//true olution by amna
// function removeDuplicate(L) {
//     let p = L.first()
//     while (!L.isLast(p)) {
//         let e = p.element()
//         remove_Duplicate_Helper(e, L.after(p), L)
//         if (!L.isLast(p)) {
//             p = L.after(p)
//         }
  
//     }
  
//  }
  
//  function remove_Duplicate_Helper(e, p, L) {
//     while (!L.isLast(p)) {
//         let q = L.after(p)
//         if (e === p.element()) {
//             L.remove(p)}
//              p = q
        
//     }
    
    
//     if (e === p.element()) {
//         L.remove(p)}
  
//  }
 
 
 
 
  
//  (removeDuplicate(tst2))
//  tst2.print()

function removeDuplicate(L) {
    let p = L.first()
    while (!L.isLast(p)) {
        let e = p.element()
        remove_Duplicate_Helper(e, L.after(p), L)
        if (!L.isLast(p)) {
            p = L.after(p)
        }
  
    }
  
 }
  
 function remove_Duplicate_Helper(e, p, L) {
    while (!L.isLast(p)) {
        let q = L.after(p)
        if (e === p.element()) {
            L.remove(p)}
             p = q
        
    }
    
    
    if (e === p.element()) {
        L.remove(p)}
  
 }
 
 console.log("before duplicate is not removed")
 tst2.print()
 
 console.log("after duplicate is removed is removed");
  
 removeDuplicate(tst2)
 tst2.print()