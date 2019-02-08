'use strict';

let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

// FOR

// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//     && a != '' && b != '' && a.length < 50){
//         console.log("Done");
//         appData.expenses[a] = b;
//     } else {
//         alert("Заполните все поля!");
//         i--;
//     }
// };

// WHILE

// let i = 0;
// while(i < 2){
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');
    
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b != '' && a.length < 50){
//         console.log("Done");
//         appData.expenses[a] = b;
//     } else {
//         alert("Заполните все поля!");
//         i--;
//     }
//     i++;
// }

// DO...WHILE

let i = 0;
do{
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50){
        console.log("Done");
        appData.expenses[a] = b;
    } else {
        alert("Заполните все поля!");
        i--;
    }
    i++;
} while(i<2);

appData.budgetDay = appData.budget / 30;

alert("Бюджет на день: " + appData.budgetDay);

if (appData.budgetDay < 100){
    console.log("Минимальный уровень достатка");
} else if (appData.budgetDay > 100 && appData.budgetDay < 2000 ){
    console.log("Средний уровень достатка");
} else if (appData.budgetDay > 2000){
    console.log("высокий уровень достатка");
} else{
    console.log("Произошла ошибка");
}