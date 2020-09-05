// let l=[1,-4,4,9,6]

// let temp=[];
// for(let i=0;i<l.length;i++)
// {
    
//     if(l[i]%2===0)
//     {
//         temp.push(l[i])
//     }
    
// }
// console.log(temp);

// function doubleif(arr)
// {
//     let min=0,max=0;
// for(let i=0;i<arr.length;i++)
// {
//     max=arr[0];
//      min=arr[0];
//     if(arr[i]>max)
//     {
//         max=arr[i];
//     }
//     if(arr[i]<min)
//     {
//         min=arr[i]
//     }
    
// }return [min,max]}
// console.log(doubleif(arr));


// let x=[12,3,45,90]

// // let y=x.map((n)=>sumd(n))

// // console.log(y);
// // function sumd(n)
// // {
// //     let sum =0;

// //     while(n>0)
// //     {
// //         sum+=n%10;
// //         n=Math.random(n/10);
// //     }
// //     return sum;
// // }
// // let pp=0;
// // for (let i=1;i<=2;i++)
// // {
// //     for (let j=0;j<=4;j+2)
// //     {
        
// //         console.log(i*j)
// //         console.log(i*j)
// //     }
    
// // }

// let str=["helo","dama_tiya","_ht"]

// let asd=str.filter(n=>fillterall(n))
// console.log(asd);
// function fillterall(s)
// {
//     for(let i=0;i<s.length;i++)
//     {
//         for(let j=0;j<s[i];j++)
//         {
//             if (s[i][j]=="_")
//             {
//                 temp=s[i]
//             }
//         }
//     return temp;
//     }

// }
// let arr=[1,3,4,-9,4]

// function doubleif(arr)
// {
//     let min=0,max=0;
// for(let i=0;i<arr.length;i++)
// {
//     max=arr[0];
//      min=arr[0];
//     if(arr[i]>max)
//     {
//         max=arr[i];
//     }
//     if(arr[i]<min)
//     {
//         min=arr[i]
//     }
    
// }return [min,max]}
// console.log(doubleif(arr));

// let x=[1,2,3,4,5]

// let kl=x.length;
// let sum=0;
// let i=2;
// while(i<kl)
// {
// sum+=x[i]
// i=i+2;
// }
// console.log(sum);

// let x=[1,2,3,4,4,5],y=[6,4,3,2,1,1];

// let sum=[]
// for (let i=0;i<x.length;i++)
// {
//     sum[i]=x[i]+y[i];
// }
// console.log(sum)

/// function accept array string then replace smae value

// let x=["hello","null","li","thyre","fixer"]

// function replacer()
// {
//     let temp=[];
//     let count=0;
//     for (let i=0;i<x.length;i++)
//     {
//             if(x[i].length>=3)
//             {
//                 x[i][0]=0;
//                 temp[i]=x[i]
//             }
//             else
//             {
//                 temp[i]="invalide";
//                 count+=1;

//             }
        
//     }
//  return  [temp,count];
// }

// console.log(replacer(x));

// let k=["hello","hi","Bye"]
// console.log(k.map(n=>n.toUpperCase(n)));
// console.log(k.filter((n,k)=>funa(k)))

// function funa (s)
// {
//     let tem=[];
//     let ch="hH"
//     for(let i=0;i<s.length;i++)
//     {
//         for(let j=0;j<s[i].length;j++)
//         {
//             if(s[i][j]==ch)
//             {

//                 continue;
//             }
//             else
//             {
//                 tem.push(s[i]);
//             }
//         }
//     }
//     return tem;
// }

// let xp=[1,2,3]
// let pp=(a,b)=>(a+b);

// let xr=xp.reduce(pp)
// console.log(xr)
// console.log(xp.concat(pp));
// let tt=xp[0]
// xp.shift();
// console.log(xp)
// xp.push(tt)
// console.log(xp)

// /////
// let x = 40;
// let y = 3

// let gc = gcd(x, y)
// console.log(gc);

// function gcd(a, b) {
//   a = Math.abs(a);
//   b = Math.abs(b);
//    if (a < b) {
//       let swap = a;
//       a = b;
//       b = swap;
//     }
//   while (b != 0) {
   
//     let r = a % b;
//     a=b;
//     b=r;
//   }
// return a;
// } 

for(let i = 1; i<=10; i++){
    let row="";
    for(let j=1; j<=10; j++){
    row += i*j +"\t";
    }
    console.log(row);
    }