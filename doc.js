
//переменые
//let, const, var
//let - изменяемая переменная
//const - неизменяемая переменная
//var - устаревшая переменная, не рекомендуется использовать
//пример использования let и const
let a = 5 //изменяемая переменная
const b = 10 //неизменяемая переменная

//глобальные и локальные переменные
//глобальная переменная - доступна везде
//локальная переменная - доступна только внутри функции или блока
//пример глобальной и локальной переменной
let globalVar = 10 //глобальная переменная
function test() {
    let localVar = 5 //локальная переменная
    console.log(globalVar) //10
    console.log(localVar) //5
}
test()
console.log(globalVar) //10
console.log(localVar) //ошибка, локальная переменная недоступна

//------------------------------------
//операторы
//логические операторы
// && - и
// || - или
// ! - не
//арифметические операторы
// + - * / % ** ++ -- --
//пример арифметических операторов
let a = 5
let b = 10
let c = a + b //сложение
let d = a - b //вычитание
let e = a * b //умножение
let f = a / b //деление
let g = a % b //остаток от деления
let h = a ** b //возведение в степень
let i = a++ //инкремент
let j = a-- //декремент
//пример инкремента и декремента
let x = 5
x++ //x = 6
x-- //x = 5
//пример остатка от деления
let k = 10
let l = 3
let m = k % l //1, остаток от деления 10 на 3
//пример возведения в степень
let n = 2
let o = 3
let p = n ** o //8, 2 в степени 3
//пример сложения строк
let str1 = 'Hello'
let str2 = 'World'
let str3 = str1 + ' ' + str2 //Hello World
//пример сложения чисел и строк
let num1 = 5
let num2 = '10'
let num3 = num1 + num2 //510, число 5 и строка '10' складываются как строки
//пример сложения чисел и булевских значений
let bool1 = true
let bool2 = false
let bool3 = 5 + bool1 //6, true преобразуется в 1
let bool4 = 5 + bool2 //5, false преобразуется в 0
//пример сложения строк и булевских значений
let str4 = 'Hello'
let str5 = 'World'
let str6 = str4 + bool1 //Hello1, true преобразуется в 1
let str7 = str4 + bool2 //Hello0, false преобразуется в 0
//пример сложения строк и чисел
let str8 = 'Hello'
let str9 = 'World'
let str10 = str8 + 5 //Hello5, число 5 преобразуется в строку
let str11 = str8 + 10 //Hello10, число 10 преобразуется в строку
//пример сложения строк и объектов

