class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  barks() {
    console.log(`${this.name} is barking`);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  meows() {
    console.log(`${this.name} is meowing`);
  }
}

let d1 = new Dog("Doggy");
d1.barks();
let c1 = new Cat("Kitten");
c1.meows();
