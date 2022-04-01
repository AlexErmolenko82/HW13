"use strict"
// 1. Сделать API запрос - https://jsonplaceholder.typicode.com/posts/1.
// Результат сохранить в localStorage . Нужно использовать storage.js модуль, который написали на занятии.
// При перезагрузке страницы необходимо проверить, если данные есть в хранилище - то вывести их, если нет - то сделать заново запрос в API

import storage from "./storage.js";

const json2storage = (url) => {
    let json = storage.get("json");
    if (json) {
            console.log("from storage");
            console.log(json);
        } else {
            console.log("first init");
            setJson(url);
        }
}

const setJson = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw response;
      } else {
        storage.set("json", await response.json());
        }
    } catch (responseError) {
      if (responseError.status === 404) {
        console.log("URL not found");
      } else {
        console.error(error);
      }
    }
}

json2storage("https://jsonplaceholder.typicode.com/posts/1");

// 2. Добавить метод remove(key) в модуль storage.js
// Пример вызова
// storage.remove("theme")

function askRemove() {
    if (confirm(`Remove json from localStore?`))
    storage.remove("json");
  }
  
setTimeout(askRemove, 5000);

// 3. Написать функцию isValidDateFormat(str) , которая бы проверяла валидный формат даты (YYYY/MM/DD HH:MM) или нет 
// console.log(isValidDateFormat("2012/09/18 12:10")); // true
// console.log(isValidDateFormat("12.02.2022 12:10")); // false
// Функция не должна проверять, что дата настоящая (например можно ввести 32 день месяца) - она должна проверять именно формат даты YYYY/MM/DD HH:MM) Для решения данной задачи используем регулярные выражение
// Также для решения задачи вам поможет эта статья: https://learn.javascript.ru/regexp-escaping

// const isValidDateFormat = (str) => {
//   let regexp = /^\d\d\d\d\/\d\d\/\d\d\s\d\d\:\d\d$/;
//   return regexp.test(str);
// }

// console.log(isValidDateFormat("2012/09/18 12:10")); // true
// console.log(isValidDateFormat("12.02.2022 12:10")); // false
