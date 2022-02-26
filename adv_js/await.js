async function hello() {
    return await Promise.resolve("Hello");
};
console.log(hello())
// console.log(hello().then(console.log));