// Основы программирования на JavaScript I
// Практическое задание 1.1
console.log('Привет, мир!');

// Практическое задание 2.1
let year_of_foundation = 1841;

// Практическое задание 3.1
let word_1 = 'велосипед';
let word_2 = 'полезен';

console.log(`${word_1} ${word_2}`);

// Практическое задание 3.2
let name = 'Всеволод';
let last_name = '\nСтарозубов';

console.log(name.trim().length + last_name.trim().length);

// Практическое задание 3.3
let word = 'велосипед';
console.log(word[0].toUpperCase());

// Практическое задание 3.4
let value = 5.4;

let a = Math.ceil(value);
let b = Math.floor(value);
let c = Math.round(value);
let d = Math.sqrt(a + b + c);
console.log(Math.trunc(d));

// Практическое задание 3.5
let a = 2;
let b = 4;

console.log(Math.pow(a * b, 2));

// Практическое задание 3.6
let a = 3;
let b = 4;

let result = Math.sqrt(a * a + b * b);
console.log(Math.round(result * 100) / 100);

// Практическое задание 3.7
let obj = { name: 'Анатолий', last_name: 'Максимов', age: 32 };

console.log(
  `Имя: "${obj.name}" Фамилия: '${obj.last_name}' Возраст: ${obj.age}`
);

// Практическое задание 3.8
let name = 'Анатолий';
let last_name = 'Максимов';
let age = 32;

console.log({ name, last_name, age });

// Практическое задание 3.9
let value = 'привет';

if (typeof value !== null && typeof value === 'object') {
  console.log('null');
} else {
  console.log(typeof value);
}

// Практическое задание 3.10
let num_1 = '3';
let num_2 = '5';

console.log(Number(num_1) + Number(num_2));

// Практическое задание 3.11
let size = '500.5%';

console.log(parseFloat(size));

// Практическое задание 3.12
let a = '5px';
let b = '7px';
let c = '10px';

console.log(parseFloat(a) * parseFloat(b) * parseFloat(c));

// Практическое задание 4.1
let speed = 60;

if (speed <= 30) {
  console.log('Вы едете слишком медленно');
} else if (speed > 31 && speed <= 70) {
  console.log('Вы едете с нормальной скоростью');
} else if (speed > 71) {
  console.log('Вы едете слишком быстро, сбавьте скорость');
}

// Практическое задание 4.2
let price = '12 рублей';

price = parseInt(price);
if (isNaN(price)) {
  console.log('Не число');
} else if (price <= 0) {
  console.log('Число не корректное');
} else {
  console.log(price);
}

// Практическое задание 4.3
let a = 32;
let b = 5;
let c = 14;

if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else if (c > a && c > b) {
  console.log(c);
}

// Практическое задание 4.4
let temp = 25;
let weather = 'clear';
let activity = '';

if (temp >= 25 && weather === 'clear') {
  activity = 'golf';
} else if (temp <= 24 && temp >= 10 && weather === 'clear') {
  activity = 'bowling';
} else {
  activity = 'hiking';
}

// Практическое задание 4.5
let word_1 = 'машина';
let word_2 = 'стол';

console.log(word_1.length > word_2.length ? word_1 : word_2);

// Практическое задание 4.6
let task = 'переименовать';

switch (task) {
  case 'удалить':
    console.log('delete');
    break;
  case 'переименовать':
    console.log('rename');
    break;
  case 'редактировать':
    console.log('edit');
    break;
  default:
    console.log('default');
    break;
}

// Практическое задание 4.7
let price = 10000;
let range = 'day';

switch (range) {
  case 'month':
    console.log(`${price} Р в месяц`);
    break;
  case 'day':
    console.log(`${price} Р в день`);
    break;
  case 'week':
    console.log(`${price} Р в неделю`);
    break;
  default:
    console.log('default');
    break;
}

// Практическое задание 4.8
let a = 2;
let b = 6;
let sign = '*';

switch (sign) {
  case '+':
    console.log(a + b);
    break;
  case '-':
    console.log(a - b);
    break;
  case '*':
    console.log(a * b);
    break;
  case '/':
    console.log(a / b);
    break;
  default:
    console.log('default');
    break;
}

// Практическое задание 4.9
let a = 2;
let b = 6;
let sign = '*';

switch (sign) {
  case '+':
    console.log(a + b);
    break;
  case '-':
    console.log(a - b);
    break;
  case '*':
    console.log(a * b);
    break;
  case '/':
    if (a === 0 || b === 0) {
      console.log('Делить на 0 нельзя!');
      break;
    }
    console.log(a / b);
    break;
  default:
    console.log('default');
    break;
}

// Практическое задание 5.1
let start = 0;
let end = 50;

let result = 0;
for (let i = start; i <= end; i++) {
  if (i % 5 === 0) {
    result = result + i;
  }
}
console.log(result);

// Практическое задание 5.2
let word = 'мир';

let result = '';
for (let i = word.length - 1; i >= 0; i--) {
  result = result + word[i];
}
console.log(result);

// Практическое задание 5.3
let word = 'Доход';

let result = '';
for (let i = word.length - 1; i >= 0; i--) {
  result = result + word[i];
}
if (result.toLowerCase() === word.toLowerCase()) {
  console.log('Слово является палиндромом!');
} else {
  console.log('Слово не является палиндромом!');
}

// Практическое задание 6.1
let price = 80000;

function priceMessage(price) {
  console.log(`Данный товар стоит ${price} рублей`);
}
priceMessage(price);

// Практическое задание 6.2
let num_1 = 3;
let num_2 = 6;

function mult(a, b) {
  return a * b;
}
console.log(mult(num_1, num_2));

