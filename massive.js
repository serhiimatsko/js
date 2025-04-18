//массивы - massive

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
