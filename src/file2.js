// function f1(){
//     console.log("Karim");
// };

(
    function f1(){
    console.log("Rahim")
}
)();

(
    function f1(){
    console.log("karim")
}
)();

// f1()


const {a:x} = require("./file1");
const {a:y}= require("./file3");

const {f1:add,f2:sub} = require("./utility")


console.log("Addition :", add(x,y));
console.log("sub :", sub(x,y));

console.log(x,y);