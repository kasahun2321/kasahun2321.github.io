const Map = require('./HT_Dictionary.js');
const List = require('./DLinkedList.js');

function genData2(n, k) {
    let dat = new Array(n);
    for (let i=0; i<n; i++) {
        let rand = Math.floor(Math.random()*100)%k + 1;
        dat[i] = rand;
    }
    return dat;
}
function genData(n, k) {
    let dat = new List.DLinkedList();
    for (let i=0; i<n; i++) {
        let rand = Math.floor(Math.random()*100)%k + 1;
        dat.insertLast(rand);
    }
    return dat;
}
function findWinnerHT(dat) {  // dat is a LinkedList
    //let winners =[];
    let D = new Map.HT_Dictionary();
    let k = dat[0];
    D.insertItem(k,1)     
     for(let i=1; i< dat.length;i++){
        k = dat[i];      
         let cnt = D.findElement(k);
         if(cnt === null){
             D.insertItem(k,1);
         }else{
             cnt =cnt+1;
             D.insertItem(k,cnt);
         }
     }
    D.print();
    let winners=[];  // put the winners in an array
    let iter = D.items();
    let max = 0;
    while (iter.hasNext()) {
        let obj =  iter.nextObject();
        let count = obj.element();
        let keys = obj.key();
        //console.log(`key ${obj.key()},value ${obj.element()}`)
 
        if(count ==max){
        
           winners.push(`(${keys},${max})`);
           
        }
        if(count > max ){
            max = count;
           winners =[];
           //winners.push(keys,max);
           winners.push(`(${keys},${max})`);
           
        }
     
        
    }
   // return currMax,winners

    // your code goes here

    console.log(winner);
}


function findWinnerHT2(dat2) {

    let D = new Map.HT_Dictionary();
    let p=dat2.first();
    D.insertItem(p.element(),1)
    while(!dat2.isLast(p))
    {
        p=dat2.after(p)
        let cnt=D.findElement(p.element())
        if(cnt==null)
        {
            D.insertItem(p.element(),1)
        }
        else{
            cnt=cnt+1
            D.insertItem(p.element(),cnt)
        }
    }
   
    D.print();
    let winners = [];  // put the winners in an array
    // determine the winners from traversing the Dictionary D
    let iter=D.items();
    let max=0;
    while(iter.hasNext())
    {
        let obj=iter.nextObject()
        let count=obj.element()
        let keys=obj.key();

        if(count > max || max==keys){
            max = count;
            winners =[];
           winners.push(`(${keys},${max})`);
    }}
    
    console.log(winners);

    // your code goes here

    console.log(winners);
}
let dat2 = genData2(1000, 10);
let dat = genData(1000, 10);
findWinnerHT(dat);
findWinnerHT2(dat2);