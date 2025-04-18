//обьекты - object
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