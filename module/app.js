
var f = function () {
    console.log(" this is f function ");
}
function g() {
    console.log(" this is g function ");
}
function h() {
    console.log(" this is h function ");
}
function i() {
    console.log(" this is i function ");
}
function doSum(a, b) {
    return a + b;
}
const person = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        return this.firstName + ' ' + this.lastName;
    }
}
module.exports = { f, g, doSum, person };
// exports.f = f;
// exports.g = g;
// exports.h = h; 
