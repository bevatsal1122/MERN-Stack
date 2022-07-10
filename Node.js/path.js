const path = require('path');

const a0 = path.basename('C:\\temp\\myfile.html');
const a1 = path.dirname('C:\\temp\\jfjf\\fjf\\myfile.html');
let b = `${a1}\\${a0}`;

const a2 = path.basename(__filename);
const a3 = path.dirname(__filename);
const a4 = path.dirname(__dirname);
const a5 = path.extname(__dirname);

console.log(a0);
console.log(a1);
console.log(b, "\n");

console.log(__filename)
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
