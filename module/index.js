const m = require('./app')
// console.log(typeof (m));
console.log(m);
// m.f();
// m.g();
// m.h();
// f();
// g();
// console.log(m.doSum(10, 20));
p = new m.person('pankaj', 'mishra');
console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullName());