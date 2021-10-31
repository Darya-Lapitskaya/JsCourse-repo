const GameRoom = require('./gameRoom');
const Toy = require('E:/JsCourse/JsCourse-repo/Gameroom/src/toy/toy');

class GameRoomBuilder {
    constructor(budget) {
        this.gameRoom = new GameRoom();
        this.gameRoom.budget = budget;
    }

    addToysPool(toys) {

        let priceOfToys = 0;
        let newArr = [];
        for (let i = 0; i < toys.length; i++) {
            priceOfToys = priceOfToys + toys[i].price;
            if (priceOfToys <= this.gameRoom.budget) {
                newArr.push(toys[i]);
                this.gameRoom.budget = this.gameRoom.budget - toys[i].price;
            } 
        }
        
        this.gameRoom.toysPool = [...this.gameRoom.toysPool, ...newArr];
        console.log(`Successfully added toys: ${newArr.length}`);
        console.log(`Number of toys not added because of price limitation: ${toys.length - newArr.length}`);
        return this;

    }

    addKidsPool(kids) {
        this.gameRoom.kidsPool = [...this.gameRoom.kidsPool, ...kids];
        return this;

    }

    addToy(toy) {
        if (toy.price <= budget) {
            this.gameRoom.toysPool.push(toy);
        } else {
            console.log('Budget is not enough');
        }
        return this;
    }

    addKid(kid) {
        this.gameRoom.kidsPool.push(kid);
        return this;
    }

    build() {
        return this.gameRoom;
    }
}

module.exports = GameRoomBuilder;