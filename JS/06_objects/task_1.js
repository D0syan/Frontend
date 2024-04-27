// Задача 1
// Цель задачи
// Научиться работать с объектами и закрепить тему функций.

// Что нужно сделать
// Создайте в файле task_1.js функцию с названием getOlderUser(), которая будет определять, кто из двух пользователей старше. Аргументами функции являются два пользователя в виде двух объектов. Функция должна вернуть с помощью команды return имя старшего пользователя.

// Созданную функцию нужно вызвать, передав ей два объекта: user1 и user2. Результат, который вернёт функция, необходимо вывести в консоль.

// Пример вызова функции

// let user1={
//  name: 'Игорь',
//  age: 17
// }
// let user2={
//  name: 'Оля',
//  age: 21
// }
// // Вызов созданной функции
// let result = getOlderUser(user1, user2)
// Функция должна вернуть имя, и оно должно быть выведено в консоль в виде строки: 'Оля'

let allUsers = [
    {
        name: 'Игорь',
        age: 17
    },
    {
        name: 'Оля',
        age: 21
    },
    {
        name: 'Максим',
        age: 25
    }
]

function getOlderUserArray(usersArray){
    let arr = [];
    for(let i of usersArray){
      arr.push(i.age);
    }
    let obj = usersArray.filter( item => item.age >= Math.max(...arr))[0].name

    return (`Старший пользователь ${obj}`);
  }

  console.log(getOlderUserArray(allUsers))

// Задача 2* (необязательное задание)
// Для получения большей практики вы можете попробовать определить старшего пользователя из массива пользователей.

// Напишите в файле task_1.js функцию getOlderUserArray(), в которую будете передавать массив объектов с пользователями. Функция должна вернуть имя старшего пользователя.

// Пример массива объектов пользователя:

let allUsers=[
  {name: 'Валя', age: 11},
  { name: 'Таня',age: 24},
  {name: 'Рома',age: 21},
  {name: 'Надя', age: 34},
  {name: 'Антон', age: 7}
 ]
 function getOlderUserArray(usersArray){
     let arr = [];
     for(let i of usersArray){
       arr.push(i.age);
     }
     let obj = usersArray.filter( item => item.age >= Math.max(...arr))[0].name

     return (`Старший пользователь ${obj}`);
   }

   console.log(getOlderUserArray(allUsers))
