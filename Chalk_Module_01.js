// in clg: npm config set proxy http://192.168.10.252:808 before installing chalk
// npm install chalk

// var ch = require('chalk')  //NU jevi err
import chalk from 'chalk';
console.log(chalk.green("Welcome to LJ"))
console.log(chalk.red.underline("LJKU"))
console.log(chalk.blue.underline.bold("FSD-II"))

const welcome = chalk.yellow;
console.log(welcome("Welcome to LJ"))

console.log(chalk.blue("Hello ") + 'world' + chalk.red('!'))
console.log(chalk.blue("Hello ") + chalk.underline.bgRed('world!'))