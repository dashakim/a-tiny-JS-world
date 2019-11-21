// class Human extends Inhabitant {
//   constructor(name, gender, saying) {
//     super(name,gender, saying);
//     this.hands =  2
//     this.legs = 2
//   }
//   stopSay(){
//     super.say()
//     return `${this.name} stop saying ${this.saying}`
//   }
// }
// let human = new Human("Jonh", 'male', "hello")
// console.log(human.stopSay())
// return Object.keys(obj).map(key => `${i}: ${obj[i]}`).join('; ');
// class Human
// const man = new Inhabitant("human", "Leonid", "male", "2", "2", "Hello!");
// const woman = new Inhabitant("human", "Daria", "female", "2", "2", "Good day!");
// const dog = new Inhabitant("dog", "Archi", "male", "4", "0", "Woof-woof");
// const cat = new Inhabitant("cat", "Co-co", "female", "4", "0", "Meow");
// const catWoman = new Inhabitant("cat-woman", "Kitty", "female", "2", "2");
// catWoman.saying = cat.saying;
// const inhabitant = [man, woman, cat, dog, catWoman];

// const showInfo = function(obj) {
//   let result = "";
//   for (let i in obj) {
//     result += `${i}: ${obj[i]}; `;
//   }
//   return result;
// };

// inhabitant.forEach(i => print(showInfo(i)));

// class Inhabitant1 {
//   constructor(name, gender) {
//     this.name = name;
//     this.gender = gender;
//   }
// }

// new Inhabitant1("Jonh", "male");

// class Inhabitant2 {
//   constructor(props) {
//     this.name = props.name;
//     this.gender = props.gender;
//   }
// }
// new Inhabitant2({ name: "John", gender: "male" });

//   toString() {
//       return   this.name + this.gender
//   }
// }

// class Animal extends Inhabitant {
//   constructor(name, gender, saying) {
//     super(name, gender);
//     this.paws = 4;
//     this.saying = saying;
//   }
// }
// class Cat extends Animal {
//   constructor(name, gender, paws, saying) {
//     super(name, gender, paws, saying);
//   }
//   toString() {
//     return super.toString() + this.paws + this.saying;
//   }
// }

// let cat = new Cat("coco", "female", " last chain");

// console.log(cat.toString()); // true



// class ColorPoint extends Point {
//   constructor(x, y, color) {
//       super(x, y);
//       this.color = color;
//   }
//   toString() {
//       return super.toString() + ' in ' + this.color;
//   }
// }

// let cp = new ColorPoint(25, 8, 'green');
// cp.toString(); // '(25, 8) in green'

// console.log(cp instanceof ColorPoint); // true
// console.log(cp instanceof Point); // true