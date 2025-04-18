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