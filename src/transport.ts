abstract class Transport {
    abstract speed: number;
    abstract type: string;
    constructor(protected cargo:number = 0, protected fuel: number = 100){}

    abstract ride(from: string, to:string, distance: number): void;

    refillFuel(amount:number){
        if(this.fuel + amount > 100){
            console.log("You are trying to overfill transport")
        } else if(amount < 0){
            console.log("Are you going to steal my fuel?!")
        }else{
            this.fuel += amount;
            console.log("Transport succsesfuly filler");
        }
    }

    setCargo(amount: number){
        if(this.cargo+amount > this.maxCargo){
            console.log("Too much stuff");
        } else if(amount < 0){
            console.log("WTF MAN? Where did you get this antimaterial thing?")
        } else {
            this.cargo += amount;
            console.log("Cargo has been set");
        }
    }
}
class AirTransport extends Transport {
    type = "Air transport";
    speed= 1000;
    static maxCargo: number = 1000;
    static destinationLength: number = 10000;
    constructor(public govId: number){
        super();
    }
    ride(from: string, to:string, distance: number){
        console.log(`Plane ${this.govId} departs from ${from} to ${distance}. Distance of flight is ${distance} km.`)
    }
}
class GroundTransport extends Transport {
    type = "Ground transport"
    speed = 150;
    static maxCargo: number = 30000;
    static destinationLength: number = 1500;
    constructor(public parkinNo: number){
        super();
    }
    ride(from: string, to:string, distance: number){
        console.log(`Truck with parking number ${this.parkinNo} departs from ${from} to ${distance}. Distance of ride is ${distance} km.`)
    }
}