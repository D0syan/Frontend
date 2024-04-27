// Задача 1
// Цель задачи
// Научиться генерировать произвольные массивы и адаптировать существующий код под ситуацию.

// Что нужно сделать
// Напишите генератор массивов длиной count со случайными числами от n до m. Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
// Выведите результат с помощью console.log.
// Проверка результата
// Для проверки подставляйте различные значения count, m, n и смотрите на корректность результата. Примеры значений для проверки:

// n = 0, m = 100, count = 100; вывод результата в консоль: [2, 51, 47, … , 95 ];
// n = 2, m = 5, count = 50; вывод результата в консоль: [2, 5, 3, … , 2 ];
// n = 100, m = −5, count = 70; вывод результата в консоль: [−2, 35, 94, … , −4 ];
// n = −3, m = −10, count = 42; вывод результата в консоль: [−4, −3, −9, … , −7 ].

// let count = 100;
// let n = -50;
// let m = 55;
// let max = Math.max(n, m);
// let min = Math.min(n, m);
// let maxmin = (max - min)
// a = [];
// for (let i = 0; i < count; i++) {
//   a.push(Math.floor(Math.random() * (maxmin + 1) + min));
// }

// console.log(a)

// Задача 2
// Цель задачи
// Научиться перемешивать массив чисел.

// Что нужно сделать
// Создайте с помощью цикла for массив упорядоченных чисел с количеством чисел, равным count. Например:
// count = 5; соответствует массив [1,2,3,4,5];
// count = 7; соответствует массив [1,2,3,4,5,6,7];
// count = 3; соответствует массив [1,2,3].
// С помощью второго цикла перемешайте этот массив.
// Выведите получившийся результат на экран с помощью console.log.
// Проверка результата
// Для любых значений count вы должны получать новый массив с заданной длиной. Например:

// count = 5; пример результата вывода в консоль: [2,5,1,3,4];
// count = 7; пример результата вывода в консоль: [5,1,3,2,7,6,4];
// count = 3; пример результата вывода в консоль: [2,1,3].

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let x = 0;
// count = 1;
// for (let i = 0; i < count; i++) {
//   x = numbers[i]
// }
// console.log(x)


// const shuffle = (coll) => {
//   return Array(coll.length).fill(null)
//     .map((_, i) => [Math.random(), i])
//     .sort(([a], [b]) => a - b)
//     .map(([, i]) => coll[i])
// };
// console.log(shuffle(numbers));


// Задача 3
// Цель задачи
// Научиться искать индекс (порядковый номер) нужного элемента в массиве.

// Что нужно сделать
// С помощью цикла найдите индекс (порядковый номер) элемента массива из предыдущего задания с числом n. Если такой элемент не будет найден, то выведите соответствующее сообщение на экран.

// Проверка результата
// Для любых значений массива из второго задания и числа n вы должны получать индекс элемента в массиве или сообщение о том, что такого элемента нет.

// Например:

// array = [2,5,1,3,4], n = 3; индекс элемента = 3;
// array = [5,1,3,2,7,6,4], n = 1; индекс элемента = 1;
// array = [2,1,3], n = 7; элемент не найден.
arr = [2, 1, 5, 3, 4];
n = 5;
let v = arr.findIndex(el => el === n);
console.log(v !== -1 ? `Индекс элемента ${v}` : `Элемент не найден`); 

// Задача 4
// Цель задания
// Научиться обрабатывать массивы одним циклом.

// Что нужно сделать
// Даны два массива:
// let arr1 = [2, 2, 17, 21, 45, 12, 54, 31, 53]
// let arr2 = [12, 44, 23, 5]
// let arr = [...arr1, ...arr2];
// console.log(arr)
// // Напишите программу, которая будет объединять два массива: arr1 и arr2. Результат объединения нужно вывести в консоль с помощью команды console.log в таком виде:

// [2, 2, 17, 21, 45, 12, 54, 31, 53, 12, 44, 23, 5]


