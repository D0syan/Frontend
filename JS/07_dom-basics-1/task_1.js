// Задача 1
// Цель задачи
// Получить практику работы с DOM-элементами.

// Что нужно сделать
// В файле task_1.html создайте базовый HTML-код и подключите к нему JavaScript-файл task_1.js. Создайте функцию с названием createStudentCard() в файле task_1.js, принимающую два параметра: name и age. Функция должна создавать карточку студента внутри элемента body HTML-страницы. Карточка студента представляет собой DOM-элемент, а именно тег div, внутри которого находится заголовок h2 с именем студента из параметра name и span под заголовком с возрастом студента (age). При желании можно украсить элементы CSS-стилизацией.

// Пример вызова функции:

// createStudentCard(‘Игорь’, 17) // Функция должна создать HTML-структуру.

// Пример результата в элементе body:

// <div>
// <h2>Игорь</h2>
// <span>Возраст: 17 лет</span>
// </div>

let body = document.body;
function createStudentCard(name, age) {
  let div = document.createElement('div');
  body.append(div);
  let h2 = document.createElement('h2');
  h2.textContent = name;
  div.append(h2);
  let span = document.createElement('span');
  span.textContent = `${age} лет`;
  div.append(span);
}
createStudentCard('Никита', 21)

