//функции - functions
function sum(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}
console.log(sum(2, 3)) //6

//стрелочная функция
const sum = (a, b) => a + b
console.log(sum(2, 3)) //5

//callback функция
function greet(name, callback) {
    console.log(`Hello, ${name}`)
    callback()
}
greet('Bob', function() {
    console.log('How are you?')
}) //Hello, Bob, How are you?

//функция высшего порядка
const sum = (a, b) => a + b
const multiply = (a, b) => a * b
const calculate = (a, b, operation) => operation(a, b)  //передача функции как аргумента
console.log(calculate(2, 3, sum)) //5
console.log(calculate(2, 3, multiply)) //6

//-------------------------------------

//замыкания
function createCounter() {
    let count = 0
    return function() {
        count++
        return count
    }
}
const counter = createCounter()
console.log(counter()) //1
console.log(counter()) //2
console.log(counter()) //3
