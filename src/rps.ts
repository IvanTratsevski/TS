enum Elements{
    "rock",
    "papper",
    "scissors"
}
abstract class GameMember{
    constructor(
        public numberOfElement: number,
        public nameOfElement: string
    ){}

    static converNumberOfElementToName(numberOfElement: number): string{
        return Elements[numberOfElement]
    }
 }
 class Computer extends GameMember{
    static generateRandomNumberOfElement():number{
        return Math.floor(Math.random() * 3);
    }
 }
 class Player extends GameMember{
    static getNumberOfUserElement():number{
        let userNumber: string | null = null;
        while(userNumber === null){
            userNumber = prompt("Choose element");
        }
        return +userNumber;
    }
 }
 type MainGame = () => void;
 const game: MainGame = () => {
    console.log('Game started');
    const computerNumber = Computer.generateRandomNumberOfElement();
    const computer = new Computer(computerNumber,GameMember.converNumberOfElementToName(computerNumber));
    const playerNumber = Player.getNumberOfUserElement();
    const player = new Player(playerNumber,GameMember.converNumberOfElementToName(playerNumber));
    type Comparing = (computer: Computer, player: Player) => void;
    const whoWins: Comparing = (computer, player) => {
        if(
            computer.numberOfElement === 0 && player.numberOfElement === 1 ||
            computer.numberOfElement === 1 && player.numberOfElement === 2 ||
            computer.numberOfElement === 2 && player.numberOfElement === 0){
                console.log(`Player wins! Comp:${computer.nameOfElement} - Player:${player.nameOfElement}`);
        } else if(
            player.numberOfElement === 0 && computer.numberOfElement === 1 ||
            player.numberOfElement === 1 && computer.numberOfElement === 2 ||
            player.numberOfElement === 2 && computer.numberOfElement === 0){
                console.log(`Computer wins! Comp:${computer.nameOfElement} - Player:${player.nameOfElement}`);
        } else{
            console.log(`Draw! Comp:${computer.nameOfElement} - Player:${player.nameOfElement}`);
        }
    }
    whoWins(computer,player);
 }
 game();
