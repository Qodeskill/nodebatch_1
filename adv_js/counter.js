
let i = 0, j = 0;
let Fruits = ["strawberry", "grapes", "banana", "apple"];
let numberOfFruits = Fruits.length + 1;
function iterateOverArray() {
    console.log(Fruits[i]);
    i++;
}
function printCounters() {
    console.log(" j ", j++)
}
var printCounter = setInterval(printCounters, 100);
var printFruits = setInterval(iterateOverArray, 1000);

setTimeout(() => {
    clearInterval(printCounter);
    clearInterval(printFruits);
}, numberOfFruits * 1001);
// function iterateOverArray() {

// console.log(" i : ", i++)
//


// iterateOverArray()
// var printFruits = setTimeout(iterateOverArray, 2000);
// console.log(printFruits)
// var setCouter = setInterval(printCounters, 100)

// setTimeout(() => {
//     clearInterval(printCounters);
// }, 1000);
