// Задача 2
// Цель задачи
// Доработать задачу 1 и получить дополнительную практику в работе с объектами.

// Что нужно сделать
// Скопируйте код из файлов task_1.html и task_1.js в файлы task_2.html и файл task_2.js соответственно. Доработайте функцию createStudentCard() так, чтобы она принимала не два параметра с информацией о студенте, а один — student, который является объектом с информацией о студенте. Функция делает то же самое, что и в первой задаче, — создаёт карточку студента.

// Пример вызова функции:

// let studentObj={
//  name: 'Игорь',
//  age: 17
// }
// createStudentCard(studentObj) // Функция должна создать HTML-структуру.
// Пример результата в элементе body:

// <div>
//         <h2>Игорь</h2>
//         <span>Возраст: 17 лет</span>
// </div>
let body = document.body;
(function() {
function createStudentCard(student) {
  let div = document.createElement('div');
  let h2 = document.createElement('h2')
  let span = document.createElement('span');
  h2.textContent = student.name
  span.textContent = `Возраст ${student.age} лет`

  document.body.append(div)
  div.append(h2);
  div.append(span);
}

let studentObj={
  name: 'Игорь',
  age: 17
 }

createStudentCard(studentObj)
})()
