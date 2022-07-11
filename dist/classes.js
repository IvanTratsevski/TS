// class Person {
//     name: string;
//     age: number;
//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }
// }
// class Person {
//     constructor(
//         public name: string, 
//         public age: number,
//         public city: string = "Gomel"
//         ){}
// }
// class Person {
//     constructor(
//         public readonly name: string, 
//         protected age: number,
//         public id: number,
//         public city: string = "Gomel"
//     ){}
//     run(this: Person,destination: string): void{
//         console.log(`${this.name} runs to ${destination}`);
//     }
// }
// class Programmer extends Person{
//     static nedosyp: boolean = true;
//     constructor(public name: string, public stack: string[]){
//         super(name, 20,100);
//     }
//     run(destination: string): void{
//         console.log(`${this.name} runs for beer`);
//         super.run("Somewhere");
//     }
//     setAge(val: number){
//         this.age = val;
//     }
//     code(){
//         console.log(`${this.name} writes code`);
//     }
//     static makeConference(speakers: Programmer[]){
//         speakers.forEach(({name}) => {
//             console.log(`${name} tells smth`);
//         });
//     }
// }
// const pr1 = new Programmer('Oleg',['HTML','CSS']);
// const pr2 = new Programmer('Vovchik',['HTML','CSS']);
// const pr3 = new Programmer('Tolyan',['HTML','CSS']);
// Programmer.makeConference([pr1,pr2,pr3]);
//# sourceMappingURL=classes.js.map