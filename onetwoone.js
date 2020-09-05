let x = [1, 2, 2, 2,6, 1]
function checker(x) {
let ans=true;
    for (let i = 1; i < x.length - 1; i++) {
        let addone = x[0] + x[x.length - 1];
        let addtwos = (x.length - 2) * 2;
        let sum = 0
        sum += x[i];
        if (addone !== 2 && sum !== addtwos) {
            //if((x[0]&&x[x.length-1])==1&&(x[i]===2))
           ans=false;
        }
        
    }
    return ans;
    
}
console.log(checker(x))