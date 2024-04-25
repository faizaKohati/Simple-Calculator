#! /usr/bin/env node
import inquirer from "inquirer";
//printing a wallcome message
console.log("\n\twellcome To \ `faeyza-tech\` -new-simple-calculator\n");
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstNumber" },
    { message: "enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operator to perform operator",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplition", "Division",]
    },
]);
console.log(answer);
//condition operator
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplition") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select valid operator");
}
