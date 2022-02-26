
// let myGreeting = setTimeout(function sayHi() {
//     console.log('Hello, Mr. Universe!');
// }, 2000);


// function sayHi() {
//      console.log('Hello Mr. Universe!');
// }

// let myGreeting = setTimeout(sayHi, 2000);


// function sayHi(who) {
//     console.log(`Hello ${who}!`);
// }

// let myGreeting = setTimeout(sayHi, 2000, 'rajesh');


function displayTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    console.log('demo').textContent = time;
}
const createClock = setInterval(displayTime, 1000);