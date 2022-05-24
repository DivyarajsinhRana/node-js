const chalk = require("chalk");
const validator = require('validator')
console.log(chalk.blue.underline.inverse("Hello world!"));
const res = validator.isEmail("dc@gmail.com");
console.log(res ? chalk.green(res) : chalk.red(res))
