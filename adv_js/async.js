let hello = async () => "Hello";
// console.log(hello())
// let hello = async function () { return "Hello" };
// async function hello() { return "Hello" };
// var val = 100
// console.log(hello().then((val) => console.log(val)));
// console.log(hello().then(console.log));
hello().resolve("hello")
// So the async keyword is added to functions to tell them to return a promise rather than directly returning the value.
