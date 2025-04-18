const calculate = (a, b, operation) => {
  if (typeof a !== 'number' || typeof b !== 'number') return 'Invalid input';
  if (operation === 'add') return a + b;
  if (operation === 'multiply') return a * b;
  if (operation === 'divide') return b === 0 ? 'Division by zero is not allowed' : a / b;
  if (operation === 'subtract') return a - b;
  return 'Invalid operation';
};

const a = 10;
const b = 5;
const operations = ['divide', 'add', 'multiply', 'subtract', 'invalidOperation'];

operations.forEach((operation) => {
  const result = calculate(a, b, operation);
  console.log(`The result of ${operation}ing ${a} and ${b} is: ${result}`);
});