
let numberOfThrowsPerPerson=3;
let sum1 = 0;
let sum2 = 0;
let result;
const prompt = require('prompt-sync')();
const prompts = require('prompts');
let isGame = true;
let diceValue;

while (isGame)
{
const startQuestion = prompt('Would you like to start game? (Y/N)');
switch (startQuestion){
case 'Y':
    sum1 = 0;
    sum2 = 0;
    console.log ('Great! Lets start!');
    game();
    gameResult();
    break;
case 'N':
    console.log ('Thanks! Waiting you for the next time!');
    return isGame = false;
    break;

    default:
        console.log ('I cannot recognize your answer,please try one more time...');
        break;
}

function game(){

    for (let i=0; i<numberOfThrowsPerPerson; i++)
    { 
        const attemptConfirm = prompt('User-1, Please enter some keyboard letter/number to throw the dice...');
        if (attemptConfirm)
        {
        diceValue = Math.floor(Math.random() * (6 + 1));
        console.log (`User-1. Round: ${i+1}, your result is: ${diceValue}`);
        sum1 +=diceValue;
        }

        const attemptConfirm2 = prompt('User-2, Please enter some keyboard letter/number to throw the dice...');
        if (attemptConfirm2)
        {
            diceValue = Math.floor(Math.random() * (6 + 1));
            console.log (`User-2. Round: ${i+1}, your result is: ${diceValue}`);
            sum2 +=diceValue;
        }
    }
    return sum1, sum2;
}

function gameResult(){
    console.log(`Sum1 is: ${sum1}`);
    console.log(`Sum2 is: ${sum2}`);
    
    if (sum1<sum2){
        console.log('User2 wins!');
    } else {
        if(sum1==sum2)
        {
            console.log('Equal result!'); 
        } else {
            console.log('User1 wins!');
        }
    }
    }
    }


