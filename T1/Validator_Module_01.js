// npm i validator

import v from 'validator';
console.log(v.isEmail('abc@gmail.com'))
console.log(v.isHexadecimal('ABC'))
console.log(v.isLowercase('hello'))
var name = ''
console.log(v.isEmpty(name))