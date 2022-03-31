"use strict"
// 3. Написать функцию isValidDateFormat(str) , которая бы проверяла валидный формат даты (YYYY/MM/DD HH:MM) или нет 
// console.log(isValidDateFormat("2012/09/18 12:10")); // true
// console.log(isValidDateFormat("12.02.2022 12:10")); // false
// Функция не должна проверять, что дата настоящая (например можно ввести 32 день месяца) - она должна проверять именно формат даты YYYY/MM/DD HH:MM) Для решения данной задачи используем регулярные выражение
// Также для решения задачи вам поможет эта статья: https://learn.javascript.ru/regexp-escaping

const isValidDateFormat = (str) => {
  let regexp = /^\d\d\d\d\/\d\d\/\d\d\s\d\d\:\d\d$/;
  return regexp.test(str);
}

console.log(isValidDateFormat("2012/09/18 12:10")); // true
console.log(isValidDateFormat("12.02.2022 12:10")); // false
