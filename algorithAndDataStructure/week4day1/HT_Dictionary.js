const Tab = require('./LinearHashTable.js');

class HT_Dictionary {
    constructor() {
        this._HT = new Tab.LinearHashTable();
    }
    findElement(key) {
        return this._HT.findElement(key);
    }
    insertItem(key, elem) {
        return this._HT.insertItem(key, elem);
    }
    removeElement(key) {
        return this._HT.removeElement(key);
    }
    size() {
        return this._HT.size();
    }
    isEmpty() {
        return this._HT.isEmpty();
    }
    items() {
        return this._HT.items();
    }
    keys() {
        return this._HT.keys();
    }
    elements() {
        return this._HT.elements();
    }
    print() {
        return this._HT.print();
    }
}

function genData(n, k) {
    let dat = []
    for (let i=0; i<n; i++) {
        let rand = Math.floor(Math.random()*100)%k + 1;
        dat[i]=rand;
    }
    return dat;
}
let dat = genData(100, 10);
console.log(dat)

exports.HT_Dictionary = HT_Dictionary;

function findAllRange(k1,k2,data)
{
    return 0
}

function isPermutation(A,B)
{
    let AD=new HT_Dictionary()
    let BD=new HT_Dictionary()
    let p=A[0]
    let q=B[0]
    AD.insertItem(p,1)
    BD.insertItem(q,1)

    let size =A.length;
    for(let i=0;i<size;i++)
    {
        k1=A[i]
        k2=B[i]
        let cnt1=AD.findElement(k1)
        let cnt2=BD.findElement(k2)
        if(cnt1==null && cnt2===null)
        {
            AD.insertItem(k1,1)
            BD.insertItem(k2,1)

        }
        else if(cnt1==null)
        {
            AD.insertItem(k1,1)
        }
        else if(cnt2==null)
        {
            BD.insertItem(k2,1)
        }
        else 

        {
            cnt1=cnt1+1
            cnt2=cnt2+1
            AD.insertItem(k1,cnt1)
            BD.insertItem(k2,cnt2)

        }

    }
    console.log(AD)
    console.log(BD)
    

    let Aitem=AD.items()
    let Bitem=BD.items()
    while(Aitem.hasNext())
    {
        let Aobj=Aitem.nextObject()
        let Bobj=Bitem.nextObject()
        if(Aobj.element()==Bobj.element() && Aobj.key()==Bobj.key())
        {
            return true;
        }
        else{
            return false;
        }
    }


   
}

let a=[12,3,4,5,5,6,7,8,9,2]
let b=[12,3,4,55,6,7,8,8,9,2]

isPermutation(a,b)