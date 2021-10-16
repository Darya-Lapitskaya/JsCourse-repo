const startDay = new Date('January 01, 2000 00:00:30');
const todayDay = new Date();
let ttlNumOfFridays13 = 0;

while(startDay.getTime()<todayDay.getTime())
{  
    if (startDay.getDay()==5 &&startDay.getDate()==13)
    {
    ttlNumOfFridays13++;
    }
    startDay.setDate(startDay.getDate()+1);
}

console.log(`Total number of Fridays 13 since 01/01/2020 is: ${ttlNumOfFridays13}`);