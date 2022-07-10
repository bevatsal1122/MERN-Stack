const fs = require('fs');

// fs.readFile("./file.txt", "utf-8", (err, data)=>{
//     console.log(data, err);
// })

// setTimeout(()=> {
// console.log("Finished Reading File");
// }, 4000);

// const a = fs.readFileSync("./file.txt");
// console.log(a)
// console.log(a.toString())
// console.log("Finished Reading File");

// fs.writeFile("./file0.txt", "This is file0", ()=>{
//     console.log("Written to file");
// })

// setTimeout(()=> {
// console.log("Finished Reading File");
// }, 4000);

const b = fs.writeFileSync("./file1.txt", "This is file1");
console.log(b)
console.log("Data Written");