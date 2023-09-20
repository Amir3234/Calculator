import inquirer from 'inquirer';
async function getCalculatorInput() {
    const input = await inquirer.prompt([
        {
            type: 'number',
            name: 'number1',
            message: 'Enter the first number:',
        },
        {
            type: 'number',
            name: 'number2',
            message: 'Enter the second number:',
        },
        {
            type: 'list',
            name: 'operator',
            message: 'Select an operator:',
            choices: ['+', '-', '*', '/', '%', '^'],
        },
    ]);
    return input;
}
function calculate(input) {
    switch (input.operator) {
        case '+':
            return input.number1 + input.number2;
        case '-':
            return input.number1 - input.number2;
        case '*':
            return input.number1 * input.number2;
        case '/':
            return input.number1 / input.number2;
        case '%':
            return input.number1 % input.number2;
        case '^':
            return input.number1 ** input.number2;
        default:
            throw new Error('Invalid operator');
    }
}
async function startCalculator() {
    const input = await getCalculatorInput();
    const result = calculate(input);
    console.log(`The result is ${result}`);
}
startCalculator();
