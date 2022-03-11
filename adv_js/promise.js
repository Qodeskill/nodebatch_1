let a;
console.log(a)
let takePromise = new Promise((res, rej) => {
    setTimeout(() => {
        a = "Helllo , our new branch started..."
        res("done...");
    }, 1000)
})
takePromise.then((x) => {
    console.log(a)
    console.log(x)
}) 