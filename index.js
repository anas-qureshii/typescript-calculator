import inquirer from "inquirer";
const user = await inquirer.prompt([{
        type: 'input',
        name: 'username',
        message: 'Enter the name'
    }]);
console.log("Welcome " + user.username);
console.log("hope u are well");
console.log("as we are performing simple calculations task please give two number and select your operations");
const calculator = await inquirer.prompt([
    {
        type: 'number',
        name: 'num1',
        message: 'Enter first number ' + user.username
    },
    {
        type: 'number',
        name: 'num2',
        message: 'Enter second number ' + user.username
    },
    {
        type: 'list',
        name: 'operations',
        message: user.username + 'select prefered operations',
        choices: ['addition', 'subtraction', 'multiplication', 'division']
    }
]);
let num1 = calculator.num1;
let num2 = calculator.num2;
if (calculator.operations === 'addition') {
    console.log(num1 + num2);
}
else if (calculator.operations === 'subtraction') {
    console.log(num1 - num2);
}
else if (calculator.operations === 'multiplication') {
    console.log(num1 * num2);
}
else if (calculator.operations === 'division') {
    if (num2 > 0) {
        console.log(num1 / num2);
    }
    else {
        console.log("num2 (" + num2 + ") should be greater than 0 for performing divison operation");
    }
}
