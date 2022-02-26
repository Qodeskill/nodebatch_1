let hello = async () => "Hello";
console.log(hello())
// let hello = async function () { return "Hello" };
// async function hello() { return "Hello" };
// console.log(hello().then((val) => console.log(val)));
// console.log(hello().then(console.log));

// So the async keyword is added to functions to tell them to return a promise rather than directly returning the value.