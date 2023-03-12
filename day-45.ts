// https://www.codewars.com/kata/59138d93eefeaecdbe000031
declare const IAnimal: {
    new (
      name: string,
      age: number,
      legs: number,
      species: string,
      status: string
    ): IAnimal;
  }
  
  interface IAnimal {
    name: string;
    age: number;
    legs: number;
    species: string;
    status: string;
    introduce: () => string;
  }
  export class Animal implements IAnimal {
    constructor(public name:string, public age:number, public legs:number, public species:string, public status:string){}
      introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  export class Shark extends Animal {
    constructor(public name:string,public age:number, public status:string) {
      super(name, age, 0, 'shark', status)
    }
  }
  export class Cat extends Animal {
    constructor(public name:string, public age:number, public status:string) {
      super(name, age, 4, 'cat', status)
    }
      introduce() {
      return `${super.introduce()}  Meow meow!`;
    }
  }
  export class Dog extends Animal {
    constructor(public name:string, public age:number, public status:string, public master:string) {
      super(name,age,4,'dog',status)
    }
      greetMaster() {
      return `Hello ${this.master}`;
    }
  }
  

// https://www.codewars.com/kata/599d636e607719edf600010a
export class Cuboid {
    constructor(public length: number, public width:number, public height: number) {}
    public get surfaceArea():number {
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
    public get volume():number {
      return this.length * this.width * this.height;
    }
  }
  
  export class Cube extends Cuboid {
    public constructor(length:number) {
      super(length, length, length)
    }
  }
