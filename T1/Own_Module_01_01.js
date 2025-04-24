// var d1 = require('./Own_Module_01.js')
// // console.log(d.add(5, 3))  // direct use karvanu
// console.log(d1(5, 3))

// var d2 = require('./Own_Module_01')
// console.log(d2.a(10, 15))
// console.log(d2.m(3, 4))

// var { a, m } = require('./Own_Module_01')
// console.log(a(10, 15))
// console.log(m(3, 4))

var { add3, mul3, name3 } = require('./Own_Module_01')
console.log(add3(10, 15))
console.log(mul3(3, 4))
console.log(name3)