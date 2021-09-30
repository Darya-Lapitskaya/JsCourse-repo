
diceValue = Math.floor(Math.random() * (6 + 1));
console.log (`Person1, attempt 1: ${diceValue}`);
sum1 +=diceValue;

diceValue = Math.floor(Math.random() * (6 + 1));
console.log (`Person2, attempt 1: ${diceValue}`);
sum2 +=diceValue;

diceValue = Math.floor(Math.random() * (6 + 1));
console.log (`Person1, attempt 2: ${diceValue}`);
sum1 +=diceValue;
diceValue = Math.floor(Math.random() * (6 + 1));
console.log (`Person2, attempt 2: ${diceValue}`);
sum2 +=diceValue;
diceValue = Math.floor(Math.random() * (6 + 1));
console.log (`Person1, attempt 3: ${diceValue}`);
sum1 +=diceValue;
diceValue = Math.floor(Math.random() * (6 + 1));
console.log (`Person2, attempt 3: ${diceValue}`);
sum2 +=diceValue;
    }

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