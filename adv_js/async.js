// let hello = async () => "Hello";
// console.log(hello())
let hello = async function () { return "Hello" };
// console.log(hello())
// async function hello() { return "Hello" };
// var val = 100
// console.log(hello().then((val) => console.log(val)));
console.log(hello().then(console.log));
// hello().resolve(console.log)
// So the async keyword is added to functions to tell them to return a promise rather than directly returning the value.

// console.log("1")
// console.log("2")
// setTimeout(() => {
//     console.log("3")

// }, 1000)
// console.log("4")