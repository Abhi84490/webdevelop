// synchronous or blocking:
// line by line execution

 
// asynchoronus or non-blocking:
// line by line execution not guaranteed 
// call backs will fire







const fs= require("fs");
fs.readFile("dele.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log("this is a message")