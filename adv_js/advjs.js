//synchronous vs asynchronous

// console.log("1")
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

function firstFunc() {
    console.log("call first...");
}
function secondFunc(firFun) {
    firFun()
    console.log("call second...");
}
secondFunc(firstFunc)



