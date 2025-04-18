//строка - string
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