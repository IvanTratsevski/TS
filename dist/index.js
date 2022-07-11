(function () {
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
    const misterify = (userName, cb) => {
        const newName = 'Mr. ' + userName;
        cb(newName);
    };
    const germanGreeting = (a) => console.log(`Gutten tag ${a}`);
    misterify("Valera", germanGreeting);
    const add = (a, b) => {
        return a + b;
    };
})();
//# sourceMappingURL=index.js.map