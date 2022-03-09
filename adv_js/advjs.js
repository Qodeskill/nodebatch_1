// synchronous vs asynchronous
// / console.log("1")
// console.log("2")
// setTimeout(() => {
//     console.log("3")
// }, 1999)
// setTimeout(() => {
//     console.log("4")
// }, 2000)
// console.log("5")

// console.log("I");

// setTimeout(() => {
//     console.log("eat");
// }, 2000)

// console.log("Ice Cream")

// function firstFunc() {
//     console.log("call first...");
// }


// function secondFunc(firFun) {
//     console.log(firFun)
//     firFun()
//     console.log("call second...");
// }
// // firstFunc()
// // secondFunc(firstFunc)
// secondFunc(() => {
//     console.log("call first...");
// })


// let i = 0;
// let Fruits = ["strawberry", "grapes", "banana", "apple"];

// function iterateOverArray() {
//     console.log(Fruits[i]);
//     i++;
// }
// iterateOverArray()

let i = 0;
let Fruits = ["strawberry", "grapes", "banana", "apple"];
let numberOfFruits = Fruits.length + 1;
function iterateOverArray() {
    console.log(Fruits[i]);
    i++;
}
// var printFruits = setTimeout(iterateOverArray, 1000);
var printFruits = setInterval(iterateOverArray, 1000);
// console.log("setTimeout")
setTimeout(() => {
    clearInterval(printFruits);
}, numberOfFruits * 1000);
