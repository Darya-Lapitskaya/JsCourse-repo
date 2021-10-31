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

let kids = [
    new Kid('Darya', 'Lapitskaya', new Date('September 08, 1996')),
    new Kid('Maria', 'Zayats', new Date('March 05, 1994')),
    new Kid('Roman', 'BlaBla', new Date('March 10, 1993')),
];

let kids2 = [
    new Kid('aaa', 'aaa', new Date('September 08, 1996')),
    new Kid('bbb', 'bbb', new Date('March 05, 1994')),
    new Kid('ccc', 'ccv', new Date('March 10, 1993')),
];


let toys = [
    new Toy(4, 'large', '18+', 'wood', 'red', 'Ford'),
    new Toy(10, 'small', '18+', 'metal', 'blue', 'BMW'),
    new Toy(15, 'big', '10', 'wood', 'orange', 'Nike'),
    new Toy(10, 'big', '3', 'wood', 'blue', 'Barbie'),
];


let toys2 = [
    new Toy(1, 'large', '18+', 'wood', 'red', 'new1'),
    new Toy(1, 'small', '18+', 'metal', 'blue', 'new2'),
    new Toy(10, 'big', '10', 'wood', 'orange', 'new3'),
];

let toy1 = new Toy(100, 'big', '10', 'wood', 'orange', 'new3');
let room = new GameRoomBuilder(100).addKidsPool(kids).addToysPool(toys).build();
console.log(room.budget);
console.log(room.budget);
//let filtArr2 = room.addToyFilterCriteria();
//console.log(filtArr2);

// (()=> {
//     cr.price = "10";
//         let filteredArr = toys.filter(function (item) {
//             for (let key in cr) {
//                 if (item[key] === undefined || item[key] != cr[key])
//                     return false;
//             }
//             return true;
//         })
//         console.log(filteredArr);
//     })();


// let arr = room.filterToys();
// console.log(arr);

(async () => {
    let isMenu = true;
    while (isMenu) {
        const menu = await prompt('Please select option: 1 - show list of toys 2- show list of kids 3 - Add new toy  4 - Filter toys 0 - exit from menu ');
        switch (menu) {
            case '1':
                console.table(toys);
                break;
            case '2':
                console.table(kids);
                break;

            case '3':
                room.addToy(toy1);
                break;

            case '4':
                let isParamMenu = true;
                let params = {};
                while (isParamMenu) {
                    const paramMenu = await prompt(' Select one or many parameters for filtering. 1 - Filter by price 2 - Filter by material 0 - finish&show result');
                    if (paramMenu != "0") {
                        const value = await prompt(' Please enter the value: ');
                        params[paramMenu] = value;
                        console.log(params);
                    } else {
                        console.log(params);
                        let filtArr = room.filterToys(params);
                        console.log(filtArr);
                        isParamMenu = false;0

                    }
                }
                break;

            case '0':
                {
                    isMenu = false;
                    break;
                }

            default:
                console.log('I cannot recognize your answer,please try one more time...');
                break;
        }
    }

})();
