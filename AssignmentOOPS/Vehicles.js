function Vehicle(name, wheeledOrNot) {
  this.name = name;
  this.wheeledOrNot = wheeledOrNot;
}

Vehicle.prototype.desc = function () {
  console.log(`${this.name} is a ${this.wheeledOrNot} vehicle.`);
};

function NonWheeled(name, isWaterTransport) {
  Vehicle.call(this, name, "Non-Wheeled");
  this.isWaterTransport = isWaterTransport;
}

//chain the prototype of vehicle to non wheeled

NonWheeled.prototype.brief = function () {
  console.log(
    `${this.name} is ${this.wheeledOrNot} and it is a means of ${this.isWaterTransport} transport.`
  );
};

function Wheeled(name, noOfWheels) {
  Vehicle.call(this, name, "wheeled");
  this.noOfWheels = noOfWheels;
}

Wheeled.prototype.desc = function () {
  console.log(
    `A wheeled vehicle can have any number of wheels. ${this.name} has ${this.noOfWheels} wheels.`
  );
};

function FourWheeled(company) {
  Wheeled.call(this, "car", 4);
  this.company = company;
  // this.fuel = fuel;
}

FourWheeled.prototype.desc = function () {
  console.log(`${this.name} of the comapny ${this.company} is fantastic `); //and runs with ${fuel}.`)
};

FourWheeled.prototype.running = function () {
  console.log(`That ${this.company} ${this.name} is running.`);
};

function TwoWheeled(name, company) {
  Wheeled.call(this, name, 2);
  this.company = company;
}

TwoWheeled.prototype.running = function () {
  console.log(`That ${this.company} ${this.name} is going down the slope!`);
};

function Hyundai(fuel) {
  FourWheeled.call(this, "Hyundai");
  this.fuel = fuel;
}

Hyundai.prototype.brief = function () {
  console.log(`The ${this.company} ${this.name} runs with ${this.fuel}.`);
};

function MarutiSuzuki(fuel) {
  FourWheeled.call(this, "MarutiSuzuki");
  this.fuel = fuel;
}

MarutiSuzuki.prototype.brief = function () {
  console.log(`The ${this.company} ${this.name} runs with ${this.fuel}.`);
};

let v = new Vehicle("Auto", "Wheeled");
v.desc();

let nonwheeled1 = new NonWheeled("Ship", "Water");
nonwheeled1.brief();
let nonwheeled2 = new NonWheeled("Flight", "Air");
nonwheeled2.brief();

let wheeled1 = new Wheeled("car", 4);
let wheeled2 = new Wheeled("bicylce", 2);
wheeled1.desc();
wheeled2.desc();

let twowheeler1 = new TwoWheeled("scooty", "Activa");
twowheeler1.running();
let twowheeler2 = new TwoWheeled("bicycle", "Zeus");
twowheeler2.running();

let fourwheeler = new FourWheeled("Tesla");
fourwheeler.desc();
fourwheeler.running();

let hyundai1 = new Hyundai("Petrol");
hyundai1.brief();
let suzuki = new MarutiSuzuki("Disel");
suzuki.brief();
