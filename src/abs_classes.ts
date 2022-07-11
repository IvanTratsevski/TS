abstract class Person{
    abstract legs: number;
    constructor(public name: string,public age: number){}
    abstract sing(music: string): void;
}
class Programmer extends Person{
    legs: number;
    code(){
        console.log(`${this.name} is codding`);
    }
    sing(music: string){
        console.log(`${this.name} is singing ${music} realy bad`)
    }
}
const p1 = new Programmer("Bogdan", 61);