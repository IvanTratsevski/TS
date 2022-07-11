var Elements;
(function (Elements) {
    Elements[Elements["rock"] = 0] = "rock";
    Elements[Elements["papper"] = 1] = "papper";
    Elements[Elements["scissors"] = 2] = "scissors";
})(Elements || (Elements = {}));
class GameMember {
    constructor(numberOfElement, nameOfElement) {
        this.numberOfElement = numberOfElement;
        this.nameOfElement = nameOfElement;
    }
    static converNumberOfElementToName(numberOfElement) {
        return Elements[numberOfElement];
    }
}
class Computer extends GameMember {
    static generateRandomNumberOfElement() {
        return Math.floor(Math.random() * 3);
    }
}
class Player extends GameMember {
    static getNumberOfUserElement() {
        let userNumber = null;
        while (userNumber === null) {
            userNumber = prompt("Choose element");
        }
        return +userNumber;
    }
}
const game = () => {
    console.log('Game started');
    const computerNumber = Computer.generateRandomNumberOfElement();
    const computer = new Computer(computerNumber, GameMember.converNumberOfElementToName(computerNumber));
    const playerNumber = Player.getNumberOfUserElement();
    const player = new Player(playerNumber, GameMember.converNumberOfElementToName(playerNumber));
    const whoWins = (computer, player) => {
        if (computer.numberOfElement === 0 && player.numberOfElement === 1 ||
            computer.numberOfElement === 1 && player.numberOfElement === 2 ||
            computer.numberOfElement === 2 && player.numberOfElement === 0) {
            console.log(`Player wins! Comp:${computer.nameOfElement} - Player:${player.nameOfElement}`);
        }
        else if (player.numberOfElement === 0 && computer.numberOfElement === 1 ||
            player.numberOfElement === 1 && computer.numberOfElement === 2 ||
            player.numberOfElement === 2 && computer.numberOfElement === 0) {
            console.log(`Computer wins! Comp:${computer.nameOfElement} - Player:${player.nameOfElement}`);
        }
        else {
            console.log(`Draw! Comp:${computer.nameOfElement} - Player:${player.nameOfElement}`);
        }
    };
    whoWins(computer, player);
};
game();
//# sourceMappingURL=rps.js.map