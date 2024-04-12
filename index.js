#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "operator",
        message: "Select one of the operator to perform the operation:",
        choices: ["Addition", "subtraction", "multiplication", "division", "exponentiation", "modulus"]
    },
    {
        type: "number",
        name: "firstnumber",
        message: "Enter first number:"
    },
    {
        type: "number",
        name: "secondnumber",
        message: "Enter second number:"
    },
]);
let val1 = answer.firstnumber;
let val2 = answer.secondnumber;
if (answer.operator === "Addition") {
    console.log(chalk.underline.blue("The sum is :"), chalk.bold.yellow(val1 + val2));
}
else if (answer.operator === "subtraction") {
    console.log(chalk.underline.blue("The difference is :"), chalk.bold.yellow(val1 - val2));
}
else if (answer.operator === "multiplication") {
    console.log(chalk.underline.blue("The product is :"), chalk.bold.yellow(val1 * val2));
}
else if (answer.operator === "division") {
    console.log(chalk.underline.blue("The quotient is :"), chalk.bold.yellow(val1 / val2));
}
else if (answer.operator === "exponentiation") {
    console.log(chalk.underline.blue("The exponentiation is :"), chalk.bold.yellow(val1 ** val2));
}
else if (answer.operator === "modulus") {
    console.log(chalk.underline.blue("The remainder is :"), chalk.bold.yellow(val1 % val2));
}
else {
    console.log(chalk.underline.blue("Please select valid operator."));
}
;
