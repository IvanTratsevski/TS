class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Programmer extends Person {
    code() {
        console.log(`${this.name} is codding`);
    }
    sing(music) {
        console.log(`${this.name} is singing ${music} realy bad`);
    }
}
const p1 = new Programmer("Bogdan", 61);
//# sourceMappingURL=abs_classes.js.map