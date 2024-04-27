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

const btn = document.querySelector('.button')
btn.addEventListener('click', () => {
  createStudentsList(allStudents);
});


