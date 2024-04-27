// Задача 3
// Цель задачи
// Получить практику работы с DOM-элементами и массивами объектов.

// Что нужно сделать
// В файле task_3.html создайте базовый HTML-код и подключите к нему JavaScript-файл task_3.js. Создайте массив объектов студентов. Создайте функцию с названием createStudentsList() в файле task_3.js, принимающую один параметр listArr. Функция должна создавать список ul с карточками студентов, основанный на переданном в функцию массиве студентов. Для решения задачи лучше всего использовать цикл внутри функции createStudentsList(). При желании можно украсить элементы CSS-стилизацией.

// Пример массива студентов:

// let allStudents=[
//  {name: 'Валя', age: 11},
//  {name: 'Таня',age: 24},
//  {name: 'Рома',age: 21},
//  {name: 'Надя', age: 34},
//  {name: 'Антон', age: 7}
// ]
// Пример вызова функции:

// createStudentsList(allStudents) // Функция должна создать HTML-структуру.
// Пример результата в элементе body:

// <ul>
//         <li>
//             <h2>Валя</h2>
//             <span>Возраст: 11 лет</span>
//         </li>
//         <li>
//             <h2>Таня</h2>
//             <span>Возраст: 24 лет</span>
//         </li>
//         <li>
//             <h2>Рома</h2>
//             <span>Возраст: 21 лет</span>
//         </li>
//         <li>
//             <h2>Надя</h2>
//             <span>Возраст: 34 лет</span>
//         </li>
//         <li>
//             <h2>Антон</h2>
//             <span>Возраст: 7 лет</span>
//         </li>
// </ul>

function createStudentsList(listArr) {
  const ul = document.createElement("ul");
  document.body.append(ul);
  if (Array.isArray(listArr)) {
      listArr.forEach(x => {
          const li = document.createElement("li");
          ul.appendChild(li)
          const header = document.createElement("h2");
          header.innerText = x.name;
          const span = document.createElement("span");
          span.innerText = `Возраст ${x.age} лет`;
          li.appendChild(header);
          li.appendChild(span);
      });
  }
}
let allStudents = [
  { name: 'Валя', age: 11 },
  { name: 'Таня', age: 24 },
  { name: 'Рома', age: 21 },
  { name: 'Надя', age: 34 },
  { name: 'Антон', age: 7 }
]

createStudentsList(allStudents);
