/* Dependencies */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Invalid operator';
  }
}

function startCalculator() {
  rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the operator (+, -, *, /): ', (operator) => {
      rl.question('Enter the second number: ', (num2) => {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        const result = calculate(num1, operator, num2);
        console.log(`Result: ${result}`);
        rl.close();
      });
    });
  });
}

startCalculator();
