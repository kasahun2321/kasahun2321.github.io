// selection sort

//let arr=[93,35,1,8,3434,200,1,90,3003]
let arr=[];
for(let i=0;i<100;i++)
{
    arr[i]=Math.floor(Math.random(0,10)*100);
}
let counter=0;let swap=0;
let start=Date.now()
// selection sort 
for (let i=0;i<arr.length;i++)
{
 let temp=0;
  for(let j=i+1;j<arr.length;j++)
  {
    counter=counter+1
    if (arr[i]>=arr[j])
    {
      temp=arr[i]
      arr[i]=arr[j]
      arr[j]=temp;
      
      swap=swap+1;
    }
   
  }
}
let end=Date.now()
console.log(arr)
console.log("no of comparison ",counter)
console.log("no of swap",swap)
console.log(start-end)

{
 //  selection sort    
let start=Date.now()

for (let i=0;i<arr.length;i++)
{
  counter=counter+1;
let j=i;
temp=arr[i];
while(j>0 && temp<arr[j-1] )
{
     swap++
     counter++
      arr[j]=arr[j-1]
      j=j-1;
      arr[j]=temp;
    }
   
  }

let end=Date.now()
console.log("insertion based sorted array",arr)
console.log("insertion sort NO of swap:",swap ,"and No of comparison:", counter)
console.log(start-end)
}