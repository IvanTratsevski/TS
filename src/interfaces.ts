interface IColored {
    color: string;
    hex: string;
}

interface IEngined {
    engineModel: string;
    engineFuelType: string;
    ride: (where: string) => void;
}
class Car implements IColored, IEngined {
    hex: string;
    engineModel: string;
    engineFuelType: string;
    constructor(public color: string){
        this.engineModel = 'GTX';
        this.engineFuelType = 'CRYSTAL';
        this.hex = '00ff00';
    }
    ride(where: string ){
        console.log(`machine is riding to ${where}`);
    }
}
class Bicycle implements IColored{
    constructor(public color: string, public hex: string){}
}