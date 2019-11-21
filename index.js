class Inhabitant {
  constructor(name, gender, friends) {
    this.resident = this.constructor.name;
    this.name = name;
    this.gender = gender;
    this.friends = friends;
  }
  toGetFriends() {
    return this.friends.join(" ");
  }
  toShowInfo() {
    return Object.entries(this)
      .map(([prop, value]) => `${prop}: <b>${value}</b>`)
      .join(" ");
  }
  toString() {
    return `${this.toShowInfo()}`;
  }
}
class Human extends Inhabitant {
  constructor(name, gender, friends, saying) {
    super(name, gender, friends);
    this.hands = 2;
    this.legs = 2;
    this.saying = saying;
  }
}

class Man extends Human {
  constructor(name, friends, saying) {
    super(name, "male", friends, saying);
  }
}

class Woman extends Human {
  constructor(name, friends, saying) {
    super(name, "female", friends, saying);
  }
}

class Animal extends Inhabitant {
  constructor(name, gender, friends, saying) {
    super(name, gender, friends);
    this.paws = 4;
    this.saying = saying;
  }
}
class Dog extends Animal {
  constructor(name, gender, friends, saying) {
    super(name, gender, friends, saying);
  }
}

class Cat extends Animal {
  constructor(name, gender, friends, saying) {
    super(name, gender, friends, saying);
  }
}

class catWoman extends Woman {
  constructor(name, friends, saying) {
    super(name, friends, saying);
  }
}

let inhabitant = [
  new Man(
    "Jack",
    ["Sara", "Selina", "Archi"],
    "I hope you're having a wonderful day"
  ),
  new Woman("Sara", ["Felix", "Jack"], "Hey Jack, good to see you! "),
  new Dog("Archi", "male", ["everyone"], "Woof-woof!"),
  new Cat("Felix", "male", ["Sara"], "Meow-meow"),
  new catWoman("Selina", ["I'm unfriendly person"], "Meow-meow")
];

inhabitant.forEach(e => print(e.toString()));
