// запустить счетчик который будет увеличиваться на 1 каждую секунду и писать в консоль

function Timer() {

let counter = 0;
        setInterval(() => {
            counter++;
            console.log(`Current counter is: ${counter} `);
        },1000);
        
    }

Timer();