// (function(exports, require, module, __filename, __dirname)
// {

let obj = {
    name: "Vatsal",
    favNum: 0,
    developer: true
}
let plate = {
    name: "Shraddha",
    favNum: 1,
    developer: false
}
console.log(exports, require, module, __filename, __dirname);
// module.exports = [obj, plate];
module.exports =  {obj, plate};

// })

// node.js automatically wraps Whole Code into Funtion (Line 1)
