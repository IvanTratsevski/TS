(function(){
    // let a = 2;
    // let b: string = "Hello world!";
    // let c: number[] = [];
    // let d: any = 2;
    // let e: unknown = 2;
    // e = "sdsd";
    //ERROR let f = e + 2;
    // if(typeof e === "number"){
    //     e = e / 2;
    // }
    // if(c instanceof Array){
    //     c.push(2);
    // }
    // console.log(b);

    // let someTuple: [number,string] = [1,'admin'];

    // let person: {
    //     name: string,
    //     age: number,
    //     isOboltus?: boolean//? опционально
    // } = {
    //     name: 'John',
    //     age: 23
    // }

    // enum Knb {
    //     'PAPER',
    //     'SCISSORS',
    //     'ROCK'
    // }
    // console.log(Knb.ROCK);
                                            //равны
    // const KNB_TYPE = {
    //     PAPER: "PAPER",
    //     SCISSORS: "SCISSORS",
    //     ROCK: "ROCK"
    // }


    // type Person = {          |
    //     name: string,        |
    //     age: number,         |
    //     city?: string        |
    // }                        V

    // type Students = Person[];    |
    //                              V
    // const p1: Person = {
    //     name: 'John',
    //     age: 23,
    //     city: 'Gomel'
    // }
    // const p2: Person = {
    //     name: 'Bob',
    //     age: 0,
    // }

    // const student: Students = [p1,p2]


    type GreetingCB = (userName: string) => void;
    const misterify = (userName: string, cb: GreetingCB) => {
        const newName = 'Mr. ' + userName;
        cb(newName);
    }
    const germanGreeting: GreetingCB = (a) => console.log(`Gutten tag ${a}`);

    misterify("Valera", germanGreeting)
    const add  = (a: number,b: number):string | number/*:тип возвращаемого значения */ => {
        return a + b;
    };


}) ();