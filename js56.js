// // console.log("hello world");

// // node js built in module
// const fs= require('fs');
// const text = fs.readFileSync("dele.txt", "utf-8");
// text= text.replace("browser", "Rohan");
// console.log("The content of the file is ")
// console.log(text);


// console.log("creating a new file")
// fs.writeFileSync("rohan.txt",text);


const fs= require("fs");
let text = fs.readFileSync("dele.txt","utf-8");
text=text.replace("browser","Rohan");

console.log("The content of the file is ")
console.log(text);

console.log("Creating a new file")
fs.writeFileSync("rohan.txt",text);
