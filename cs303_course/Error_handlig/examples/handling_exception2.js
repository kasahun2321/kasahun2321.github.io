/*eslint-disable*/
const fs = require('fs');
try{
    const data = fs.readFileSync(__dirname+'/test_file1.txt', 'utf-8');
    console.log(data);
}catch(err){
    console.log("Error: "+err.message);
}
console.log("program continues here....");