//-----------------------------------
//обьекты
//обьект - это коллекция свойств и методов
//пример обьекта
const person = {
    name: 'Bob',
    age: 21,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`)
    }
}
//доступ к свойствам обьекта
console.log(person.name) //Bob
console.log(person['age']) //21

//мутация обьекта
const person = {
    name: 'Bob',
    age: 21
}

person.age = 22
person.isAdult = true

console.log(person.age) //22
console.log(person.isAdult) //true

//добавление нового свойства
person.city = 'New York'
console.log(person.city) //New York

//удаление свойства
delete person.age
console.log(person.age) //undefined

//проверка наличия свойства
console.log('age' in person) //false
console.log('name' in person) //true

//перебор свойств обьекта
for (let key in person) {
    console.log(`${key}: ${person[key]}`)
} //name: Bob, age: 22, isAdult: true, city: New York

//Object.keys возвращает массив ключей обьекта
console.log(Object.keys(person)) //['name', 'age', 'isAdult', 'city']

//Object.values возвращает массив значений обьекта
console.log(Object.values(person)) //['Bob', 22, true, 'New York']

//Object.entries возвращает массив пар ключ-значение
console.log(Object.entries(person)) //[['name', 'Bob'], ['age', 22], ['isAdult', true], ['city', 'New York']]

//Object.assign копирует значения всех перечисляемых свойств из одного или нескольких источников в целевой обьект
const target = { a: 1, b: 2 }
const source = { b: 3, c: 4 }
const returnedTarget = Object.assign(target, source)
console.log(returnedTarget) //{ a: 1, b: 3, c: 4 }

//Object.freeze замораживает обьект, предотвращая его изменение
const person = {
    name: 'Bob',
    age: 21
}
Object.freeze(person)
person.age = 22 //не изменится
console.log(person.age) //21

//------------------------------------
//избежание мутации обьекта

//вариант 1
        const person = {
            name: 'Bob',
            age: 21
        }
        const person2 = Object.assign({}, person)
        person2.age = 26
        console.log(person2.age) //26
        console.log(person.age) //21

//вариант 2
        const person = {
            name: 'Bob',
            age: 21
        }

        const person2 = { ...person } //spread оператор
        person2.name = 'Alice'

        console.log(person2.name) //Alice
        console.log(person.name) //Bob

//вариант 3
        const person = {
            name: 'Bob',
            age: 21
        }
        const person2 = JSON.parse(JSON.stringify(person)) //deep copy
        //JSON.stringify(person) преобразование в строку
        //JSON.parse(JSON.stringify(person)) преобразование в обьект

person2.name = 'Alice'  //изменение
console.log(person2.name) //Alice
console.log(person.name) //Bob

//-------------------------------------

//массивы

const numbers = [1, 2, 3, 4, 5] //массив
//методы массивов   
//push добавляет элемент в конец массива
numbers.push(6) //добавление

//pop удаляет последний элемент массива
numbers.pop() //удаление

//shift удаляет первый элемент массива
numbers.shift() //удаление

//unshift добавляет элемент в начало массива
numbers.unshift(0) //добавление

//splice удаляет элементы массива и добавляет новые
numbers.splice(2, 1, 10) //удаляет 1 элемент с индекса 2 и добавляет 10

//slice создает новый массив из существующего
const newNumbers = numbers.slice(1, 3) //создает новый массив из 1 по 3 индекс

//map создает новый массив, применяя функцию к каждому элементу
const doubledNumbers = numbers.map(num => num * 2) //умножает каждый элемент на 2

//filter создает новый массив, содержащий элементы, прошедшие проверку
const evenNumbers = numbers.filter(num => num % 2 === 0) //оставляет только четные числа

//reduce применяет функцию к каждому элементу массива и возвращает одно значение
const sum = numbers.reduce((acc, num) => acc + num, 0) //суммирует все элементы массива

//find находит первый элемент, удовлетворяющий условию
const foundNumber = numbers.find(num => num > 3) //находит первое число больше 3

//includes проверяет, содержит ли массив определенное значение
const hasNumber = numbers.includes(3) //проверяет, есть ли число 3 в массиве

//indexOf возвращает индекс первого вхождения элемента в массив
const index = numbers.indexOf(3) //возвращает индекс числа 3 в массиве

//lastIndexOf возвращает индекс последнего вхождения элемента в массив
const lastIndex = numbers.lastIndexOf(3) //возвращает индекс последнего числа 3 в массиве

//forEach выполняет функцию для каждого элемента массива
numbers.forEach(num => console.log(num)) //выводит каждый элемент массива

//every проверяет, удовлетворяют ли все элементы массива условию
const allEven = numbers.every(num => num % 2 === 0) //проверяет, все ли числа четные

//some проверяет, удовлетворяет ли хотя бы один элемент массива условию
const anyEven = numbers.some(num => num % 2 === 0) //проверяет, есть ли хотя бы одно четное число

//sort сортирует массив
const sortedNumbers = numbers.sort((a, b) => a - b) //сортирует массив по возрастанию

//reverse разворачивает массив
const reversedNumbers = numbers.reverse() //разворачивает массив

//concat объединяет два массива
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combinedArray = array1.concat(array2) //объединяет два массива

//join объединяет элементы массива в строку
const joinedString = numbers.join(', ') //объединяет элементы массива в строку через запятую

//split разбивает строку на массив
const str = '1,2,3,4,5'
const splitArray = str.split(',') //разбивает строку на массив по запятой

//toString преобразует массив в строку
const str = numbers.toString() //преобразует массив в строку

//toLocaleString преобразует массив в строку с учетом локали
const str = numbers.toLocaleString() //преобразует массив в строку с учетом локали

//at возвращает элемент массива по индексу
const firstElement = numbers.at(0) //возвращает первый элемент массива
const lastElement = numbers.at(-1) //возвращает последний элемент массива

//flat объединяет вложенные массивы в один
const nestedArray = [1, [2, 3], [4, 5]]
const flatArray = nestedArray.flat() //объединяет вложенные массивы в один
//flatMap применяет функцию к каждому элементу массива и объединяет вложенные массивы в один
const nestedArray = [1, [2, 3], [4, 5]]
const flatMappedArray = nestedArray.flatMap(num => num * 2) //умножает каждый элемент на 2 и объединяет вложенные массивы в один

//--------------------------------------

//строка
const str = 'Hello, World!'
//методы строк
//length возвращает длину строки
console.log(str.length) //13

//charAt возвращает символ по индексу
console.log(str.charAt(1)) //e

//indexOf возвращает индекс первого вхождения символа
console.log(str.indexOf('o')) //4

//lastIndexOf возвращает индекс последнего вхождения символа
console.log(str.lastIndexOf('o')) //8

//slice возвращает подстроку
console.log(str.slice(0, 5)) //Hello

//substring возвращает подстроку
console.log(str.substring(0, 5)) //Hello

//substr возвращает подстроку
console.log(str.substr(0, 5)) //Hello

//toUpperCase преобразует строку в верхний регистр
console.log(str.toUpperCase()) //HELLO, WORLD!

//toLowerCase преобразует строку в нижний регистр
console.log(str.toLowerCase()) //hello, world!

//trim удаляет пробелы в начале и конце строки
console.log(str.trim()) //Hello, World!

//split разбивает строку на массив
console.log(str.split(', ')) //['Hello', 'World!']

//join объединяет массив в строку
console.log(['Hello', 'World!'].join(', ')) //Hello, World!

//replace заменяет подстроку
console.log(str.replace('World', 'JavaScript')) //Hello, JavaScript!

//includes проверяет, содержит ли строка подстроку
console.log(str.includes('World')) //true

//startsWith проверяет, начинается ли строка с подстроки
console.log(str.startsWith('Hello')) //true
//----------------------------------

//функции
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

//---------------------------------------

//promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success')
    }, 1000)
})
promise.then(result => {
    console.log(result) //Success
}).catch(error => {
    console.error(error)
})

//---------------------------------------



