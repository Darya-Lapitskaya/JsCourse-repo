const GameRoom = require('./gameRoom/gameRoom');
const Person = require('./person/person');
const Kid = require('./person/kid');
const Parent = require('./person/parent');
const Toy = require('./toy/toy');
const Doll = require('./toy/doll/doll');
const Cube = require('./toy/cube');
const Car = require('./toy/car');
const Ball = require('./toy/ball');
const GameRoomBuilder = require('./gameRoom/gameRoomBuilder');
const TheatreDoll = require('./toy/doll/theatreDoll');
const KewpieDoll = require('./toy/doll/kewpieDoll');
const BuppyDoll = require('./toy/doll/buppyDoll');
const prompt = require('prompt-sync')();

const data = require('E:/JsCourse/JsCourse-repo/Gameroom/data/data.json');

let listOfTypes = Object.entries(data);
// console.log(RRR.length);

// console.log(RRR[0][1].length);
// console.log(RRR[1][1].length);
// console.log(RRR[2][1].length);
//let listOfTypes = Object.entries(data);
let jsonToysPool = [];

for (let i = 0; i < listOfTypes.length; i++) {
    // console.log(RRR[i][0]);
    if (listOfTypes[i][0] == 'Toy') {
        for (let k = 0; k < listOfTypes[i][1].length; k++) {
            console.log('Inside Toy part');
            console.log(listOfTypes[i][1][k]);
            let newArr = Object.entries(listOfTypes[i][1][k]);
            let D = new Toy(newArr[0][1], newArr[1][1], newArr[2][1], newArr[3][1], newArr[4][1], newArr[5][1]);
            jsonToysPool.push(D);

        }
    } else if (listOfTypes[i][0] == 'Doll') {
        for (let k = 0; k < listOfTypes[i][1].length; k++) {
            let newArr = Object.entries(listOfTypes[i][1][k]);
            let D = new Doll(newArr[0][1], newArr[1][1], newArr[2][1], newArr[3][1], newArr[4][1], newArr[5][1], newArr[6][1]);
            jsonToysPool.push(D);

        }
    } else if (listOfTypes[i][0] == 'Car') {
        for (let k = 0; k < listOfTypes[i][1].length; k++) {
            let newArr = Object.entries(listOfTypes[i][1][k]);
            let D = new Car(newArr[0][1], newArr[1][1], newArr[2][1], newArr[3][1], newArr[4][1], newArr[5][1], newArr[6][1]);
            jsonToysPool.push(D);

        }
    }
}

console.log("RESULT");
console.log(jsonToysPool);


// for (let i = 0; i < RRR.length; i++) {
//     // console.log(RRR[i][0]);
//     if (RRR[i][0] == 'Toy') {
//         for (let k = 0; k < RRR[i][1].length; k++) {
//             console.log('Inside Toy part');
//             console.log(RRR[i][1][k]);
// let newArr = Object.entries(RRR[i][1][k]);
// console.log(object);

// let D = new Toy(4, 'large', '18+', 'wood', 'red', 'Ford');
//             jsonToysPool.push(D);
//         }
//     } else if (RRR[i][0] == 'Doll') {
//         for (let k = 0; k < RRR[i][1].length; k++) {
//             console.log('Inside Doll part');
//             console.log(RRR[i][1][k]);

//         }
//     } else if (RRR[i][0] == 'Car') {
//         for (let k = 0; k < RRR[i][1].length; k++) {
//             console.log('Inside Car part');
//             console.log(RRR[i][1][k]);

//         }
//     }
// }