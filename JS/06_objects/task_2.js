// Задача 3
// Цель задачи
// Попрактиковаться в использовании сложных структур данных (массив объектов) и работе со свойствами.

// Что нужно сделать
// Напишите в файле task_2.js функцию filter(), фильтрующую массив объектов по значению свойства. Массив, название свойства и нужное значение должны передаваться в качестве аргументов.


let objects = [
  {
    name: 'Василий',
    surname: 'Васильев'
  },
  {
    name: 'Иван',
    surname: 'Иванов'
  },
  {
    name: 'Пётр',
    surname: 'Петров'
  }
];

function filterObjValues(objects, key, value) {
  const result = [];
  for (let i = 0; i < objects.length; i++) {
    const obj = objects[i];
    if (obj[key] === value) result.push(obj);
  }
  return result;
}
const filteredArray = filterObjValues(objects, 'name', 'Иван');
console.log(filteredArray);
