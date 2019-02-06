'use strict';

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
//let expenses1 = prompt("Введите обязательную статью расходов в этом месяце", "");
//let expenses2 = prompt("Во сколько обойдется?", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        "" : ""
    },
    optionalExpenses: "",
    income: [],
    savings: false
}

let budgetDay = appData.budget/30;

console.log(money);
console.log(time);

alert("Бюджет на день: " + budgetDay);