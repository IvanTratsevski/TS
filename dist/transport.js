class Transport {
    constructor(cargo = 0, fuel = 100) {
        this.cargo = cargo;
        this.fuel = fuel;
    }
    refillFuel(amount) {
        if (this.fuel + amount > 100) {
            console.log("You are trying to overfill transport");
        }
        else if (amount < 0) {
            console.log("Are you going to steal my fuel?!");
        }
        else {
            this.fuel += amount;
            console.log("Transport succsesfuly filler");
        }
    }
    setCargo(amount) {
        if (this.cargo + amount > this.maxCargo) {
            console.log("Too much stuff");
        }
        else if (amount < 0) {
            console.log("WTF MAN? Where did you get this antimaterial thing?");
        }
        else {
            this.cargo += amount;
            console.log("Cargo has been set");
        }
    }
}
class AirTransport extends Transport {
    constructor(govId) {
        super();
        this.govId = govId;
        this.type = "Air transport";
        this.speed = 1000;
    }
    ride(from, to, distance) {
        console.log(`Plane ${this.govId} departs from ${from} to ${distance}. Distance of flight is ${distance} km.`);
    }
}
AirTransport.maxCargo = 1000;
AirTransport.destinationLength = 10000;
class GroundTransport extends Transport {
    constructor(parkinNo) {
        super();
        this.parkinNo = parkinNo;
        this.type = "Ground transport";
        this.speed = 150;
    }
    ride(from, to, distance) {
        console.log(`Truck with parking number ${this.parkinNo} departs from ${from} to ${distance}. Distance of ride is ${distance} km.`);
    }
}
GroundTransport.maxCargo = 30000;
GroundTransport.destinationLength = 1500;
//# sourceMappingURL=transport.js.map