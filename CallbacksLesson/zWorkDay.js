// нужен кода который выведет "начало работы" и дата(new Date) с точностью до секунды или выше,
// через 4 секунда выведет "Обед" и дату с точностью до секунды
// 	 через 5 секунд выведет "конец работы" и дату с точностью до секунды


const currDay = new Date();

console.log('Beginning of work day:' + new Date());
setTimeout(() => { console.log('Lunch time: ' + new Date()); }, 4000);
setTimeout(() => { console.log('End of work day: ' + new Date()); }, 9000);