// Практическое задание 6.3
let num = 9;

function square() {
  return Math.pow(num, 2);
}
console.log(square());

// Практическое задание 6.4
let num = 2;

let result = '';
for (let i = 0; i < 3; i++) {
  num = Math.pow(num, 2);
  result = result + ' ' + num;
  console.log(result.trim());
}

// Практическое задание 6.5
let data = 'привет';

function getNumber(arg) {
  let result = parseFloat(arg);
  if (isNaN(result)) {
    return 0;
  }
  return result;
}
console.log(getNumber(data));

// Практическое задание 6.6
let value = 4;
let total = 80;

function getPercent(v, t) {
  let result = (100 * v) / t;
  return result;
}
console.log(getPercent(value, total));

// Практическое задание 9.1
let list = ['Груша', 'Яблоко'];

list.unshift('Яблоко');
list.pop();
list.push('Клубника');
console.log(list);

// Практическое задание 9.2
let list = ['Груша', 'Яблоко'];

let result = '';
for (let value of list) {
  if (value.length > result.length) {
    result = value;
  }
}
console.log(result);

// Практическое задание 9.3
let list = [23, 13, 3];

let result = 0;
for (let v of list) {
  result = result + v;
}
console.log(result);

// Практическое задание 9.4
let list_1 = [12, 3];
let list_2 = [2, 1];

let full = [...list_1, ...list_2];
let result = [];
for (let v of full) {
  result.push(v ** 2);
}
console.log(result);

// Практическое задание 9.5
let list = [12, -4, 5, 32, 2];

let result = 0;
for (let v of list) {
  if (v > 0) {
    result = result + v;
  }
}
console.log(result);

// Практическое задание 9.6
let list = [1, 2, 3, 99, 100];

function isPrimeNum(num) {
  if (num >= 2) {
    for (var i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
}

let result = 0;
for (let v of list) {
  if (isPrimeNum(v)) {
    result = result + v;
  }
}
console.log(result);

// Практическое задание 9.7
let list = [2, 45, 3, 23, 6];

let min = list[0];
let max = list[0];
for (i = 1; i < list.length; i++) {
  if (list[i] > max) max = list[i];
  if (list[i] < min) min = list[i];
}
console.log(min * max);

// Практическое задание 9.8
let list = [2, 45, 3, 23, 6];

let result = [];
for (let i = list.length - 1; i >= 0; i--) {
  result.push(list[i]);
}
console.log(result);

// Практическое задание 9.9
let sentence = 'Завтра будет лучше чем вчера';

// v.1
let result = [];
let word = '';
for (let i = 0; i < sentence.length; i++) {
  if (sentence.charAt(i) != ' ') {
    word = word + sentence.charAt(i);
  } else {
    result.push(word);
    word = '';
  }
}
result.push(word);
console.log(result);

// v.2
let arrayWords = [...sentence];
let result = [];
let word = '';
for (let v of arrayWords) {
  if (v != ' ') {
    word += v;
    continue;
  }
  result.push(word);
  word = '';
}
result.push(word);
console.log(result);

// Практическое задание 9.10
let list = [2, 45, 3, 23, 6];

function count(arr) {
  let count = 0;
  for (let i of arr) {
    if (i % 2 === 0) {
      count++;
    }
  }
  return count;
}
console.log(count(list));

// Практическое задание 9.11
let list = [2, 45, 3, 23, 6];

function average(arr) {
  let average = 0;
  let arrLength = arr.length;
  for (let i of arr) {
    average = average + i;
  }
  return Math.round(average / arrLength);
}
console.log(average(list));

// Практическое задание 9.12
let list = [2, 54, 2, 54, false, 2];

let result = 0;
for (let i of list) {
  if (typeof i !== 'boolean') {
    result = result + i;
  } else {
    break;
  }
}
console.log(result);

// Практическое задание 9.13

let result = [];
for (let i = 10; i <= 20; i++) {
  result.push(i);
}
console.log(result);

// Практическое задание 9.14
let list = [2, 'привет', 23, true, 2, false, 2];

let numbers_list = [];
for (let i of list) {
  console.log(i);
  if (typeof i === 'number') {
    numbers_list.push(i);
  }
  if (i === false) {
    break;
  }
}
console.log(numbers_list);

// Практическое задание 9.15
let list = ['Лёша', 'default', 'полке', 'клопа', 'нашёл'];

let count = 0;
for (let i of list) {
  if (i.toLowerCase`` !== 'default') {
    count++;
  }
}
console.log(count);

// Практическое задание 9.16
let list = ['почтовый', 'желание', 'абсолютный', 'закрытый'];

let result = '';
for (let i of list) {
  let word = i.toLowerCase``;
  result = result + word[0];
}
console.log(result);

// Практическое задание 9.17
let obj = {
  Яблоко: 'фрукт',
  Арбуз: 'ягода',
  Помидор: 'овощ',
  Огурец: 'овощ',
  Вишня: 'ягода',
};

let result = {};
let arr = Object.values(obj);
arr.forEach(function (a) {
  if (result[a] != undefined) result[a]++;
  else result[a] = 1;
});
console.log(result);

// Практическое задание 9.18
let list = [
  { product: 'Apple', price: 25 },
  { product: 'Cherry', price: 32 },
  { product: 'Strawberry', price: 45 },
];

let max = 0;
let word = '';
for (const i of list) {
  let arr = Object.entries(i);
  let check = '';
  arr.forEach(([key, value]) => {
    if (key === 'product') {
      check = value;
    }
    if (key === 'price' && value > max) {
      max = value;
      word = check;
    }
  });
}
console.log(word);
