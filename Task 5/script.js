'use strict';
let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
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
        }    
    },
    detectDayBudget: function() {
        appData.budgetDay = (appData.budget / 30).toFixed();
        alert("Бюджет на день: " + appData.budgetDay);
    },
    detectLevel: function() {
        if (appData.budgetDay < 100){
            console.log("Минимальный уровень достатка");
        } else if (appData.budgetDay > 100 && appData.budgetDay < 2000 ){
            console.log("Средний уровень достатка");
        } else if (appData.budgetDay > 2000){
            console.log("высокий уровень достатка");
        } else{
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if(appData.savings == true) {
            let save = +prompt("Какова сумма накоплений"),
                percent = +prompt("Под какой процент");
    
                appData.monthIncome = (save/100/12*percent).toFixed();
                alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function(){
        for(let i = 0; i < 3; i++){
            let qOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = qOptExpenses;    
        }
    },
    chooseIncome: function() {
            let items = prompt("Что принесет доп доход? (Перечислите через запятую)", "");

            while(!isNaN(items) || items == '' || items == null){
                items = prompt("Что принесет доп доход? (Перечислите через запятую", "");
            } 
            appData.income = items.split(", ");
            let some = prompt("Может что-то еще?");

            while(!isNaN(some)){
                some = prompt("Может что-то еще?");
            }
            
            appData.income.push(some);
            //appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
            console.log("done");

            appData.income.forEach(function(item, i){
                console.log("Способы доп заработка: \n" + (i+1) + ": " + item);
            });
        
    }
    
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " " + appData[key]);
}