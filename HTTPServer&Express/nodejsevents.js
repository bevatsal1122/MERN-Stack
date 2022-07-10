const EventEmitter = require('events');

class MyCustomEmitter extends EventEmitter {}

const myEmitter = new MyCustomEmitter();
myEmitter.on("WaterFull", () => {
  console.log("Please turn of the Motor");
  setTimeout(()=>{
    console.log("Hight time to turn off the Motor");
  }, 3000)
});

console.log("The Script is running")
myEmitter.emit("WaterFull");
console.log("The Script is still running")

// myEmitter.emit("WaterFull");
