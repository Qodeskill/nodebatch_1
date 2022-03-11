// function hello() {
//     return Promise.resolve("Hello");
// };
// console.log(hello())
// // console.log(hello().then(console.log));


let flage = true;
let myFnc = () => {
    return new Promise((res, rej) => {
        if (flage) {


            res(() => {
                console.log("promise resolve");
            })

        }
    })
}
myFnc()
    .then(() => {
        console.log(x);
    });